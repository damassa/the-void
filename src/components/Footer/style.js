import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    width: 100vw;
    display: flex;
    justify-content: center;
    color: #b09155;
    align-items: center;
    min-height: 30vh;
    flex-flow: nowrap;
    border-top: 1px #b09155 solid;
`

export const FooterContain = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 30vh;
    flex-flow: row;

    @media only screen and (max-width: 768px) {
        flex-flow: column;
        justify-content: center;
    }
`

export const FooterKubanacode = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 70px;
`

export const FooterInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media only screen and (max-width: 768px) {
        display: none;
    }
`

export const FooterInfoText = styled.span`
    font-size: 12px;
`

export const FooterSocial = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;

    @media only screen and (max-width: 768px) {
        justify-content: center;
    }
`

export const FooterSocialIcon = styled.a`
    width: 20px;
    height: 20px;
    background-image: url(${props => props.Image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin: 0 5px;
`

export const FooterKubanacodeText = styled.a`
    text-decoration: none;
`