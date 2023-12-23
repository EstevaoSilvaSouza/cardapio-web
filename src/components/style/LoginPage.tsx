// Estilos CSS com Styled-Components
import { Box} from "@chakra-ui/react";
import styled from "styled-components";


export const BoxMain = styled(Box)`
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 15px 0;
`;

export const InputPerson = styled.input`
    width: 85%;
    height: 40px;
    border: 2px solid #e6e6e6;
    background-color: #fff;
    padding: 0 15px;
    border-radius: 25px;
    outline: none;
    font-size: 16px;
    color: #555;
    transition: all 0.3s ease-in-out;

    &:focus {
        border-color: #6FCF97;
        box-shadow: 0 0 8px rgba(111, 207, 151, 0.6);
    }
`;
