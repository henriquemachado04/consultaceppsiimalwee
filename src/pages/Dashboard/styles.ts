import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    width: 80%;
    margin: auto;
`;

export const Title = styled.h2`
    font-size: 48px;
    color: #3a3a3a;
    max-width: 590px;
    line-heigth: 56px;

    margin-top: 80px;
`;

export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;
    
    display: flex;

    input{
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 2px solid #00;
        border-radius: 0px 0 0 79px;
        color: #3a3a3a;  
        border-right: 0;

        &::placeholder {
            color: #a8a8a3;
        }

    }

    button { 
        width: 210px;
        heigth: 70px;
        background: #04d361;
        border-radius: 0 79px 0px 0;
        border: 0;
        color: #fff;
        font-weigth: bold;
      
        &:hover{
            background: ${shade(0.3, "#04d361")};
        }
    }
`;

export const Ceps = styled.div `
    margin-top: 80px;
    max-width: 700px;
    
    a {
        background: #0f0f0f0f;
        border-radius: 100px 0px 100px 0;
        width: 100%;
        display: block;
        padding: 24px;
        text-decoration: none;

        display: flex;
        align-items: center;

        transition: transform 0.2s;

        &:hover {
            transform: translate(10px);
        }

        & + a{
            margin-top: 16px;
        }

        .uf {
            width: 64px;
            heigth: 64px;
            border-radius: 50%;
            background: #04d361;
            padding: 20px;
        }

        div {
            margin: 0 16px;
            flex: 1;

            strong{
                font-size: 20px;
                color: #3d3d4d;
            }
            
            p {
                font-size: 18px;
                color: #a8a8b3;
                margin-top: 4px;
            }
        }
    }
`;
