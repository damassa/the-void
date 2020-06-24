import styled from 'styled-components';

export const CarouselWrapper = styled.div`
    width: 80%;
    height: 400px;
    margin: 5vh 0;
`

export const Images = styled.div`
    width: 100%;
    justify-content: space-around;
    display: flex;
    align-items: center;
    height: 100%;

    & img {
        height: 90%;
        width: auto; 
    }
`