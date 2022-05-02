import React, { useContext } from 'react';
import { Container, Box, Button } from '@mui/material';
import AskWorkGRX from '../Components/AskWorkGRX';
import Justify from '../Components/Justify';
import AskLogic from '../Components/AskLogic';
import AskChanges from '../Components/AskChanges';
import { Context } from '../Context/context';

function Forms() {
  const { formdata } = useContext(Context);

  const submit = () => {
    console.log(formdata);
  };

  return (
    <Container maxWidth="sm" alignitems="center">
      <Box
        sx={{
          p: 4, bgcolor: '#cfe8fc', height: '100vh', borderRadius: '15px',
        }}
      >
        <h1>Formulário GRX</h1>
        <h3>1 - Você se considera bom em lógica?</h3>
        <AskLogic />
        <h3>2 - Gosta de aprender com desafios?</h3>
        <AskChanges />
        <h3>3 - Gostaria de fazer parte da GRX?</h3>
        <AskWorkGRX />
        <h3>4 - Por favor, justifique a resposta anterior</h3>
        <Justify />
        <br />
        <Button onClick={() => submit()}>Enviar</Button>
      </Box>
    </Container>
  );
}

export default Forms;
