import * as React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import LazyRoute from 'react-lazy-route';

import { Header } from './layouts/header';
const Home = () => import('./layouts/home').then(d => d.Home);
const Example = () => import('./layouts/example').then(d => d.Example);

class App extends React.Component {
  public render(): JSX.Element {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <LazyRoute exact={true} path="/" render={Home} />
            <LazyRoute exact={true} path="/example" render={Example} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
