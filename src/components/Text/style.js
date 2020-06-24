import styled from 'styled-components';

/*
    Style for text fonts
*/ 

export const TextWrapper = styled.div`
    width: 80%;
    margin: 10vh 0;
`

export const Text = styled.p`
    color: #C4B998;
    font-size: 20px;
    text-align: left;

    @media only screen and (max-width: 992px) {
        text-align: justify;
    } 
`

export const TextLetter = styled.span`
    font-size: 50px;
`