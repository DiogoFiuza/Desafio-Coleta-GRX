import React, { useEffect, useState } from 'react';
import { Container, Box, Grid } from '@mui/material';
import { getData } from '../Api/coletaApi';

export default function DataResults() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const endpoint = '/coleta';
    const dados = await getData(endpoint);
    const params = dados.data;
    setData(params);
    console.log(dados.data);
    console.log(params[1].QuantidadePositiva);
  };

  const qtyPositive = data.reduce((acc, cur) => acc + cur.QuantidadePositiva, 0);
  const qtyNegative = data.reduce((acc, cur) => acc + cur.QuantidadeNegativa, 0);
  const qtyNaoAvaliada = data.reduce((acc, cur) => acc + cur.QuantidadeNaoAvaliada, 0);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          p: 4,
          bgcolor: '#cfe8fc',
          height: '85vh',
          borderRadius: '15px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h2>{`Total: ${data.length}`}</h2>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{
            xs: 1, sm: 2, md: 3,
          }}
        >
          <Grid xs={6}>
            <p>Quantidade Positiva</p>
          </Grid>
          <Grid xs={6}>
            <p>{qtyPositive}</p>
          </Grid>
          <Grid xs={6}>
            <p>Quantidade Negativa</p>
          </Grid>
          <Grid xs={6}>
            <p>{qtyNegative}</p>
          </Grid>
          <Grid xs={6}>
            <p>Quantidade Não Avaliada</p>
          </Grid>
          <Grid xs={6}>
            <p>{qtyNaoAvaliada}</p>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
