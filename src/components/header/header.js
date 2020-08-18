import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Link, useLocation} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(0, 2, 0, 0),
    flexGrow: 1,
  },
  activeTab: {
    '&:visited': {
      color: theme.palette.secondary.main,
    },
    '&:link': {
      color: theme.palette.secondary.main,
    },
  },
  tabRoot: {
    opacity: 1,
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: '0.8rem'
  }
}));

/**
 * @param {Array.<{
 * title: String,
 * link: String
 * }>} data
 */
const Header = ({data}) => {
  const classes = useStyles();
  const path = useLocation().pathname;

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar variant={'dense'}>
        <Typography variant="h6" className={classes.title}>
          Database
        </Typography>
        <Tabs
          value={path}
          indicatorColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="navigation tabs"
          className={classes.tabs}
        >
          {
            data.map((tab) => (
              <Tab
                label={tab.title}
                component={Link}
                to={tab.link}
                value={tab.link}
                key={tab.link}
                classes={{
                  selected: classes.activeTab,
                  root: classes.tabRoot
                }}
              />
            ))
          }
        </Tabs>
      </Toolbar>
    </AppBar>
  )
};

export default Header
