import styled from "styled-components";

import Background from '../../assets/images/background.jpg';

interface ThumbnailData {
    thumbnail: {
        path: string;
        extension: string;
    };
}

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
    }
`;

export const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const urlImg = (props: ThumbnailData) => `${props.thumbnail.path}.${props.thumbnail.extension}`;

export const Card = styled.div`
    background: #f1f1f1;
    height: 450px;
    width: 300px;
    margin: 10px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 2px 2px 10px 1px rgba(0,0,0,0.3);

    h2, p{
        padding: 5px;
        text-align: justify;
    }

    div#image {
        height: 400px;
        width: 100%;
        background: url(${urlImg}) no-repeat center;
        background-size: cover;
        transition: all 1s;
    }

    &:hover {
        div#image{
            height: 120px;
        }
    }
`;

export const ButtonMore = styled.div`
    background: #f1f1f1;
    height: 40px;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 2px 2px 10px 1px rgba(0,0,0,0.3);
    margin: 20px auto;
    padding: 0 50px;
    border-radius: 5px;
    transition: all 0.3s;

    &:hover {
        background: #ec1d24 ;
    }

`;