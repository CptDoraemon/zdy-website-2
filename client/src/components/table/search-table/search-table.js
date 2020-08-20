import {makeStyles} from "@material-ui/core/styles";
import React, {useMemo, useState} from "react";
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
import useSearchTableData from "./use-search-table-data";
import routerUrls from "../../../router-urls";
import {Error, Loading} from "./util-pages";

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

const SearchTable = (
  {
    data,
    options,
    optionsUpdater,
    totalPages,
    totalRows,
    title,
    currentPage,
    changePage,
  }) => {
  const classes = useStyles();
  const [dense, setDense] = useState(false);
  const [selected, setSelected] = useState({});

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
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={0}>
        <SearchTableToolbar selected={selectedIDs.slice()} title={title} totalRows={totalRows} updater={optionsUpdater}/>
        <SearchTableControls optionsGroup={options} dense={dense} toggleDense={() => setDense(dense => !dense)}/>
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
};

const WithDataSearchTable = () => {
    const {
      props,
      states
    } = useSearchTableData();

    return states.error ?
      <Error/> :
      states.loading ?
        <Loading/> :
        <SearchTable {...props} />
};

export default WithDataSearchTable
