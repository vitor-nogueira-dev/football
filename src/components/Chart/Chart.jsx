import { useEffect, useRef } from 'react';

import { useSelector } from 'react-redux';

import { Chart } from 'chart.js/auto';

const BarChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  const teamStatistic = useSelector((state) => state.teamStatistic);

  console.log(teamStatistic?.goals?.for?.minute)

  useEffect(() => {
    if (teamStatistic?.goals?.for?.minute) {
      const data = teamStatistic.goals.for.minute;

      const labels = Object.keys(data).map((minute) => {
        const item = data[minute];
        const total = item?.total;
        const percentage = item?.percentage;
      
        if (typeof total === 'number' && typeof percentage === 'string') {
          return `${minute} (${percentage})`;
        }
        return minute;
      });
      console.log(labels)
      const values = Object.values(data)?.map((item) => {
        if (typeof item === 'object' && item !== null) {
          const total = item.total;
          if (typeof total === 'number') {
            return +total;
          }
        }
        return null;
      });

      console.log(values)
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const ctx = chartRef.current?.getContext('2d');
      if (ctx) {
        const chartData = {
          labels: labels,
          datasets: [
            {
              label: 'Gols',
              data: values,
              backgroundColor: '#FFBF00',
              borderColor: '#FFBF00',
              borderWidth: 1,
            },
          ],
        };

        const chartOptions = {
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            title: {
              display: true,
              text: 'Gols marcados por tempo de jogo',
            },
          },
        };

        chartInstanceRef.current = new Chart(ctx, {
          type: 'bar',
          data: chartData,
          options: chartOptions,
        });
      }
    }
  }, [teamStatistic]);

  return (
    <Container>
      <canvas ref={chartRef} />
    </Container>
  );
};

export default BarChart;
