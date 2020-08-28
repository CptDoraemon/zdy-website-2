import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import BrowseInput from "./browse-input";

const useStyles = makeStyles(theme => ({
  root: {

  },
}));

const Browse = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BrowseInput/>
    </div>
  )
};

export default Browse
