import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Posts from './components/Posts/Posts';
import PostInfo from './components/Posts/PostInfo/PostInfo';
import NewPost from './components/Posts/NewPost/NewPost';
import EditPost from './components/Posts/EditPost/EditPost';

export default class Router extends Component {

  state={
    posts:[],
    error:null
  }

  getPost = () => {

    try{axios.get('https://jsonplaceholder.typicode.com/posts/')
    .then(res => {
      console.log(`este es el error${res.status}`)
      if(res.status === 200){
        this.setState({
          posts: res.data
        })
      }
    })}
    catch(err){
      console.log(err)
      this.setState({
        error: { mensaje:err}
      })
    }
  }
  delPost = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then( res => {
      
      if( res.status ===  200){
        const post = [... this.state.posts];
        let resultado = post.filter( post => ( post.id !== id));
        this.setState({
          posts: resultado
        })
      } 
      
    });
  }
  newPost = ({title = 'Untitle', body, userID = 1}) => {
    axios.post('https://jsonplaceholder.typicode.com/posts/', {title, body, userID})
    .then(res => {
      if(res.status === 201){
        swal({
          title: "",
          text: "",
          icon: "success",
          button: "OK",
        });
        let post = res.data;
        this.setState( prevState =>({
          posts: [...prevState.posts, post]
        }))
      } else {
        swal({
          title: "Something happen",
          text: "",
          icon: "error",
          button: "OK",
        })
      }
    });
  }
  editPost = (post) => {
    const id = post.id;
    axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, post)
    .then( res => {
      if (res.status === 200){
        swal("Your post has been saved!", {
      icon: "success",
        });
        const posts = [...this.state.posts];
        const filterPost = posts.findIndex( post => post);
        console.log( res.data)
        posts[filterPost] = res.data;
        this.setState({
          posts
        })
            
      }
    })
    
  }
  componentWillMount(){
    this.getPost();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="row justify-content-center">
            <Header/>
            <Nav></Nav>
          </div>
          <div className=" row justify-content-center m-5">
            <Switch>
            <Route exact path="/" render={ ()=> {
              return (
              <Posts posts={this.state.posts} delPost={this.delPost}/>
              )
            }} />

            <Route exact path="/post/:postid" render={ (props)=> {
              let postid = props.match.params.postid;
              const posts = this.state.posts;
              let filter;
              filter= posts.filter(number => number.id === Number(postid)  );
              return ( <PostInfo post={filter[0]} /> )
            }} />

            <Route exact path="/edit/:postid" render= {(props)=> {
              let postId= (props.match.params.postid);
              const post= this.state.posts.filter( post => ( post.id === Number(postId)));
              return ( <EditPost post={post[0]} editPost={this.editPost} /> )
            }} />

            <Route exact path="/new" render = { ()=> {
              return (<NewPost newPost={this.newPost} /> )
            }}/>
        </Switch>
          </div>
        </div>
        
      </BrowserRouter>
    )
  }
}
