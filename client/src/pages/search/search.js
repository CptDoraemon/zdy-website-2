import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SearchTableContainer from "../../app/filter-table/search-table/search-table-container";
import FiltersGroupContainer from "../../app/filter-table/filter/filters-group-container";

const useStyles = makeStyles(theme => ({
  root: {

  }
}));

const Search = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FiltersGroupContainer/>
      <SearchTableContainer title={'title placeholder'}/>
    </div>
  )
};

export default Search

