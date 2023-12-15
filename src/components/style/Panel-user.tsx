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

const hoverEffect = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-3px);
    }
    100% {
        transform: translateY(0);
    }
`;

export const CardMenuName = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 8px;
    animation: ${fadeIn} 0.5s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;

    & > p, h1 {
        font-weight: 500;
        margin: 0;
    }

    & > h1 {
        color: #009688;
        font-size: 1.5rem;
        margin-bottom: 5px;
    }

    & > p {
        color: #555;
        font-size: 1rem;
    }
`;

export const CardItemMenu = styled.div<{ active?: boolean }>`
    display: flex;
    align-items: center;
    width: 85%;
    max-width: 300px;
    height: 50px;
    background-color: ${({ active }) => (active ? "#EB2937" : "#F2F2F2")};
    margin: 2px 0;
    border-radius: 8px;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        cursor: pointer;
        background-color: #EB2937;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s ease, box-shadow 0.3s ease;

        & > a {
            font-weight: 700;
            color: #fff;
        }

        animation: ${hoverEffect} 0.3s ease;
    }

    @media (max-width: 768px) {
        width: 100%;
        max-width: none;
    }
`;

export const LinkItem = styled(Link)`
    margin-left: 20px;
    height: auto;
    font-weight: 400;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
        color: #EB2937;
        transition: color 0.3s ease;
    }
`;

export const AnimatedLinkItem = styled(LinkItem)`
    animation: ${fadeIn} 0.5s ease;
`;

export const CardMenuNameFocused = styled(CardMenuName)`
    &:focus {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
`;

export const CardItemMenuFocused = styled(CardItemMenu)`
    &:focus {
        filter: brightness(95%);
    }
`;