import React, {useEffect, useState} from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const HighchartsWrapper = ({children}) => {
  const [highchartsModule, setHighchartsModule] = useState(null);

  useEffect(() => {
    import('highcharts/es-modules/masters/highcharts.src')
      .then(module => setHighchartsModule(module.default))
      .catch(e => console.log(e))
  }, []);

  return (
    highchartsModule === null ?
      <CircularProgress disableShrink /> :
      React.cloneElement(children, {Highcharts: highchartsModule})
  )
};


export default HighchartsWrapper
