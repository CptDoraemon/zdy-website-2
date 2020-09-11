import {makeStyles} from "@material-ui/core/styles";
import React, {useEffect, useMemo, useRef, useState} from "react";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import {Link} from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import cloneDeep from 'lodash/cloneDeep'
import SearchTableControls from "./search-table-controls";
import SearchTableHead from "./search-table-head";
import SearchTableToolbar from "./search-table-toolbar";
import routerUrls from "../../../router-urls";
import {Error, Loading, NoResultFound} from "./util-pages";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    width: '100%',
    maxHeight: 500,
  },
  moreInfo: {
    '&:hover': {
      color: theme.palette.primary.main
    },
    '&:link': {
      textDecoration: 'underline'
    },
    '&:visited': {
      textDecoration: 'underline'
    }
  },
  pagination: {
    padding: theme.spacing(2, 1)
  }
}));

const InnerSearchTable = React.forwardRef((
  {
    table,
    sort,
    title,
    sortUpdater,
    toggleDense,
    changePage,
  }, ref) => {
  const classes = useStyles();
  const [selected, setSelected] = useState({});

  const data = table.data;
  const dense = table.dense;
  const totalPages = table.totalPages;
  const currentPage = table.currentPage;
  const totalRows = table.totalRows;

  const header = useMemo(() => {
    return Object.keys(data[0]);
  }, [data]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = {};
      data.forEach(row => {
        const key = `${row.id}`;
        newSelecteds[key] = true
      });
      setSelected(newSelecteds);
    } else {
      setSelected({});
    }
  };

  const handleClick = (id) => {
    const newSelecteds = cloneDeep(selected);
    const key = id.toString();
    newSelecteds[key] = !newSelecteds[key];
    setSelected(newSelecteds);
  };

  const handleChangePage = (e, value) => {
    changePage(value);
  };

  const isSelected = (id) => !(selected[id] === undefined || selected[id] === false);
  const selectedIDs = [];
  for (let key in selected) {
    if (selected.hasOwnProperty(key) && selected[key] !== undefined && selected[key] !== false) {
      selectedIDs.push(key)
    }
  }

  return (
    <div className={classes.root} ref={ref}>
      <Paper className={classes.paper} elevation={0}>
        <SearchTableToolbar selected={selectedIDs.slice()} title={title} totalRows={totalRows}/>
        <SearchTableControls sort={sort} sortUpdater={sortUpdater} dense={dense} toggleDense={toggleDense}/>
        <TableContainer className={classes.table}>
          <Table
            stickyHeader
            size={dense ? 'small' : 'medium'}
            aria-label="data table"
          >
            <SearchTableHead
              header={header}
              numSelected={selectedIDs.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={data.length}
            />
            <TableBody>
              {
                data.map((row, i) => {
                  const id = parseInt(row.id);
                  const isItemSelected = isSelected(id);

                  return (
                    <TableRow
                      hover
                      onClick={()=>handleClick(id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={i}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                        />
                      </TableCell>

                      {
                        header.map((key, i) => (
                          i === 0 ?
                            <TableCell align="left" key={i}>{row[key]}</TableCell> :
                            <TableCell align="right" key={i}>{row[key]}</TableCell>
                        ))
                      }

                      <TableCell
                        align={'right'}
                        padding={'default'}
                      >
                        <Link to={routerUrls.searchRowDetail.getRoute(id)} className={classes.moreInfo}>More Info</Link>
                      </TableCell>
                    </TableRow>
                  )
                })
              }
            </TableBody>
          </Table>
        </TableContainer>

        <Pagination count={totalPages} page={currentPage} onChange={handleChangePage} color={'primary'} variant="outlined" shape="rounded" className={classes.pagination}/>
      </Paper>
    </div>
  );
});

const SearchTable = ({state, title, sortUpdater, toggleDense, changePage, fetchData}) => {
  const ref = useRef(null);
  const loading = state.table.loading;

  // fetch data on mounted
  useEffect(() => {
    fetchData()
  }, []);

  // use table height to set loader height
  const [tableHeight, setTableHeight] = useState(400);
  useEffect(() => {
    if (loading) return;
    if (ref.current) {
      setTableHeight(ref.current.scrollHeight);
    }
  }, [loading]);

  if (state.table.error) {
    return <Error message={state.table.errorMessage}/>
  } else if (state.table.loading) {
    return <Loading height={tableHeight}/>
  } else if (!state.table.data || !state.table.data.length) {
    return <NoResultFound/>
  } else {
    const props = {
      table: state.table,
      sort: state.sort,
      title,
      sortUpdater,
      toggleDense,
      changePage,
    };
    return <InnerSearchTable {...props} ref={ref}/>
  }
};

export default SearchTable
