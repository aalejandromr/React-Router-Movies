import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';


export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        <Nav pills>
            {this.props.list.map(movie => (
              <NavItem key={movie.id}>
                <NavLink tag={Link} to={`/movies/${movie.id}`} active > { movie.title } </NavLink>
              </NavItem>
            ))}
        </Nav>
        <div className="home-button">
          <Link to="/"> Home </Link>
        </div>
      </div>
    );
  }
}
