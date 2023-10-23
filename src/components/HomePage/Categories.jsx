import styled from "styled-components";
import { categories } from "../../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <div> 

      <div className="text-5xl text-richblack-700 ml-12 my-12 flex gap-2 flex-col items-center justify-center">
        Explore Different Categories
        <div className="bg-pink-5 w-[450px] h-2"></div>
      </div>

      <Container>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </div>
  );
};

export default Categories;
