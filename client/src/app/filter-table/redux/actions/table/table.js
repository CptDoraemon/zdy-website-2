import fetchData from "./fetch-data";

export const tableActions = {
  'TABLE_TOGGLE_DENSE': 'TABLE_TOGGLE_DENSE',
  'TABLE_CHANGE_PAGE': 'TABLE_CHANGE_PAGE',
  'TABLE_START_FETCH_DATA': 'TABLE_START_FETCH_DATA',
  'TABLE_FETCH_DATA_SUCCEEDED': 'TABLE_FETCH_DATA_SUCCEEDED',
  'TABLE_FETCH_DATA_FAILED': 'TABLE_FETCH_DATA_FAILED',
};

const toggleDense = () => {
  return (dispatch, getStore) => {
    dispatch({
      type: tableActions['TABLE_TOGGLE_DENSE'],
      dense: !getStore().table.dense
    })
  };
};

const changePage = (page) => {
  return (dispatch) => {
    dispatch({
      type: tableActions['TABLE_CHANGE_PAGE'],
      page
    });
    dispatch(fetchData())
  }
};

export const tableActionsGenerators = {
  toggleDense,
  changePage,
  fetchData
};
