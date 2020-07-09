import React, { useState, useEffect } from "react";
import axios from "axios";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import Wrapper from "../../Wrapper/style";
import { ModalImageChampion } from '../../Modal/ModalStyle';
import FooterWrapper from "../../Footer/";
import { dataChampions as TextWrapper } from "../../Text";
import '../../Modal/style.css';
import {
  CWrapper,
  ChampionCard,
  ChampionCardImage,
  ChampionName,
} from "../Champions/style";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Champions = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState({});

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

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
            <ChampionCard key ={id} onClick={() => {handleOpen(); setActive(champions)}}>
              <ChampionCardImage image={champions.image} />
              <ChampionName>
                <span>{champions.name}</span>
              </ChampionName>
            </ChampionCard>
          ))}
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogContent>
              <ModalImageChampion image={active.image}/>
              <h1 style={{color: '#fff'}}>{active.name}</h1>
              <h2 style={{color: '#fff'}}>{active.nickname}</h2>
              <h3 style={{color: '#fff'}}>{active.difficulty}</h3>
              <h4 style={{color: '#fff'}}>{active.role}</h4>
              <p style={{color: '#fff'}}>{active.biography}</p>
            </DialogContent>
          </Dialog>
        </CWrapper>
      </Wrapper>
      <FooterWrapper />
    </>
  );
}

export default Champions;
