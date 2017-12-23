import React, { Component } from 'react';
import { Route, NavNavLink, HashRouter, NavLink } from 'react-router-dom';
import Home from './Home';
import Stuff from './Stuff';
import Contact from './Contact';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Menu,
  Segment,
  Icon
} from 'semantic-ui-react';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Header as="h2" icon textAlign="center">
            <Icon.Group size="small">
              <Icon name="user" size="mini" />
            </Icon.Group>
            <Header.Content>Rapid Mechanic</Header.Content>
          </Header>
          <div className="ui pointing secondary menu">
            <NavLink activeClassName="active" className="item" exact to="/">
              Home
            </NavLink>

            <NavLink activeClassName="active" className="item" to="/stuff">
              Stuff
            </NavLink>

            <NavLink activeClassName="active" className="item" to="/contact">
              Contact
            </NavLink>
          </div>
          <Container fluid>
            <Route exact path="/" component={Home} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/contact" component={Contact} />
          </Container>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
