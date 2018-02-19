import * as React from 'react';
import { Link } from 'react-router-dom';

export class Header extends React.Component {
  public render(): JSX.Element {
    return (
      <div>
        <nav>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/example">example</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}