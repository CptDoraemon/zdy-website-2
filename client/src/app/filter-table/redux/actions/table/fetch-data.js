import {tableActions} from "./table";

const startFetchData = () => {
  return {
    type: tableActions.TABLE_START_FETCH_DATA
  }
};

const fetchDataSucceeded = () => {
  return {
    type: tableActions.TABLE_FETCH_DATA_SUCCEEDED
  }
};

const fetchDataFailed = () => {
  return {
    type: tableActions.TABLE_FETCH_DATA_FAILED
  }
};

const fetchData = () => {
  return (dispatch, getStore) => {
    dispatch(startFetchData());

    setTimeout(() => {
      dispatch(fetchDataSucceeded());
    }, 500)
  }
};

export default fetchData
