

// ESSE É O GRÁFICO DE LINHA PRODUTIVIDADE

const labelsProdutividade =
[
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
    'Domingo',
];

const dataProdutividade = {
    labels: labelsProdutividade,
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: '#522952',
      tension: 0.1
    }]
  };

const configProdutividade = {
    type: 'line',
    data: dataProdutividade,
  };

const graficoProdutividade = new Chart(
    document.getElementById('graficoProdutividade'),
    configProdutividade
);

//

// ESSE É O GRÁFICO DE PIZZA DE RISCO DE INCIDENTES


  const dataRisco = {
    labels: [
      'Máquinas com risco',
      'Máquinas em atenção',
      'Máquinas sem riscos'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        '#FF0404',
        '#FFDA47',
        '#5EFF47'
      ],
      hoverOffset: 4
    }]
  };

  const configRisco = {
    type: 'pie',
    data: dataRisco,
  };

const graficoRisco = new Chart(
    document.getElementById('graficoRisco'),
    configRisco
);