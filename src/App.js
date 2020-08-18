import React from 'react';
import { Provider } from 'react-redux';
import configureStore from "./redux/configure-store";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import routerUrls from "./router-urls";
import {CssBaseline} from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import makeStyles from "@material-ui/core/styles/makeStyles";
import RouterScrollRestoration from "./router-scroll-restoration";
import Header from "./components/header/header";
import {navTabsDataForHeader} from "./router-urls";
import MainWrapper from "./components/main-wrapper/main-wrapper";
import Home from "./components/home/home";
import Search from "./components/search/search";

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
        <Header data={navTabsDataForHeader}/>
        <MainWrapper>
          <Switch>
            <Route path={routerUrls.home} exact render={ () => <Home/> } />
            <Route path={routerUrls.search} exact render={ () => <Search/> } />
          </Switch>
        </MainWrapper>
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
