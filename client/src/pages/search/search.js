import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SearchTableContainer from "../../app/filter-table/search-table/search-table-container";
import FiltersGroupContainer from "../../app/filter-table/filter/filters-group-container";
import {Provider} from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {

  }
}));

const Search = ({store}) => {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <div className={classes.root}>
        <FiltersGroupContainer/>
        <SearchTableContainer title={'title placeholder'}/>
      </div>
    </Provider>
  )
};

export default Search

