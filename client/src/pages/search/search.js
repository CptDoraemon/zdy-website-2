import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Filter from "../../app/filter-table/filter/filter";
import SearchTableContainer from "../../app/filter-table/search-table/search-table-container";

const useStyles = makeStyles(theme => ({
  root: {

  }
}));

const Search = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Filter/>
      <SearchTableContainer title={'title placeholder'}/>
    </div>
  )
};

export default Search

