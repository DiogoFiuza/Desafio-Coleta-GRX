import React, { useEffect, useState } from 'react';
import {
  Container, Box, Grid,
} from '@mui/material';
import { getData } from '../Api/coletaApi';
import '../styles/dataresult.css';

export default function DataResults() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const endpoint = '/coleta';
    const dados = await getData(endpoint);
    const params = dados.data;
    setData(params);
  };

  const qtyPositive = data.reduce((acc, cur) => acc + cur.QuantidadePositiva, 0);
  const qtyNegative = data.reduce((acc, cur) => acc + cur.QuantidadeNegativa, 0);
  const qtyNaoAvaliada = data.reduce((acc, cur) => acc + cur.QuantidadeNaoAvaliada, 0);
  const total = qtyPositive + qtyNegative + qtyNaoAvaliada;

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className="container">
      <Container maxWidth="sm">
        <Box
          sx={{
            p: 4,
            bgcolor: '#cfe8fc',
            height: '85vh',
            borderRadius: '15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backdropFilter: 'blur(89px)',
            background: 'rgba(240, 240, 240, 0.7)',
          }}
        >
          <h2 className="total">{`Total: ${total}`}</h2>
          <Grid
            className="table"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mt: 10,
            }}
            container
            rowSpacing={1}
            columnSpacing={{
              xs: 1, sm: 2,
            }}
          >
            <Grid className="qtyPositive" xs={4}>
              <p>Quantidade Positiva</p>
            </Grid>
            <Grid xs={4}>
              <p>{qtyPositive}</p>
            </Grid>
            <Grid xs={4}>
              <p>{`${((qtyPositive * 100) / total).toFixed(2)} %`}</p>
            </Grid>
            <Grid className="qtyPositive" xs={4}>
              <p>Quantidade Negativa</p>
            </Grid>
            <Grid xs={4}>
              <p>{qtyNegative}</p>
            </Grid>
            <Grid xs={4}>
              <p>{`${((qtyNegative * 100) / total).toFixed(2)} %`}</p>
            </Grid>
            <Grid className="qtyPositive" xs={4}>
              <p>Quantidade Não Avaliada</p>
            </Grid>
            <Grid xs={4}>
              <p>{qtyNaoAvaliada}</p>
            </Grid>
            <Grid xs={4}>
              <p>{`${((qtyNaoAvaliada * 100) / total).toFixed(2)} %`}</p>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Container>
  );
}
