import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    //setting state of posts to blank array which will fill when we send request to server.
    state = {
        posts : [],
        selectedPostId: null
    }

    //  method used to send to server.
    componentDidMount () {
        //sending and we use 'then' method when asynch op has complete.
        axios.get('https://jsonplaceholder.typicode.com/posts')
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
                });

    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }


    render () {
        //mapping posts to an array.
        const posts = this.state.posts.map(post => {
            return <Post 
            key={post.id}
             title={post.title}
              author={post.author}
              clicked={() => this.postSelectedHandler(post.id)} />;


        });

        return (
            <div>
                <section className="Posts">
                   {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;