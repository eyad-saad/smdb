import styled from 'styled-components';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

export const Wrapper = styled.div`
    background: ${({backdrop}) => 
        backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})`
        : '#000'
    };
    background-size: cover;
    background-position: center;
    padding: 40px 20px;
    animation: animateMovieInfo 1s;

    @keyframes animateMovieInfo{
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    max-width: var(--maxWidth);
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 20px;

    @media screen and (max-width: 768){
        display: block;
        max-height: none;
    }
    input {
        width: 100%;
        height: 30px;
        border: 1px solid var(--darkGrey);
        border-radius: 20px;
        margin: 10px 0;
        padding: 10px;
    }
    button{
        color: var(--white);
        background: var(--darkGrey);
        min-width: 80px;
        height: 35px; 
        border-radius: 30px;
        border-color: var(--white);
        font-size: var(--fontBig);
        margin: 20px 0px;
        transition: all 0.3s;
        cursor: pointer;
        :hover{
            opacity: 0.8;
        }
    }

`;

export const Text = styled.div`
    width: 100%;
    padding: 20px 50px;
    color: var(--white);
    overflow: hidden;

    .rating-directors{
        display: flex;
        justify-content: flex-start;
    }

    .score{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        background: #fff;
        color: #000;
        font-weight: 800;
        border-radius: 50%;
        margin: 0;

    }
    .director{
        margin: 0 0 0 40px;

        p {
            margin: 0;
        }

        h1 {
            @media screen and (max-width: 768px) {
                font-size: var(--fontBig);
            }
        }
    }
`;
