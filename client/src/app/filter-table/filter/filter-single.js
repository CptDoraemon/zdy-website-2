import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {FormControl} from "@material-ui/core";
import filterStyles from "./filter-styles";
import FilterCommon from "./filter-common";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 150,
    margin: theme.spacing(1, 0),
    textTransform: 'capitalize'
  },
  selectInput: {
    padding: '8px 12px',
    fontSize: theme.typography.body2.fontSize,
    textTransform: 'capitalize'
  },
  menuItem: {
    textTransform: 'capitalize'
  }
}));

/**
 * @param {{
 *  title: string,
 *  type: string,
 *  original: [],
 *  active: [],
 *  pending: [],
 *  choices: [],
 *  validationMessage: string
 * }} filter
 * @param {import('./filter').updatePendingFilter} updatePendingFilter
 */
const FilterSingle = ({filter, updatePendingFilter}) => {
  const classes = useStyles();

  const changeHandler = (e) => {
    updatePendingFilter(filter.title, [e.target.value])
  };

  const isValid = filter.validationMessage === '';
  const selected = filter.pending[0];


  return (
    <FilterCommon title={filter.title} validationMessage={filter.validationMessage}>
      <FormControl variant="outlined" className={classes.formControl} error={!isValid}>
        <Select
          value={selected}
          onChange={changeHandler}
          aria-label={filter.title}
          inputProps={{
            className: classes.selectInput
          }}
        >
          {
            filter.choices.map(choice => (
              <MenuItem key={choice} value={choice} dense className={classes.menuItem}>{choice}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </FilterCommon>
  )
};

export default FilterSingle
