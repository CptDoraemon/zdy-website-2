import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Button} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {primaryButtonStyles, successButtonStyles, warningButtonStyles} from "../../../styles";
import Filter from "./filter";

const useStyles = makeStyles(theme => ({
  root: {

  },
  filterButton: {
    margin: theme.spacing(1, 0),
    textTransform: 'capitalize'
  },
  filterButtonActive: {
    ...successButtonStyles(theme).root
  },
  filterButtonInactive : {
    ...primaryButtonStyles(theme).root
  },
  dropdown: {
    padding: theme.spacing(1, 0),
    marginBottom: theme.spacing(2)
  },
  filtersGroup: {
    marginLeft: theme.spacing(2)
  },
  buttonsGroup: {
    marginLeft: theme.spacing(2)
  },
  applyButton: {
    ...successButtonStyles(theme).root,
    margin: theme.spacing(1),
  },
  resetButton: {
    ...warningButtonStyles(theme).root,
    margin: theme.spacing(1),
  }
}));

/**
 * @callback applyFilter
 */

/**
 * @callback resetFilter
 */

/**
 * @param {boolean} isResettable
 * @param {boolean} isPendingApplicable
 * @param {boolean} disabled
 * @param {Object[]} filters
 * @param {applyFilter} applyFilter
 * @param {resetFilter} resetFilter
 */
const FiltersGroup = ({
  isResettable,
  isPendingApplicable,
  filters,
  disabled,
  applyFilter,
  resetFilter
                }) => {
  const classes = useStyles();
  const [dropdown, setDropdown] = useState(false);

  const canApplyNewFilter = !disabled && isPendingApplicable;

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color='primary'
        disableElevation
        className={`${classes.filterButton} ${isResettable ? classes.filterButtonActive : classes.filterButtonInactive}`}
        endIcon={dropdown ? <KeyboardArrowDownIcon/> : <ChevronRightIcon/>}
        aria-expanded={dropdown}
        onClick={() => setDropdown(dropdown => !dropdown)}
      >
        {
          isResettable ? 'Filters Applied' : 'Filters'
        }
      </Button>
      {
        dropdown &&
        <Fade in timeout={500}>
          <Paper className={classes.dropdown} elevation={0}>
            {/* filters group */}
            <div className={classes.filtersGroup}>
              {
                filters.map((obj, i) => (
                  <Filter filter={obj} key={i} />
                  ))
              }
            </div>

            {/* buttons group */}
            <div className={classes.buttonsGroup}>
              <Button variant="contained" className={classes.applyButton} disableElevation onClick={applyFilter} disabled={!canApplyNewFilter}>
                {
                  isPendingApplicable ? 'Apply new filters' : 'Filters applied'
                }
              </Button>
              <Button variant="contained" className={classes.resetButton} disableElevation onClick={resetFilter} disabled={disabled}>
                Reset all filters
              </Button>
            </div>

          </Paper>
        </Fade>
      }
    </div>
  )
};

export default FiltersGroup
