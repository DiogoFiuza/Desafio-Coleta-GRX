import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container, Box, Button, Divider,
} from '@mui/material';
import AskWorkGRX from '../Components/AskWorkGRX';
import Justify from '../Components/Justify';
import AskLogic from '../Components/AskLogic';
import AskChanges from '../Components/AskChanges';
import { Context } from '../Context/context';
import { requestAPI } from '../Api/coletaApi';
import formatData from '../Api/formatData';

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
    <Container maxWidth="sm">
      <Box
        sx={{
          p: 4,
          bgcolor: '#cfe8fc',
          height: '95vh',
          borderRadius: '15px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Divider sx={{ m: 2 }}>Formulário GRX</Divider>
        <h3>1 - Você se considera bom em lógica?</h3>
        <AskLogic />
        <h3>2 - Gosta de aprender com desafios?</h3>
        <AskChanges />
        <h3>3 - Gostaria de fazer parte da GRX?</h3>
        <AskWorkGRX />
        <h3>4 - Por favor, justifique a resposta anterior</h3>
        <Justify />
        <br />
        <Button variant="contained" onClick={submit} disabled={enableButton}>Enviar</Button>
      </Box>
    </Container>
  );
}

export default Forms;
