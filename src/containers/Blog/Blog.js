import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    //  method used to send to server.
    componentDidMount () {
        //sending and we use 'then' method when asynch op has complete.
        axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    console.log(response);
                });

    }


    render () {
        return (
            <div>
                <section className="Posts">
      