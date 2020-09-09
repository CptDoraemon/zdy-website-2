interface TableRow {
  [key: string]: any
}

export type TableData = TableRow[]

export interface DefaultTableState {
  data: null | TableData,
  currentPage: number,
  totalPages: null | number,
  totalRows: null | number,
  dense: boolean,
  loading: boolean,
  error: boolean,
  errorMessage: string,
  disabled: boolean
}

const defaultTableState: DefaultTableState = {
  data: null,
  currentPage: 1,
  totalPages: null,
  totalRows: null,
  dense: false,
  loading: true,
  error: false,
  errorMessage: '',
  disabled: true
};

export default defaultTableState
