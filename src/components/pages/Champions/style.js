import styled from 'styled-components';

export const CWrapper = styled.div`
  display: flex;
  width: 80%;
  flex-flow: row wrap;
  justify-content: space-around;

  @media only screen and (max-width: 1000px) {
    align-items: center;
  }
`
export const ChampionCard = styled.div`
  height: 500px;
  max-height: 60vh;
  min-height: 30vh;
  width: 25%;
  max-width: 100%;
  margin-bottom: 10vh;  
  overflow: hidden;

  @media only screen and (max-width: 1000px) {
    width: 100%;
  }

  &:hover section {
    margin-top: -80px;
    border-top : 1px solid #C4B998;
  }
`
export const ChampionCardImage = styled.div`
  width: 90%;
  height: 100%;
  background-image: url(${ props=>props.image });
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
`
export const ChampionName = styled.section`
  width: 90%;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.5);
  margin-top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;

  & span {
    color: #C4B998;
    text-align: center;
    font-size: 20px;
  }
`