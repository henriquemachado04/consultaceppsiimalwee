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
        border-radius: 5px 0 0 5px;
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
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weigth: bold;
      
        &:hover{
            background: ${shade(0.3, "#04d361")};
        }
    }
`;