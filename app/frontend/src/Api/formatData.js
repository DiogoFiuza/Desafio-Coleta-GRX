export default function formatData(data) {
  const {
    Pergunta1, Pergunta2, Pergunta3, Pergunta4,
  } = data;
  let QuantidadePositiva = 0;
  let QuantidadeNegativa = 0;
  let QuantidadeNaoAvaliada = 0;
  console.log(data);
  const array = Object.values(data);
  for (const e of array) {
    if (e === 'SIM') QuantidadePositiva += 1;
    if (e === 'NÃO') QuantidadeNegativa += 1;
    if (e === 'Não sei') QuantidadeNaoAvaliada += 1;
    if (e === 'Agora!!') QuantidadePositiva += 2;
  }
  return {
    Pergunta1,
    Pergunta2,
    Pergunta3,
    Pergunta4,
    QuantidadePositiva,
    QuantidadeNegativa,
    QuantidadeNaoAvaliada,
  };
}
