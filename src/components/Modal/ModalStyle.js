import styled from 'styled-components';

export const ModalImageChampion = styled.div`
    width: 847px;
    height: 500px;
    background-image: url(${ props=>props.image });
    background-size: cover;
`