import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextInput from "./text-input";
import TextArea from "./text-area";
import TextInputFile from "./text-input-file";
import {Button} from "@material-ui/core";
import {successButtonStyles} from "../../../styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flexStart'
  },
  itemWrapper: {
    width: 500,
    maxWidth: '100%',
    margin: theme.spacing(1)
  },
  submitButton: {
    ...successButtonStyles(theme).root,
  },
}));

const Form = () => {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <div className={classes.itemWrapper}>
        <TextInput label={'Name (optional)'} />
      </div>
      <div className={classes.itemWrapper}>
        <TextInput label={'Email (optional)'} />
      </div>
      <div className={classes.itemWrapper}>
        <TextArea label={'Note'} />
      </div>
      <div className={classes.itemWrapper}>
        <TextInputFile helperText={'Please provide a .csv file, max size allowed is 5MB'}/>
      </div>
      <div className={classes.itemWrapper}>
        <Button variant="contained" className={classes.submitButton} disableElevation onClick={() => false} disabled={false}>
          Submit
        </Button>
      </div>
    </form>
  )
};

export default Form

