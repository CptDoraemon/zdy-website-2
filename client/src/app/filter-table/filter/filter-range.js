import React from "react";
import filterStyles from "./filter-styles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import FilterCommon from "./filter-common";

const useStyles = makeStyles(theme => ({
  textFieldGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  textField: {
    width: 60,
    margin: theme.spacing(1, 1, 1, 0)
  },
  textFieldInput: {
    ...filterStyles(theme).text,
  },
}));

const MIN_NAME = 'min';
const MAX_NAME = 'max';

/**
 * @param {{
 *  title: string,
 *  type: string,
 *  pending: [],
 *  validationMessage: string
 * }} filter
 * @param {import('./filter').updatePendingFilter} updatePendingFilter
 */
const FilterRange = ({filter, updatePendingFilter}) => {
  const classes = useStyles();
  console.log(filter.pending);

  const changeHandler = (e) => {
    let pending;
    const newString = e.target.value;

    if (e.target.name === MIN_NAME) {
      pending = [newString, filter.pending[1]]
    } else {
      pending = [filter.pending[0], newString]
    }
    updatePendingFilter(filter.title, pending)
  };

  const isValid = filter.validationMessage === '';

  const textFieldProps = {
    type: 'number',
    className: classes.textField,
    onChange: changeHandler,
    error: !isValid,
    InputProps: {
      classes: {
        input: classes.textFieldInput
      }
    }
  };

  return (
    <FilterCommon title={filter.title} validationMessage={filter.validationMessage}>
      <div className={classes.textFieldGroup}>
        <TextField label="Min" name={MIN_NAME} value={filter.pending[0]} {...textFieldProps}/>
        <TextField label="Max" name={MAX_NAME} value={filter.pending[1]} {...textFieldProps}/>
      </div>
    </FilterCommon>
  )
};

export default FilterRange
