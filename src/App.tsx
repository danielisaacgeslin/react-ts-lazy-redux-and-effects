import * as React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import LazyRoute from 'react-lazy-route';
import { store } from './state-mgmt/config';
import Header from './layouts/header/Header';

const Home = () => import('./layouts/home/HomeContainer');
const Example = () => import('./layouts/example/Example');

class App extends React.Component {
  public render(): JSX.Element {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Switch>
              <LazyRoute exact={true} path="/" render={Home} />
              <LazyRoute exact={true} path="/example" render={Example} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
