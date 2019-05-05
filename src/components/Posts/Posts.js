import React, { Component } from 'react';
import Listado from './Listado/Listado';

export default class Posts extends Component {
  render() {
    
    return (
      <div className="col-12 ">
            <h2 className="text-center">Posts</h2>
            {
              this.props.posts.length > 0 ?
            <Listado posts={this.props.posts} delPost={this.props.delPost} /> :
            <p>cargando</p>
            }
             
      </div>
    )
  }
}
