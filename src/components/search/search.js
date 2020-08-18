import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  root: {

  }
}));

const Search = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      search
    </div>
  )
};

export default Search
