import React from 'react';

const Cart = () => {
  const cartItems = [
    {  
      id: 1, 
      title: 'Product 1',
      price: 10.0, 
      image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSI3GbJjm7gfMSKCI0Fm62gv2PnjwPX4nfVDnR036WV-rkvmmBLfvJ1JvO70HTle9hTzkhCixrnaC_yv8g1n1F32GBUPF-qtC_YoKd90oKabL4I1Q08iOVGV5wUyCxVYrHAU3ffaGVDsQ&usqp=CAc',
      desc: 'Bersache Lightweight Casual Shoes with High Quality Sole | Grey Shoes for Men - 9050' 
    },
    { id: 2, 
      title: 'Product 2', 
      price: 15.0, 
      image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSI3GbJjm7gfMSKCI0Fm62gv2PnjwPX4nfVDnR036WV-rkvmmBLfvJ1JvO70HTle9hTzkhCixrnaC_yv8g1n1F32GBUPF-qtC_YoKd90oKabL4I1Q08iOVGV5wUyCxVYrHAU3ffaGVDsQ&usqp=CAc', 
      desc: 'Bersache Lightweight Casual Shoes with High Quality Sole | Grey Shoes for Men - 9050'
    },
    { id: 3, 
      title: 'Product 3', 
      price: 15.0, 
      image: 'https://img.freepik.com/free-photo/summer-fashion-women-straw-hats-vacation-generated-by-ai_188544-10865.jpg', 
      desc: 'Bersache Lightweight Casual Shoes with High Quality Sole | Grey Shoes for Men - 9050'
    },
  ];

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="p-4 w-10/12 mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-pink-5 text-3xl flex items-center justify-center my-5">Your Shopping Cart</h2>
      <div className='flex gap-[100px]'>
        <div className="flex flex-row flex-wrap justify-between">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 m-2 shadow-md w-full min-w-[450px] flex  justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-500">${item.price}</p>
                <p>{item.desc}</p>
              </div>
              <img width={100} height={30} src={item.image} alt="" />
            </div>
          ))}
        </div>
        <div>
          <h3 className="mt-4 text-xl font-semibold">
            Total Price: ${totalPrice.toFixed(3)}
          </h3>
          <button className="mt-4 bg-pink-5 text-white px-4 py-2">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
