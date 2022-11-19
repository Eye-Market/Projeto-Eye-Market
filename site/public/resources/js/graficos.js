

// ESSE É O GRÁFICO DE LINHA PRODUTIVIDADE


const graficoProdutividades = new Chart(graficoProdutividade, {
  data: {
      datasets: [{
        type: 'line',
        label: 'Início/Conclusão de solução',
        data: [1,0,1.5,1.5,0,1,0],
        borderColor: '#6D72F9',
        backgroundColor: '#6D72F9',
    }, 
        {
          type: 'bar',
          label: 'Incidentes registrados',
          data: [1, 0, 2, 1, 0, 1, 0],
          backgroundColor: '#FFCECE',
          borderColor: '#FC5656',
          borderWidth: 2
      }],
      labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
  }
});


//

// ESSE É O GRÁFICO DE PIZZA DE RISCO DE INCIDENTES


  const dataRisco = {
    labels: [
      'Máquinas com risco',
      'Máquinas em atenção',
      'Máquinas sem riscos'
    ],
    datasets: [{
      data: [1, 1, 2],
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