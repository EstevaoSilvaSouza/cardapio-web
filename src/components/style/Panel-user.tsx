import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const CardMenuName = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
    margin-top: 15px;
    width: 85%;
    height: 60px;
    border: 2px solid #EA1730;
    background-color: #FFFFFF;
    border-radius: 5px;

    & > p, h1 {
        font-weight: 500;
        margin: 0 auto;
    }

    & > h1 {
        color: #6FCF97;
    }
`;

export const CardItemMenu = styled.div`
    display: flex;
    align-items: center;
    width: 99%;
    height: 50px;
    background-color: #f9f9f9;
    margin: 2px 0;
    border-radius: 1px;
    transition: background-color 0.3s ease, border-left 0.3s ease;

    &:hover {
        cursor: pointer;
        background-color: #e0e0e0;
        border-left: 5px solid #EA1730;
        transition: background-color 0.3s ease, border-left 0.3s ease;

        & > a {
            font-weight: 700;
            color: #EA1730;
        }
    }
`;

export const LinkItem = styled(Link)`
    margin-left: 20px;
    height:auto;
    font-weight: 400;
    color: #333;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
        color: #EA1730;
        transition: color 0.3s ease;
    }
`;

export const AnimatedLinkItem = styled(LinkItem)`
    animation: ${fadeIn} 0.5s ease;
`;

// Adicione um efeito de sombra sutil no CardMenuName quando estiver em foco
export const CardMenuNameFocused = styled(CardMenuName)`
    &:focus {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
`;

// Adicione um efeito de escurecimento sutil no CardItemMenu quando estiver em foco
export const CardItemMenuFocused = styled(CardItemMenu)`
    &:focus {
        filter: brightness(95%);
    }
`;