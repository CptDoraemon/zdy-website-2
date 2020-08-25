import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {FormControl} from "@material-ui/core";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import filterStyles from "./filter-styles";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
  },
  legend: {
    ...filterStyles(theme).text,
    marginBottom: '4px',
    fontWeight: 700
  },
  checkboxLabel: {
    ...filterStyles(theme).text,
  },
  error: {
    color: theme.palette.error.main,
    fontWeight: 700,
    '&$:focus': {
      color: theme.palette.error.main,
    }
  },
  checkbox: {
    padding: '2px 9px'
  }
}));

/**
 * @param {validationMessage} string
 * @param {string} title
 * @param {JSX.Element} children
 */
const FilterCommon = ({validationMessage, title, children}) => {
  const classes = useStyles();

  const isValid = validationMessage === '';

  return (
    <FormControl component="fieldset" className={classes.root}>
      <FormLabel
        error={!isValid}
        component="legend"
        classes={{
          root: isValid ? classes.legend : `${classes.legend} ${classes.error}`
        }}
      >
        {title}</FormLabel>

      { children }

      {
        !isValid &&
        <FormHelperText className={classes.error}>{validationMessage}</FormHelperText>
      }
    </FormControl>
  )
};

export default FilterCommon
