import { cloneDeep } from 'lodash';
import defaultFilterState from "./filter";
import defaultSortState from "./sort";
import defaultTableState from "./table";

const filterTableDefaultState = {
  filter: cloneDeep(defaultFilterState),
  sort: cloneDeep(defaultSortState),
  table: cloneDeep(defaultTableState)
};

export default filterTableDefaultState
