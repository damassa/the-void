import styled from 'styled-components';

export const ModalChampionImage = styled.div`
    width: 847px;
    height: 500px;
    background-image: url(${ props=>props.image });
    background-size: cover;
`