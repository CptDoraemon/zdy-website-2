import React, {useMemo} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import _uniqueId from 'lodash/uniqueId';
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles(theme => ({
  root: {

  }
}));

/**
 * @param {string} label
 * @param {string} helperText
 */
const TextInputFile = ({label, helperText}) => {
  const classes = useStyles();

  const ids = useMemo(() => {
    const uniqueId = _uniqueId();

    return {
      input: `input-${label}-${uniqueId}`,
      helper: `input-${label}-helper-${uniqueId}`
    }
  }, []);

  return (
    <>
      <Button
        variant="contained"
        component="label"
        disableElevation
        aria-describedby={ids.helper}
      >
        Upload File
        <input
          type="file"
          style={{ display: "none" }}
        />
      </Button>
      <FormHelperText id={ids.helper}>{helperText}</FormHelperText>
    </>
  )
};

export default TextInputFile

