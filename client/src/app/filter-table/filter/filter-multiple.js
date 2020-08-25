import React, {useMemo} from "react";
import {makeStyles} from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import filterStyles from "./filter-styles";
import FilterCommon from "./filter-common";

const useStyles = makeStyles(theme => ({
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
 * @param {{
 *  title: string,
 *  type: string,
 *  original: [],
 *  active: [],
 *  pending: [],
 *  choices: [],
 *  validationMessage: string
 * }} filter
 */
const FilterMultiple = ({filter}) => {
  const classes = useStyles();

  const changeHandler = (e) => {
    console.log('called')
    // alter(filterName, e.target.name, e.target.checked)
  };

  const isValid = filter.validationMessage === '';
  const choicesCheckedStatus = useMemo(() => {
    // returns an object
    // key is the choice name
    // value is boolean which represent whether is checked or not
    const obj = {};
    filter.choices.forEach(key => obj[key] = false);
    filter.pending.forEach(key => obj[key] = true);
    return obj
  }, [filter.choices, filter.pending]);

  return (
    <FilterCommon title={filter.title} validationMessage={filter.validationMessage}>
      <FormGroup>
        {
          filter.choices.map((choiceName, i) => (
            <FormControlLabel
              key={i}
              control={
                <Checkbox
                  checked={choicesCheckedStatus[choiceName]}
                  onChange={changeHandler}
                  name={choiceName}
                  className={classes.checkbox}
                />
              }
              label={
                <Typography
                  variant={'body2'}
                  component={'span'}
                  className={isValid ? classes.checkboxLabel : `${classes.checkboxLabel} ${classes.error}`}
                >{choiceName}
                </Typography>
              }
            />
          ))
        }
      </FormGroup>
    </FilterCommon>
  )
};

export default FilterMultiple
