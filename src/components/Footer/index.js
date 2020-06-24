import React from 'react';
import { FooterWrapper, FooterContain, FooterKubanacode, FooterKubanacodeText, FooterInfo, FooterInfoText, FooterSocial, FooterSocialIcon } from '../Footer/style';
import FacebookIcon from '../../assets/icons/facebook.svg';
import InstagramIcon from '../../assets/icons/instagram.svg';
import WhatsappIcon from '../../assets/icons/whatsapp.svg';
import GithubIcon from '../../assets/icons/github.svg';

export default class Footer extends React.Component {
    render() {
        return(
            <FooterWrapper>
                <FooterContain>
                    <FooterKubanacode>
                        <FooterKubanacodeText href="https://github.com/Kubanacode" target="_blank">Kubanacode</FooterKubanacodeText> 
                    </FooterKubanacode>
                    <FooterInfo>
                        <FooterInfoText>
                            2019 Kubanacode. All rights reserved. Made by
                            <a rel="noopener noreferrer" href="http://github.com/damassa" target="_blank"> Felipe Leal Damasceno</a>
                        </FooterInfoText>
                    </FooterInfo>
                    <FooterSocial>
                        <FooterSocialIcon rel="noopener noreferrer" Image={FacebookIcon} href="https://www.facebook.com/damassaa" target="_blank" title="Facebook"/>
                        <FooterSocialIcon rel="noopener noreferrer" Image={InstagramIcon} href="https://www.instagram.com/damassaa/" target="_blank" title="Instagram"/>
                        <FooterSocialIcon rel="noopener noreferrer" Image={WhatsappIcon} href="https://wa.me/5553991799449" target="_blank" title="Whatsapp"/>
                        <FooterSocialIcon rel="noopener noreferrer" Image={GithubIcon} href="https://github.com/damassa" target="_blank" title="Github"/>
                    </FooterSocial>
                </FooterContain>
            </FooterWrapper>
        )
    };
}
