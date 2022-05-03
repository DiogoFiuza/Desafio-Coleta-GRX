import App from './app';

const app = new App().express;

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Tá rodando em... na porta ${PORT}`);
});
