import React, {useMemo} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import _uniqueId from 'lodash/uniqueId';
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {

  }
}));

/**
 * @param {string} label
 * @param {string} helperText
 */
const TextArea = ({label, helperText}) => {
  const classes = useStyles();

  const ids = useMemo(() => {
    const uniqueId = _uniqueId();

    return {
      input: `input-${label}-${uniqueId}`,
      helper: `input-${label}-helper-${uniqueId}`
    }
  }, []);

  return (
    <TextField
      id={ids.input}
      label={label}
      fullWidth
      variant={'outlined'}
      helperText={helperText || null}
      multiline
      rows={5}
    />
  )
};

export default TextArea

