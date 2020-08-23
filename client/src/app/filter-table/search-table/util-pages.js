import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  root: {
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const Loading = () => {
  return (
    <Wrapper>
      <CircularProgress disableShrink />
    </Wrapper>
  )
};

const Error = () => {
  return (
    <Wrapper>
      Failed to load table data
    </Wrapper>
  )
};

const Wrapper = ({children}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {children}
    </div>
  )
};

export {Loading, Error}

