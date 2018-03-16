import * as React from 'react';
import { Link } from 'react-router-dom';

import 
'./header.css';
export default class Header extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="Nav">
        <nav>
          <ul>
            <li className="Nav__link"><Link to="/">home</Link></li>
            <li className="Nav__link"><Link to="/example">example</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}