import React, {Component} from 'react'

export default class PostInfo extends Component {

  renderPost = () => {
    const {title, body, userId} = this.props.post;
    return (
    <div className="card col-md-8 col-12 " >
            <div className="card-body">
              <h4 className="card-title">{title}</h4>
              <h6 className="card-subtitle mb-2 text-muted">User: {userId}</h6>
              <p className="card-text">{body}</p>
            </div>
          </div>
          )
  }
  render(){
  return (
    <React.Fragment>
      {console.log(this.props)}
      {this.props.post && this.renderPost()}
    </React.Fragment>
        
  )

  }
  
}
