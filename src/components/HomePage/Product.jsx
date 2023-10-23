
import styled from "styled-components";
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    position: relative;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);

    &:hover ${Info}{
      opacity: 1;
    }
  `;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
  `;

const Image = styled.img`
    height: 75%;
    z-index: 2;
  `;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #f8265e;
      transform: scale(1.1);
    }
  `;

const Product = ({ item }) => {

  return (
    <Container>
      <Circle />
      <Image className="w-50 h-50 rounded-full aspect-square" src={item.img} />
      <Info>
        <Icon>
          <Link to={"/cart"}>
            <AiOutlineShoppingCart className="w-5 h-5 flex items-center" />
          </Link>
        </Icon>
        <Icon>
          <Link to={"/overview"}>
            <AiOutlineSearch className="w-5 h-5 flex items-center" />
          </Link>
        </Icon>
        <Icon>
          <AiOutlineHeart className="w-5 h-5 flex items-center" />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
