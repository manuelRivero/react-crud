import React, { Component } from 'react';
import swal from 'sweetalert';

export default class EditPost extends Component {
    title = React.createRef();
    body = React.createRef();
    handler = (e) => {
        e.preventDefault();
        const {id, userId } =this.props.post;
       const changedPost = {
            title: this.title.current.value,
            body: this.body.current.value,
            id,
            userId
        }
        swal({
            title: "Are you sure?",
            text: "",
            icon: "warning",
            buttons: true,
            dangerMode: false,
          })
          .then((willSave) => {
            if (willSave) {
                this.props.editPost(changedPost);
            } 
          });
        
    }
    renderForm = () => {
        const {title, body } =this.props.post;
            return (
                <form className=" col-md-8"  onSubmit={this.handler}>
        <legend>
            Edit Your Post.
        </legend>
        <div className="form-group">
            <label class="">
                Post title:
            </label>
            <input type="text" className="form-control " defaultValue={title} ref={this.title}  />
        </div>

        <div className="form-group">
            <label>
                Your Post:
            </label>
            <textarea className="form-control " rows="6" defaultValue={body} ref={this.body} ></textarea>
        </div>
        <div className="form-group ">
            <button type="submit" className="btn btn-success"> Save changes</button>
        </div>
      </form>
             )
    }
  render() {
     
    return (
      <React.Fragment>
          { this.props.post ? this.renderForm() : null }
      </React.Fragment>
    )
  }
}
