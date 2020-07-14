import styled from 'styled-components';

export const ModalChampionImage = styled.div`
    height: 500px;
    background-image: url(${ props=>props.image });
    background-size: cover;

    @media only screen and (max-width: 1000px) {
        height: 400px;
        background-size: contain;
        background-repeat: no-repeat;
    }

    @media only screen and (min-width: 320px) and (max-width: 414px) {
        height: 170px;
    }

    @media only screen and (max-width: 320px) {
        height: 120px;
    }
`