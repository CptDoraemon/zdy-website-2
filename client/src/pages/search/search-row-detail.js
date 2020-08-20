import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import BoxScatterPlotChart from "../../components/charts/box-scatter-plot";

const useStyles = makeStyles(theme => ({
  root: {

  },
  backButton: {
    margin: theme.spacing(1, 0)
  },
  chartsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  chartContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: `calc(50% - 2 * ${theme.spacing(2)}px)`,
    margin: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      width: `calc(100% - 2 * ${theme.spacing(1)}px)`,
      margin: theme.spacing(1),
    }
  }
}));

const SearchRowDetail = ({id, goBack}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        disableElevation
        color="primary"
        className={classes.backButton}
        startIcon={<ArrowBackIcon />}
        onClick={goBack}
      >
        Back
      </Button>
      <div className={classes.chartsWrapper}>
      {
        ['1', '2', '3', '4'].map((id) => (
          <div key={id} className={classes.chartContainer}>
            <BoxScatterPlotChart id={`search-row-detail-box-scatter-plot-${id}`}/>
          </div>
        ))
      }
      </div>
    </div>
  )
};

export default SearchRowDetail

