import React, {useEffect} from "react";
import HighchartsWrapper from "./highcharts-wrapper";

// const dataStructure = {
//   categories: ['1', '2', '3'],
//   data: [
//     [],
//     [],
//     []
//   ]
// };

const useBoxScatterPlotChart = (Highcharts, elementId, data) => {
  useEffect(() => {

    function getBoxPlotData(values) {
      const sorted = values.sort(function (a, b) {
        return a - b;
      });

      return {
        low: sorted[0],
        q1: sorted[Math.round(values.length * 0.25)],
        median: sorted[Math.round(values.length * 0.5)],
        q3: sorted[Math.round(values.length * 0.75)],
        high: sorted[sorted.length - 1]
      };
    }

    const scatterData = data.data
      .reduce(function (acc, data, x) {
        return acc.concat(data.map(function (value) {
          return [x, value];
        }));
      }, []);

    const boxplotData = data.data.map(getBoxPlotData);

    Highcharts.chart(elementId, {

      title: {
        text: 'Highcharts Box Plot and Jittered Scatter Plot'
      },

      credits: {
        enabled: false
      },

      legend: {
        enabled: false
      },

      xAxis: {
        categories: data.categories,
        title: {
          text: 'Experiment No.'
        }
      },

      yAxis: {
        title: {
          text: 'Observations'
        }
      },

      series: [{
        type: 'boxplot',
        name: 'Summary',
        data: boxplotData,
        tooltip: {
          headerFormat: '<em>Experiment No {point.key}</em><br/>'
        }
      }, {
        name: 'Observation',
        type: 'scatter',
        data: scatterData,
        jitter: {
          x: 0.24 // Exact fit for box plot's groupPadding and pointPadding
        },
        marker: {
          radius: 1
        },
        color: 'rgba(100, 100, 100, 0.5)',
        tooltip: {
          pointFormat: 'Value: {point.y}'
        }
      }]
    });
  }, [])
};

const HighchartsBoxScatterPlotChart = ({Highcharts, id, data}) => {
  useBoxScatterPlotChart(Highcharts, id, data);

  return (
    <div id={id} style={{width: '100%', height: '100%'}}>

    </div>
  )
};

const BoxScatterPlotChart = ({id, data}) => {
  return (
    <HighchartsWrapper>
      <HighchartsBoxScatterPlotChart id={id} data={data}/>
    </HighchartsWrapper>
  )
};

export default BoxScatterPlotChart
