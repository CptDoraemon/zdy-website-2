import {tableActions} from "./table";
import urls from "../../../../../services/urls";
import axios from "axios";
import {types as filterTypes} from "../../states/filter";

const startFetchData = () => {
  return {
    type: tableActions.TABLE_START_FETCH_DATA
  }
};

const fetchDataSucceeded = (tableData, currentPage, totalPages, totalRows) => {
  return {
    type: tableActions.TABLE_FETCH_DATA_SUCCEEDED,
    tableData,
    currentPage,
    totalPages,
    totalRows,
  }
};

const fetchDataFailed = (message) => {
  return {
    type: tableActions.TABLE_FETCH_DATA_FAILED,
    message
  }
};

const getRequestUrl = (store) => {
  const urlBase = urls.tableData;

  const sort = store.sort.map((cur) => {
    const key = cur.title.internalName;
    const value = cur.selected;

    return `${key}=${value}`;
  });

  const filter = store.filter.filter.map((cur) => {
    const key = cur.internalName;
    let value;

    if (cur.type === filterTypes.range) {
      value = `${cur.active[0]},${cur.active[1]}`
    } else if (cur.type === filterTypes.single) {
      value = `${cur.active[0]}`
    } else if (cur.type === filterTypes.multiple) {
      value = cur.active.length > 1 ?
        cur.active.join(',') :
        `${cur.active[0]}`
    }

    return `${key}=${value}`;
  });

  const page = [`page=${store.table.currentPage}`];

  const queries = [...sort, ...filter, ...page].join('&');
  console.log(queries);
  return `${urlBase}?${queries}`
};

const fetchData = () => {
  return async (dispatch, getStore) => {
    try {
      dispatch(startFetchData());

      const store = getStore();
      const url = getRequestUrl(store);
      const res = await axios.get(url);

      if (res.status === 200) {
        const json = res.data.data;
        dispatch(fetchDataSucceeded(json.tableData, json.currentPage, json.totalPages, json.totalRows));
      } else {
        dispatch(fetchDataFailed('Server Error'));
      }
    } catch (e) {
      dispatch(fetchDataFailed('Server Error'));
    }
  }
};

export default fetchData
