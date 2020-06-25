import React from "react";

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import Wrapper from "../../Wrapper/style";
import { dataLore as TextWrapper } from "../../Text";
import FooterWrapper from "../../Footer";
import { CarouselWrapper, Images } from "../../Carousel/style";

import void1 from '../../../assets/images/eye-in-the-abyss-bg.jpg';
import void2 from '../../../assets/images/image1.jpeg';
import void3 from '../../../assets/images/image2.jpeg';
import void4 from '../../../assets/images/image3.jpeg';
import void5 from '../../../assets/images/image4.jpeg';

const Lore = () => {
  return (
    <>
      <Wrapper>
        <TextWrapper />
        <CarouselWrapper>
          <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} useKeyboardArrows={true}>
            <Images>
              <img src={void1} alt="The Void" title="The eye of The Void"/>
            </Images>
            <Images>
              <img src={void2} alt="The Void" title="An Unknowable Power"/>
            </Images>
            <Images>
              <img src={void3} alt="The Void" title="The Fall of Icathia"/>
            </Images>
            <Images>
              <img src={void4} alt="The Void" title="The Voidborn"/>
            </Images>
            <Images>
              <img src={void5} alt="The Void" title="The Touch of The Void"/>
            </Images>
          </Carousel>
        </CarouselWrapper>
      </Wrapper>
      <FooterWrapper />
    </>
  );
}

export default Lore;