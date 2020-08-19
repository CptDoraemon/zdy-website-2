import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Filter from "../../components/filter/filter";
import SearchTable from "../../components/table/search-table";
import {mockTableData, mockOptions} from "./mock-data";

const useStyles = makeStyles(theme => ({
  root: {

  }
}));

const Search = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Filter/>
      <SearchTable data={mockTableData} options={mockOptions}/>
    </div>
  )
};

export default Search

