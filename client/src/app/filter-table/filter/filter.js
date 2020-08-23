import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Button} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {primaryButtonStyles, successButtonStyles, warningButtonStyles} from "../../../styles";
import FiltersGroup from "./filters-group";

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
 *
 * @param {boolean} isActiveFilterDifferentFromDefault
 * @param {boolean} isPendingFilterDifferentFromActive
 * @param {boolean} isDisabled
 * @param {applyFilter} filters
 * @param {applyFilter} applyFilter
 * @param {resetFilter} resetFilter
 */
const Filter = ({
  isActiveFilterDifferentFromDefault,
  isPendingFilterDifferentFromActive,
  isDisabled,
  applyFilter,
  resetFilter
                }) => {
  const classes = useStyles();
  const [dropdown, setDropdown] = useState(false);

  const canApplyNewFilter = !isDisabled && isPendingFilterDifferentFromActive;

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color='primary'
        disableElevation
        className={`${classes.filterButton} ${isActiveFilterDifferentFromDefault ? classes.filterButtonActive : classes.filterButtonInactive}`}
        endIcon={dropdown ? <KeyboardArrowDownIcon/> : <ChevronRightIcon/>}
        aria-expanded={dropdown}
        onClick={() => setDropdown(dropdown => !dropdown)}
      >
        {
          isActiveFilterDifferentFromDefault ? 'Filters Applied' : 'Filters'
        }
      </Button>
      {
        dropdown &&
        <Fade in timeout={500}>
          <Paper className={classes.dropdown} elevation={0}>
            <div className={classes.buttonsGroup}>
              <FiltersGroup/>
              <Button variant="contained" className={classes.applyButton} disableElevation onClick={applyFilter} disabled={!canApplyNewFilter}>
                {
                  isPendingFilterDifferentFromActive ? 'Apply new filters' : 'Filters applied'
                }
              </Button>
              <Button variant="contained" className={classes.resetButton} disableElevation onClick={resetFilter} disabled={isDisabled}>
                Reset all filters
              </Button>
            </div>
          </Paper>
        </Fade>
      }
    </div>
  )
};

export default Filter
