import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--darkGrey);
    padding: 0 20px;
`;

export const Content = styled.div`
    display: flex;
    justify-content: flex-start;
    max-width: var(--maxWidth)
    padding: 20px 0;
    margin: 0 auto;
    color: var(--white);

    a {
        color: var(--white);
        text-decoration: none;
    }

    button{
        color: var(--white);
        background: var(--darkGrey);
        min-width: 80px;
        height: 35px; 
        border-radius: 30px;
        border-color: var(--white);
        font-size: var(--fontBig);
        margin: 5px;
        transition: all 0.3s;
        cursor: pointer;
        :hover{
            opacity: 0.8;
        }
    }

`;


export const Button = styled.button`

`;


export const LogoImg = styled.img`
    width: 200px;
    @media screen and (max-width: 500px){
        width: 150px
    }
`;

export const TMDBLogoImg = styled.img`
    width: 100px;
    @media screen and (max-width: 500px){
        width: 80px;
    }
    
    `;
