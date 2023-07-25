import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  // console.log(props.dataPoints)
  const dataPointValues = props.dataPoints.map(dataPoint=>dataPoint.value);
  // console.log(dataPointValues)
  // console.log(...dataPointValues)
  const totalMaximum = Math.max(...dataPointValues);
  // console.log(totalMaximum)

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label} 
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
