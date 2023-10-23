
import styled from "styled-components"; 

const Container = styled.div`
  height: 60vh;
  background-color: #fce3ea;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px; 

`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray; 
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container className="my-12">
      <Title>Contact Here...</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Enter Your email" />
        <Button className="bg-pink-5">
          Send
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
