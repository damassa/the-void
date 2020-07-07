import React, { useState, useEffect } from "react";
import axios from "axios";
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Wrapper from "../../Wrapper/style";
import { ModalImageChampion } from '../../Modal/ModalStyle';
import FooterWrapper from "../../Footer/";
import { dataChampions as TextWrapper } from "../../Text";
import {
  CWrapper,
  ChampionCard,
  ChampionCardImage,
  ChampionName,
} from "../Champions/style";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Champions = () => {
  const classes = useStyles();
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
          <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <ModalImageChampion image={active.image} />
                <h2 id="transition-modal-title">{active.name}</h2>
                <p id="transition-modal-description">{active.nickname}</p>
                <p>{active.biography}</p>
                <p>{active.role}</p>
                <p>{active.difficulty}</p>
              </div>
            </Fade>
          </Modal>
        </CWrapper>
      </Wrapper>
      <FooterWrapper />
    </>
  );
}

export default Champions;
