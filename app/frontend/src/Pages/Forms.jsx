import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container, Box, Button, Divider,
} from '@mui/material';
import img from '../../../publico/grx.png';
import AskWorkGRX from '../Components/AskWorkGRX';
import Justify from '../Components/Justify';
import AskLogic from '../Components/AskLogic';
import AskChanges from '../Components/AskChanges';
import { Context } from '../Context/context';
import { requestAPI } from '../Api/coletaApi';
import formatData from '../Api/formatData';
import '../styles/forms.css';

function Forms() {
  const navigate = useNavigate();
  const { formdata, enableButton, setEnableButton } = useContext(Context);

  const submit = async (event) => {
    event.preventDefault();
    try {
      const dataFormated = formatData(formdata);
      const endpoint = '/coleta';
      const response = await requestAPI(endpoint, dataFormated);
      navigate('../dados');
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const values = Object.values(formdata);
    const hasValue = values.every((elem) => elem !== '');
    const text = values[3].length >= 15 && values[3].length <= 200;
    if (hasValue && text) setEnableButton(false);
  }, [formdata]);

  return (
    <Container className="container">
      <Container maxWidth="sm">
        <Box
          sx={{
            p: 4,
            bgcolor: '#cfe8fc',
            height: '105vh',
            borderRadius: '15px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            backdropFilter: 'blur(89px)',
            background: 'rgba(240, 240, 240, 0.7)',
          }}
        >
          <img className="image-form" src={img} alt="" />
          <Divider sx={{ m: 2 }}>Formulário GRX</Divider>
          <h4 className="question">1 - Você se considera bom em lógica?</h4>
          <AskLogic />
          <h4 className="question">2 - Gosta de aprender com desafios?</h4>
          <AskChanges />
          <h4 className="question">3 - Gostaria de fazer parte da GRX?</h4>
          <AskWorkGRX />
          <h4 className="question">4 - Por favor, justifique a resposta anterior</h4>
          <Justify />
          <br />
          <Button variant="contained" onClick={submit} disabled={enableButton}>Enviar</Button>
        </Box>
      </Container>
    </Container>
  );
}

export default Forms;
