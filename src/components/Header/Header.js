import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
  return (
    <header className="col-12 col-m-8">
        <Link to={'/'}>
            <h1 className="text-center font-weight-light">React blog</h1>
        </Link>
    </header>
  )
}
