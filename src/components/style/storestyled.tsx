import styled from "styled-components";

export const MainDivStore = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
`;

export const SubDivStore = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  //background-color: green;
  padding: 5px;
`;

export const CardDivStore = styled.div<{ $tamanho?: string }>`
  width: ${(props) => props?.$tamanho};
  height: auto;
  margin: 10px;
  padding: 10px;
  border-radius: 4%;
  background-color: #f8f8f8;

  transition: 7s all ease;

  &:hover {
  }
`;

export const DivBtns = styled.div`
  //width: 70vw;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 15px;
  //background-color: red;
`;

export const Btns = styled.button`
  margin: 10px;
  height: 45px;
  width: 250px;
  font-size: 20px;
  background-color: #111111;
  color: #fff;
  cursor: pointer;
  border-radius: 5%;
  overflow: auto;

  &:hover {
    background-color: #4e4b4b;
  }
`;
export const BtnsAddMore = styled.button`
  background-color: #111111;
  color: #fff;
  height: 30px;
  margin-left: 20px;
  width: 30px;
  cursor: pointer;
`;

export const BtnsAdd = styled.button`
  background-color: #111111;
  color: #fff;
  height: 35px;
  margin-top: 15px;
  width: 150px;
  cursor: pointer;
`;
