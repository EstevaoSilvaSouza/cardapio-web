import styled from "styled-components";

const primaryColor = "#3498db";
const secondaryColor = "#ecf0f1";
const accentColor = "#e74c3c";
const boxShadowColor = "rgba(0, 0, 0, 0.2)";

export const DivCart = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 20px;
`;

export const H1 = styled.h1`
  font-size: 35px;
  font-weight: bolder;
  text-align: center;
  color: ${primaryColor};
`;

export const H2 = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: ${primaryColor};
`;

export const H3 = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${primaryColor};
`;

export const H4 = styled.h4`
  font-size: 16px;
  font-weight: bold;
  color: ${primaryColor};
`;

export const Button = styled.button`
  background-color: ${accentColor};
  color: ${secondaryColor};
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darken(${accentColor}, 10%);
  }
`;

export const IncrementButton = styled.button`
  background-color: ${primaryColor};
  color: ${secondaryColor};
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darken(${primaryColor}, 10%);
  }
`;

export const TitleCart = styled(H1)`
  font-size: 35px;
  font-weight: bolder;
  text-align: center;
`;

export const TitleProduct = styled(H3)`
  font-weight: bolder;
  text-align: center;
`;

export const DivCartSub = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const CartItem = styled.div`
  width: 100%;
  height: auto;
  background-color: ${secondaryColor};
  border-radius: 10px;
  box-shadow: 0 4px 8px ${boxShadowColor};
  margin: 10px;
  padding: 15px;

  &:hover {
    box-shadow: 0 8px 16px ${boxShadowColor};
    transform: translateY(-4px);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  max-height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
`;