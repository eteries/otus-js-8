import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = props => (
      <ul className={'top-nav'}>
          {props.links.map(link => <li key={link.id}><NavLink exact to={link.url}>{link.text}</NavLink></li>)}
      </ul>
);

export default Navigation;
