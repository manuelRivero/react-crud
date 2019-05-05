import React, { Component } from 'react'

export default class NewPost extends Component {
  title = React.createRef();
  body = React.createRef();
  handler = (e) => {
    e.preventDefault();
    const post = {
      title: this.title.current.value,
      body: this.body.current.value
    }
    if(post.content !== ""){
      return (this.props.newPost(post));
    }
    alert("can't create an empty post")

  }

  render() {
    return (
      <form className=" col-md-8"  onSubmit={this.handler}>
        <legend>
            Create new Post.
        </legend>
        <div className="form-group">
            <label class="">
                Post title:
            </label>
            <input type="text" className="form-control " placeholder="Title for you master piece" ref={this.title}  />
        </div>

        <div className="form-group">
            <label>
                Your Post:
            </label>
            <textarea className="form-control"  rows="6" placeholder="Write something cool here..." ref={this.body} ></textarea>
        </div>
        <div className="form-group ">
            <button className="btn btn-success">Add post</button>
        </div>
      </form>
    )
  }
}
