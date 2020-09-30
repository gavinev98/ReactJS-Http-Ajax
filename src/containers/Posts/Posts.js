import React, {Component} from 'react';

import axios from '../../axios';

import Post from '../../components/Post/Post';

import { Link } from 'react-router-dom';

import '../Posts/Posts.css';

import { Route } from 'react-router-dom';

import FullPost from '../Blog/FullPost/FullPost';

class Posts extends Component {

        //setting state of posts to blank array which will fill when we send request to server.
        state = {
            posts : [],

        }

        //  method used to send to server.
        componentDidMount () {

            console.log(this.props);
        //sending and we use 'then' method when asynch op has complete.
            axios.get('/posts')
                .then(response => {
                    const posts = response.data.slice(0, 4);
                    const updatedPosts = posts.map(post => {
                        return{
                            ...post,
                            author: 'Max'
                        }
                    })
                    //we set state once we fetch data.
                    this.setState({posts : updatedPosts});
                   // console.log(response);
                })
                .catch(error => {
                    console.log(error);
                    //this.setState({error: true});
                });

    }


        postSelectedHandler = (id) => {
            this.props.history.push('/posts/' + id);
        }
    
        render() {
            let posts = <p style={{textAlign:"center"}}> Something went wrong</p>
            //mapping posts to an array.
    
            if(!this.state.error) {
    
            posts = this.state.posts.map(post => {
                return (<Link to={'/posts/' + post.id} key={post.id}> <Post 
                 title={post.title}
                  author={post.author}
                  clicked={() => this.postSelectedHandler(post.id)} /> </Link>
                  );
    
    
            });
        }

            return (
                <div>
                  <section className="Posts">
                    {posts}
                 </section>

                 <Route path={this.props.match.url + "/:id"} exact component={FullPost} />
                </div>

            );
        }
}

export default Posts;