// ResultGraph.tsx
import React, { useEffect, useRef } from 'react';
import { Chart, registerables, LinearScale } from 'chart.js';

interface ResultGraphProps {
  data: string[][];
  headings: string[];
}

const ResultGraph: React.FC<ResultGraphProps> = ({ data, headings }) => {
  const chartInstanceRef = useRef<Chart | null>(null);
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Register 'linear' scale
      Chart.register(...registerables, LinearScale);

      const ctx = chartRef.current.getContext('2d');

      // Destroy existing Chart instance
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      // Create a new Chart instance
      chartInstanceRef.current = new Chart(ctx!, {
        type: 'bar',
        data: {
          labels: headings,
          datasets: data.map((record, index) => ({
            label: `Record ${index + 1}`,
            data: record.map(result => parseFloat(result)),
            barThickness: 40, // Adjust the width of the bars
            backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.2)`,
            borderColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`,
            borderWidth: 1,
          })),
        },
        options: {
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              max: 1.0,
            },
          },
        },
      });
    }
  }, [data, headings]);

  return (
    <div style={{ width: '600px', height: '400px', margin: '20px' }}>
      <canvas ref={chartRef} width="600" height="400"></canvas>
    </div>
  );
};

export default ResultGraph;
