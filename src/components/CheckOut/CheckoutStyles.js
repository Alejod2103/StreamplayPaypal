import styled from 'styled-components';

export const PageCont = styled.div`
    height: 100%;
    width: 100%;
`;

export const CheckoutContainer = styled.div`
    height: 80%;
    position: relative;
    left: 30%;
    width: 100%;
    max-width: 485px;
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
    background: linear-gradient(to left, #cc7829, #2e40c7);
    margin-top: 180px;
    border-radius: 15px;
    margin-left: 30px;
    margin-bottom: 200px;
    @media (min-width: 300px) and (max-width: 400px ) {
        margin-left: 0%;
        left: 6%;
        margin-top: 300px;
        width: 90%;
    }

    @media (min-width: 400px) and (max-width: 550px){
        margin-left: 6%;
        width: 90%;
        margin-top: 300px;
        left: 0;
    }
    @media (min-width: 550px) and (max-width: 720px){
        margin-left: 4%;
        width: 100%;
        left: 0%;

    }
`;

export const CheckoutButton = styled.button`
    height: 30px;
    width: 105px;
    left: 110px;
    position: relative;
    margin: 2px;
    display: flex;
    margin-top: 15px;
    color: #fff;
    background: linear-gradient(to left, #e65825, #25e67f);
    border-radius: 15px;
`;

export const CheckoutImg = styled.img`
    height: 300px;
    width: 300px;
    position: relative;
    margin-top: 30px;
    @media (min-width: 300px) and (max-width:400px) {
        position: relative;
        margin-top: 15px;
        height: 150px;
    }
`;

export const ButtonLabel = styled.h3`
    font-size: 9px;
    color: #fff;
    position: relative;
    margin: 7px;
    margin-left: 20px;
    letter-spacing: none;
`;

export const ProductImage = styled.img`
    height: 190px;
    width: 190px;
    top: 100px;
    margin-left: 42%;
    border-radius: 100%;
    position: absolute;
    z-index: 1;

    @media (min-width: 300px) and (max-width: 400px){
        position: absolute;
        margin-left: 25%;
        top: 180px;
    }

    @media (min-width: 400px) and (max-width: 540px){
        margin-left: 35%;
        top: 180px;
    }
`;


export const InputField = styled.input`
    width: 360px;
    position: absolute;
    z-index: 1;
    margin-left: 5%;
    margin-top: 12px;
    border-radius: 7px;
    background-color: #eeeeee;
    outline: 0.1px solid #000;
    height: 32px;
    @media (min-width: 300px) and (max-width:400px) {
        
    }
    @media (min-width: 400px) and (max-width:1000){
        
    }
    @media (min-width: 1000px) and (max-width: full){

    }
`;

export const Inputtext = styled.h2`
    font-size: 13px;
    position: relative;
    z-index: 1;
    color: #000;
    text-shadow: 1px 1px 1px #fff;
    top: 10px;
    margin: 8px;
    letter-spacing: 1px;
`;

export const InfoContainer = styled.div`
    position: relative;
    width: 100%; 
    height: 100px;
    top: 120px;
`;

export const PaqueteText = styled.h2`
    color: #e3e3e3;
    text-shadow: 2px 1px 2px #000;
    position: relative;
    flex-direction: column;
    width: 100%;
    letter-spacing: 2px;
    left: 4%;
    z-index: 1;

    @media (min-width: 300px) and (max-width: 360px) {
        position: relative;
        margin-left: 5%;
        width: 100%;
        font-size: 17px;
        letter-spacing: 1px;
    }

    @media (min-width: 360px) and (max-width: 485px) {
        position: relative;
        margin-left: 8.5%;
        width: 100%;
        font-size: 17px;
        letter-spacing: 1px;
    }

    @media (min-width: 420px) and (max-width: 550px){
        margin-left: 8%;
        font-size: 19px;
    }
`;

export const PriceCheckout = styled.h2`
    font-size: 15px;
    position: relative;
    left: 35%;
    color: #ffb01f;
    @media (min-width: 300px) and (max-width: 400px){
        left: 27%;
    }
`;

export const DescCheckout = styled.h2`
    font-size: 13px;
    width: 100%;
    font-weight: bold;
    color: #fff;
    text-shadow: 2px 1px 2px #000;
    margin-left: 12%;
    @media (min-width: 300px) and (max-width: 400px){
        margin-left: 6%;
        font-size: 11px;
        top: 20px;
        letter-spacing: 1.5px;
    }
`;

export const CheckoutPaypalCont = styled.div`
    position: relative;
    top: 36px;
    color: #fff;
    margin-top: 100px;
    margin-left: 2px;
    margin-right: 2px;
    justify-items: center;
    width: 100%;

    @media (min-width: 300px) and (max-width: 1200px){
        margin-left: 4.9%;
        width: 90%;
    }

    @media screen {
        
    }
`;

