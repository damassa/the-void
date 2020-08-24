import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { dataOther as TextWrapper } from '../../Text';
import Wrapper from '../../Wrapper/style';
import FooterWrapper from '../../Footer';
import { OWrapper, RegionCard, ImageCard, NameRegion } from './style';

const Other = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/api/other_regions")
      .then((response) => {
        setData(response.data.docs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Wrapper>
        <TextWrapper/>
        <OWrapper>
          {data.map( (OtherRegions, id) => 
            <RegionCard key={id} href={"https://universe.leagueoflegends.com/en_US/region/" + OtherRegions.name.replace(' ', '-')} target="_blank">
              <ImageCard image={OtherRegions.image} title={OtherRegions.name}/>
              <NameRegion>
                <span>{OtherRegions.name}</span>
              </NameRegion>
            </RegionCard>
          )}
          
        </OWrapper>
      </Wrapper>
      <FooterWrapper/>
    </>
  )
}

export default Other;