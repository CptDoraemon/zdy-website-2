import React from 'react';
import { Provider } from 'react-redux';
import configureStore from "./redux/configure-store";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {CssBaseline} from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import makeStyles from "@material-ui/core/styles/makeStyles";
import RouterScrollRestoration from "./router-scroll-restoration";
import ReduxTestComponentContainer from "./components/redux-test-component/redux-test-component-container";

const store = configureStore();

const useStyles = makeStyles(theme => ({
  root: {
    width: '100vw',
    maxWidth: '100%',
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
}));

const InnerApp = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router basename={process.env.PUBLIC_URL}>
        <RouterScrollRestoration />
        <Switch>
          <Route path="/" exact render={ () => <ReduxTestComponentContainer/> } />
        </Switch>
      </Router>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <InnerApp />
      </ThemeProvider>
    </Provider>
  )
};

export default App;
