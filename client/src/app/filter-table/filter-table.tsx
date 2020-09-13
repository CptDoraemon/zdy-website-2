import * as React from "react";
import {connect, Provider} from "react-redux";
import FiltersGroupContainer from "./filter/filters-group-container";
import SearchTableContainer from "./search-table/search-table-container";
import {FilterTableDefaultState} from "./redux/states/root-states";
import {useEffect, useState} from "react";
import {
  MultipleFilterInitializer,
  RangeFilterInitializer,
  SingleFilterInitializer
} from "./redux/actions/filter/init-filter";
import {globalActionsGenerators} from "./redux/actions/global-actions";
import {OptionObject} from "./redux/states/sort";

interface FilterTableProps {
  store: any,
  title: string,
  filters: Array<RangeFilterInitializer | MultipleFilterInitializer | SingleFilterInitializer>,
  sorts: OptionObject[],
  isStateInitialized: boolean,
  initState: (
    filters: Array<RangeFilterInitializer | MultipleFilterInitializer | SingleFilterInitializer>,
    sorts: OptionObject[]
  ) => void
}

const InternalFilterTable: React.FC<FilterTableProps> = (
  {
    store,
    title,
    filters,
    sorts,
    isStateInitialized,
    initState
  }) => {

  useEffect(() => {
    if (!isStateInitialized) {
      initState(filters, sorts)
    }
  }, []);

  return (
    <Provider store={store}>
      {
        isStateInitialized &&
          <>
            {/*@ts-ignore*/}
            <FiltersGroupContainer />
            <SearchTableContainer title={title}/>
          </>
      }
    </Provider>
  )
};

function mapDispatchToProps(dispatch: any) {
  return {
    initState: (
      filters: Array<RangeFilterInitializer | MultipleFilterInitializer | SingleFilterInitializer>,
      sorts: OptionObject[]
    ) => {
      dispatch(globalActionsGenerators.initState(filters, sorts))
    }
  }
}

function mapStateToProps(state: FilterTableDefaultState) {
  return {
    isStateInitialized: state.isStateInitialized
  }
}

const SearchTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(InternalFilterTable);

export default SearchTable

