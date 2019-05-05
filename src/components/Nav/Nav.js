import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';

export default () => {
  return (
    <nav className="col-12 col-m-8">
        <Link to={"/"} >Todos los Post</Link>
        <Link to={"/new"} >Nuevo post</Link>
    </nav>
  )
}
