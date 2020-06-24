import React, { useState, useEffect } from "react";
import axios from "axios";
import Wrapper from "../../Wrapper/style";
import FooterWrapper from "../../Footer/";
import { dataChampions as TextWrapper } from "../../Text";
import {
  CWrapper,
  ChampionCard,
  ChampionCardImage,
  ChampionName,
} from "../Champions/style";

const Champions = () => {
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
      <Wrapper>
        <TextWrapper />
        <CWrapper>
          {data.map((champions, id) => (
            <ChampionCard key={id}>
              <ChampionCardImage image={champions.image} />
              <ChampionName>
                <span>{champions.name}</span>
              </ChampionName>
            </ChampionCard>
          ))}
        </CWrapper>
      </Wrapper>
      <FooterWrapper />
    </>
  );
}

export default Champions;
