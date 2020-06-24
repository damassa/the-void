import styled from 'styled-components';

export const OWrapper = styled.div`
  display: flex;
  width: 80%;
  flex-flow: row wrap;
  justify-content: space-around;
`
export const RegionCard = styled.a`
  height: 300px;
  max-height: 60vh;
  min-height: 30vh;
  width: 500px;
  max-width: 100%;
  margin-bottom: 10vh;
  overflow: hidden;

  &:hover section {
    margin-top: -80px;
  }
`
export const ImageCard = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${ props=>props.image });
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`
export const NameRegion = styled.section`
  width: 100%;
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
    font-size: 24px;
  }
`