const User = require("../models/User");
const OTP = require("../models/OTP");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const otpGenerator = require("otp-generator");
const mailSender = require("../utils/mailSender");
require("dotenv").config();

// function to perform signup 
exports.signup = async(req, res) => {
    try{
        // Destructure the fields from req body
        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            otp,
        } = req.body;

        // validation for data
        if (
            !firstName ||
            !lastName ||
            !email ||
            !password ||
            !confirmPassword||
            !otp
        ){
            return res.status(403).send({
                success: false,
                message: "All fields are required."
            });
        }

        // check if pass and confirm pass are same or not 
        if(password !== confirmPassword){
            return res.status(400).json({
                success: false,
                message: "Password and confirmPassword are not same. Please try again.",
            });
        }

        // check if user already exist in DB or not 
        let existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success: false,
                message: "User already exists. Please login to continue."
            })
        }

        // find the most recent otp in the DB 
        const response = await OTP.find({email}).sort({createdAt: -1}).limit(1);
        if(response.length === 0){
            // OTP not found for the email
			return res.status(400).json({
				success: false,
				message: "The OTP is not valid",
			});
        }

        // otp request se aane wala otp hai 
        else if(otp !== response[0].otp){
            // OTP does not match
			return res.status(400).json({
				success: false,
				message: "The OTP is not valid",
			});
        }


        // all things are good now we need to hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create a user 
        const user = await User.create({
            firstName,
			lastName,
			email,
			password: hashedPassword,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
        });

        return res.status(200).json({
            success: true,
            user,
            message: "User created successfully",
        })
    }

    catch(err){
        console.log("Error occured during signup");
        return res.status(500).json({
            success: false,
            message: "User cannot be registerd. Please try again."
        })
    }
}

// controller for login 
exports.login = async(req, res) => {
    try{
        // get data from req body
        const {email, password} = req.body;

        // validation 
        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            })
        }

        // find if there is user signup in user database
        const user = await User.findOne({email});
        // If user not found with provided email
		if (!user) {
			// Return 401 Unauthorized status code with error message
			return res.status(401).json({
				success: false,
				message: `User is not Registered with Us Please SignUp to Continue`,
			});
		}

        // now user exist in DB so now req ki body wale pass ko hash kr k DB me pass se compare kro if same then login kra do otherwise not.
        // also we need to generate JWT token now 

        if(await bcrypt.compare(password, user.password)) {
            const token = jwt.sign(
                {
                    email: user.email,
                    id: user._id,
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: "24h",
                }
            );

            // save token in DB 
            user.token= token;
            user.password= undefined;

            // set cookie for token and return response 
            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
				httpOnly: true,
            };
            res.cookie("token", token, options).status(200).json({
                success: true,
				token,
				user,
				message: `User Login Success`,
            })
        }
        else {
			return res.status(401).json({
				success: false,
				message: `Password is incorrect`,
			});
		}
    }
    catch(err){
        console.log("Error occured", err);
        return res.status(500).json({
			success: false,
			message: `Login Failure Please Try Again`,
		});
    }
}

// send otp
exports.sendotp = async (req, res) => {
    console.log("Inside")
	try {
		const { email } = req.body;

		// Check if user is already present
		// Find user with provided email
		const checkUserPresent = await User.findOne({ email }); 
        
		// If user found with provided email
		if (checkUserPresent) {
			// Return 401 Unauthorized status code with error message
			return res.status(401).json({
				success: false,
				message: `User is Already Registered`,
			});
		}

		var otp = otpGenerator.generate(6, {
			upperCaseAlphabets: false,
			lowerCaseAlphabets: false,
			specialChars: false,
		});
		const result = await OTP.findOne({ otp: otp });
		console.log("Result is Generate OTP Func");
		console.log("OTP", otp);
		console.log("Result", result);
		while (result) {
			otp = otpGenerator.generate(6, {
				upperCaseAlphabets: false,
			});
		}
		
		// models me insert kr do 
		const otpPayload = { email, otp };
		// email send work done in OTP schema 
		const otpBody = await OTP.create(otpPayload);
		console.log("OTP Body", otpBody);

		res.status(200).json({
			success: true,
			message: `OTP Sent Successfully`,
			otp,
		});


	} catch (error) {
		console.log(error.message);
		return res.status(500).json({ success: false, error: error.message });
	}
};