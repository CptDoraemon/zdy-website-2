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

/**
 * @param {{
 *  title: string,
 *  type: string,
 *  original: [],
 *  active: [],
 *  pending: [],
 *  validationMessage: string
 * }} filter
 */
const FilterRange = ({filter}) => {
  const classes = useStyles();

  const changeHandler = (e) => {
    // alter(filterName, e.target.name, e.target.value)
  };

  const isValid = filter.validationMessage === '';
  const min = filter.pending[0];
  const max = filter.pending[1];

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
        <TextField label="Min" name="min" value={min} {...textFieldProps}/>
        <TextField label="Max" name="max"value={max} {...textFieldProps}/>
      </div>
    </FilterCommon>
  )
};

export default FilterRange
