import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Form from "./form/form";

const useStyles = makeStyles(theme => ({
  root: {

  },
  title: {
    fontWeight: 700,
    textTransform: 'uppercase'
  }
}));

const Submission = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant={'body1'} component={'h1'} className={classes.title}>
          Contribute to the database
      </Typography>
      <Form />
    </div>
  )
};

export default Submission

