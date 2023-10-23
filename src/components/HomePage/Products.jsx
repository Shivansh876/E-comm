import styled from "styled-components";
import { popularProducts } from "../../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


const Products = () => {
  return (

    <div> 
      <div className="text-5xl text-richblack-700 ml-12 my-12 flex gap-2 flex-col items-center justify-center">
        Popular Products
        <div className="bg-pink-5 w-[250px] h-2"></div>
      </div>

      <Container>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Container>
    </div>
  );
};

export default Products;
