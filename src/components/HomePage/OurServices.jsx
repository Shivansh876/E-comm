import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const serviceData = [
  {
    id: 1,
    image: "https://cdn-icons-png.flaticon.com/512/5946/5946468.png",
    title: "Unlimited Shopping",
  },
  {
    id: 2,
    image: "https://cdn-icons-png.flaticon.com/512/8754/8754100.png",
    title: "Free delivery ",
  },
  {
    id: 3,
    image: "https://cdn-icons-png.flaticon.com/512/5509/5509404.png",
    title: "24x7 support "
  }
]

const OurServices = () => {
  return (
    <div> 
      <div className="text-5xl text-richblack-700 ml-12 my-12 flex gap-2 flex-col items-center justify-center">
        Our Services
        <div className="bg-pink-5 w-[200px] h-2"></div>
      </div>

      <Container className='w-10/12 mx-auto'>
        {
          serviceData.map((item) => {
            return (
              <div className='flex flex-col items-center gap-3 rounded-full aspect-square  p-5'>
                <img width={70} src={item.image} alt="" />
                <p className='text-pink-5'>{item.title}</p>
              </div>
            )
          })
        }
      </Container>
    </div>
  )
}

export default OurServices