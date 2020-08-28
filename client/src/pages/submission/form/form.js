import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextInput from "./text-input";
import TextArea from "./text-area";
import TextInputFile from "./text-input-file";
import {Button} from "@material-ui/core";
import {successButtonStyles} from "../../../styles";
import useForm from "./use-form";

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
    margin: theme.spacing(5, 0)
  },
}));

const Form = () => {
  const classes = useStyles();

  const {
    name,
    email,
    note,
    file,
    submit
  } = useForm();

  return (
    <form className={classes.root} onSubmit={submit}>
      <div className={classes.itemWrapper}>
        <TextInput
          label={'Name (optional)'}
          error={name.error}
          errorMessage={name.errorMessage}
          value={name.value}
          onChange={name.handleChange}
        />
      </div>
      <div className={classes.itemWrapper}>
        <TextInput
          label={'Email (optional)'}
          error={email.error}
          errorMessage={email.errorMessage}
          value={email.value}
          onChange={email.handleChange}
        />
      </div>
      <div className={classes.itemWrapper}>
        <TextArea
          label={'Note'}
          error={note.error}
          errorMessage={note.errorMessage}
          value={note.value}
          onChange={note.handleChange}
        />
      </div>
      <div className={classes.itemWrapper}>
        <TextInputFile
          helperText={
            file.helperMessage ||
            'Please provide a .csv file, max size allowed is 5MB'
          }
          error={file.error}
          errorMessage={file.errorMessage}
          onChange={file.handleChange}
        />
      </div>
      <div className={classes.itemWrapper}>
        <Button variant="contained" className={classes.submitButton} disableElevation type={'submit'} disabled={false}>
          Submit
        </Button>
      </div>
    </form>
  )
};

export default Form

