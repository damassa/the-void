import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "re-carousel";
import Video from "../../../assets/void.mp4";
import Arrows from "../../Carousel/arrows";
import Wrapper from "../../Wrapper/style";
import FooterWrapper from "../../Footer/";

import { VideoWrapper, VideoPlay } from "./style";
import { dataHome as TextWrapper } from "../../Text";
import { CarouselWrapper, Images } from "../../Carousel/style";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/api/champions", {})
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <VideoWrapper>
        <VideoPlay autoPlay muted loop>
          <source src={Video} type="video/mp4" />
        </VideoPlay>
      </VideoWrapper>
      <Wrapper>
        <TextWrapper />
        <CarouselWrapper>
          <Carousel loop widgets={[Arrows]}>
            {data.map((data, id) => (
              <Images key={id}>
                <img alt="Void Champions" src={data.image} title={data.name} />
              </Images>
            ))}
          </Carousel>
        </CarouselWrapper>
      </Wrapper>
      <FooterWrapper />
    </>
  );
};

export default Home;