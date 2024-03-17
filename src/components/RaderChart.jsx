import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler);

export const data = {
  labels: [
    "Creative",
    "Steady",
    "Introvert",
    "Extrovert",
    "Laziness",
    "Passionate",
  ],
  datasets: [
    {
      data: [8, 10, 8, 5, 2, 9],
      backgroundColor: "rgba(255, 99, 132, 0.4)",
      //   borderColor: "rgba(255, 99, 132, 0.2)",
      //   borderWidth: 1,
    },
  ],
};

const options = {
  // 옵션 (1)
  responsive: false,
  // 옵션 (2)
  //   interaction: {
  //     mode: "index",
  //     intersect: false,
  //   },
  tooltips: {
    callbacks: {
      label: function (tooltipItem) {
        return tooltipItem.yLabel;
      },
    },
  },
  elements: {
    //데이터 속성.
    line: {
      borderWidth: 1,
      borderColor: "red",
    },
    //데이터 꼭짓점.
    point: {
      pointBackgroundColor: "red",
    },
  },
  scales: {
    r: {
      ticks: {
        stepSize: 2.5,
        display: false,
      },
      grid: {
        color: "black",
      },
      //라벨 속성 지정.
      pointLabels: {
        font: {
          size: 14,
          weight: "500",
          family: "Pixel-Thick",
        },
        color: "black",
      },
      angleLines: {
        display: false,
      },
      suggestedMin: 0,
      suggestedMax: 10,
    },
  },
  //위에 생기는 데이터 속성 label 타이틀을 지워줍니다.
  plugins: {
    legend: {
      display: false,
    },
  },
  //기본 값은 가운데에서 펴져나가는 애니메이션 형태입니다.
  animations: {
    tension: {},
  },
};

export default function RaderChart() {
  return <Radar data={data} options={options} />;
}
