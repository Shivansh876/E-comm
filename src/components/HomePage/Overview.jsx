import styled from "styled-components";  
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai"
import { Link } from "react-router-dom";

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;
 
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #F8265E;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px; 
  background-color: #F8265E;
  cursor: pointer; 
  font-weight: 500; 
`;

const OverView = () => {
  return (
    <div className="w-11/12 mx-auto">  
      <div className="flex gap-10 p-[50px]">
        <div className="flex-1">
          <img className="w-100% h-[90vh] cover" src="https://img.freepik.com/premium-photo/man-winter-jacket-shoes-set_658000-747.jpg" />
        </div>
        <div className="flex-1 px-[0px] py-[50px]">
          <p className="text-3xl font-bold">Denim Jump suit</p>
          <p className="mx-[0px] my-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </p>
          <p className="text-3xl">$ 20</p>
          <div className="w-[50%] flex mx[0px] my-[30px] justify-between">
            <div className="flex items-center">
              <div className="text-2xl">Color</div>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </div>
            <Filter>
              <div className="text-2xl">Size</div>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </div>
          <div className="flex items-center justify-between w-[50%]">
            <div className="font-bold flex items-center">
              <AiOutlineMinus />
              <Amount>1</Amount>
              <AiOutlinePlus />
            </div>
            <Button className="text-white">
                <Link to={"/cart"}>
                    ADD TO CART
                </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
