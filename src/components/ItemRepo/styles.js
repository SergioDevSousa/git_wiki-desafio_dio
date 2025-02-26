import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3{
        font-size: 32px;
        margin: 0;
        text-transform: uppercase;
    }
    p{
        font-size: 16px;
        color: #fafafa;
        margin-bottom: 20px;
    }
    a{
        color:rgb(136, 134, 134);
        text-decoration: none;
    }
    a.remover{
        color:#b41afc;
        cursor: pointer;
        
    }
    hr{
        margin: 8px 0;
        border: 1px solid #fafafa;
    }

`;