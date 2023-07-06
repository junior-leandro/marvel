import styled from "styled-components";

import Background from '../../assets/images/background.jpg';

export const Container = styled.main`
    display:flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(54,0,0,0.71),rgba(56,0,0,0.71)), url(${Background}); 
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    
    
`;
export const LogoHeader = styled.header`
    margin:auto;

    img#logo-marvel{
        height: 200px;
        padding: 1em;
    };
`;

export const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Card = styled.div`
    background: linear-gradient(rgba(255,0,0,0.9),rgba(255,0,0,0.9));
    color: #FFFFFF;
    height: 450px;
    width: 300px;
    margin: 10px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 2px 2px 10px 1px rgba(0,0,0,0.3);
    
    h2, p{
        padding: 5px;
        text-align: justify;
    };

    img#image {
        height: 400px;
        width: 100%;
        transition: all 1s;
        object-fit: cover;

    };

    &:hover {
        img#image{
            height: 250px;
        };
    };
`;
export const Footer = styled.footer`
    width: 100%;
    height: 100%;
    padding:50px;
`;
export const ButtonMore = styled.div`
    background: #ec1d24;
    border: 12px solid #ec1d24;
    height: 40px;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 10px 1px rgba(0,0,0,0.3);
    margin: 20px auto;
    padding: 0 50px;
    border-radius: 5px;
    transition: all 0.2s;
    font-size: 20px;

    &:hover {
        background: #000000;
        border: 2px solid #ec1d24;
        color: #FFFFFF;
    };

`;