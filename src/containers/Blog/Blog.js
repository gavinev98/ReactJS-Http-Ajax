import React, { Component } from 'react';
import axios from '../../axios';

import { Route, NavLink } from 'react-router-dom';

import FullPost from './FullPost/FullPost';




import './Blog.css';

import Posts from '../Posts/Posts';

import NewPost from './NewPost/NewPost';

class Blog extends Component {

    render () {
        return (
            <div className="Posts">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                            activeClassName="my-active"
                            activeStyle={{
                                color: 'green'
                            }}
                             to="/"
                              exact
                              >Home</NavLink></li>
                            <li><NavLink to={{
                                pathname:  '/new-post',
                                hash : '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav> 

                </header>
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" exact component={NewPost} />
                <Route path="/:id" exact component={FullPost} />
                

            
            </div>
        );
    }
}

export default Blog;