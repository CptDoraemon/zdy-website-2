import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import {FormControl} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: theme.spacing(1),
    borderTop: 'solid 1px rgb(224, 224, 224)'
  },
  control: {
    margin: theme.spacing(1),
  },
  controlLabel: {
    fontSize: theme.typography.body2.fontSize
  },
  formControl: {
    minWidth: 150,
    margin: theme.spacing(1)
  },
  selectInput: {
    padding: '8px 12px',
    fontSize: theme.typography.body2.fontSize,
    textTransform: 'capitalize'
  }
}));

/**
 * @callback Updater
 * @param {string} titleInternalName
 * @param {string} itemInternalName
 */

/**
 * An object describes one option.
 * @typedef {{
 *   items: Array.<{
 *     internalName: string,
 *     displayName: string
 *   }>,
 *   title: {
 *     internalName: string,
 *     displayName: string
 *   },
 *   selected: string
 * }} Option
 */

/**
 *
 * @param dense
 * @param toggleDense
 * @param {Option[]} optionsGroup
 * @param {Updater} updater
 */
const SearchTableControls = (
  {
    dense,
    toggleDense,
    optionsGroup,
    updater
  }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {
        optionsGroup.map(option => (
          <SearchTableControlOneOption key={option.title.internalName} option={option} updater={updater}/>
        ))
      }
      <FormControlLabel
        classes={{
          root: classes.control,
          label: classes.controlLabel
        }}
        control={<Switch checked={dense} onChange={toggleDense} />}
        label="Dense padding"
      />
    </div>
  )
};

/**
 * @param {Option} option
 * @param {Updater} updater
 */
const SearchTableControlOneOption = ({option, updater}) => {
  const classes = useStyles();

  const changeHandler = (e) => {
    updater(option.title.internalName, e.target.value)
  };

  const id = `search-table-control-${option.title.internalName}`;

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel htmlFor={id}>{option.title.displayName}</InputLabel>
      <Select
        id={id}
        value={option.selected}
        onChange={changeHandler}
        label={option.title.displayName}
        inputProps={{
          className: classes.selectInput
        }}
      >
        {
          option.items.map(item => (
            <MenuItem key={item.internalName} value={item.internalName} dense>{item.displayName}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  )
};

export default SearchTableControls
