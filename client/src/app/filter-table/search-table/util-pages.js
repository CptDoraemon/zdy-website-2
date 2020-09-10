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

const Loading = ({height}) => {
  return (
    <Wrapper height={height}>
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

const NoResultFound = () => {
  return (
    <Wrapper>
      No result found with the applied filters
    </Wrapper>
  )
};

const Wrapper = ({children, height}) => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={height !== undefined ? {height} : null}>
      {children}
    </div>
  )
};

export {Loading, Error, NoResultFound}

