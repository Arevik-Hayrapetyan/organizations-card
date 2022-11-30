import React from 'react';
import { Fragment } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import AddForm from '../AddForm/AddForm';

const Navbar = () => {
  return (
    <Fragment>
      <SearchBar/>
      <AddForm/>
    </Fragment>
  );
}

export default Navbar;
