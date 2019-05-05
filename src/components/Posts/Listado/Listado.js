import React, { Component } from 'react';
import Post from '../Post/Post';

export default class Listado extends Component {
    renderPost = () => {
      const {posts, delPost}= this.props;
            return ( posts.map( (post, index) => ( 
            <Post key={index} post={post} delPost={delPost} /> )
            ))
        
    }
  render() {
    const {posts}= this.props;
    return (
      <table className="table" >
        <thead>
            <tr>
                <th className="scope">ID</th>
                <th className="scope">Titulo</th>
                <th className="scope">Acciones</th>
            </tr>
        </thead>

        <tbody>
            { posts && this.renderPost() }
        </tbody>
      </table>
    )
  }
}
