import React from "react";
import Carousel from "re-carousel";

import Wrapper from "../../Wrapper/style";
import { dataLore as TextWrapper } from "../../Text";
import Arrows from "../../Carousel/arrows";
import FooterWrapper from "../../Footer";
import { CarouselWrapper, Images } from "../../Carousel/style";

import image1 from '../../../assets/images/eye-in-the-abyss-bg.jpg';
import image2 from '../../../assets/images/image1.jpeg';
import image3 from '../../../assets/images/image2.jpeg';
import image4 from '../../../assets/images/image3.jpeg';
import image5 from '../../../assets/images/image4.jpeg';

const Lore = () => {
  return (
    <>
      <Wrapper>
        <TextWrapper />
        <CarouselWrapper>
          <Carousel loop widgets={[Arrows]}>
            <Images>
              <img src={image1} alt="The Void" />
              <img src={image2} alt="The Void" />
              <img src={image3} alt="The Void" />
              <img src={image4} alt="The Void" />
              <img src={image5} alt="The Void" />
            </Images>
          </Carousel>
        </CarouselWrapper>
      </Wrapper>
      <FooterWrapper />
    </>
  );
}

export default Lore;