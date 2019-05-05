import React from 'react';
import {Link} from 'react-router-dom';

import swal from 'sweetalert'

export default (props) => {
    
    const {id, title} = props.post;
    const {delPost} = props;
    const confirmDel = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this post!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                delPost(id);
              swal("Your post has been deleted!", {
                icon: "success",
              });
            } 
          });
    };
  return (
    <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td> 
            <Link to ={`post/${id}`} className="btn btn-info m-1">
                Info
            </Link>
            <Link to = {`edit/${id}`}  className="btn btn-primary m-1">
                Edit
            </Link> 

            <button   to ={"/"} className="btn btn-danger m-1" onClick={confirmDel} >
                Eliminar 
            </button>
            
        </td>
    </tr>
  )
}
