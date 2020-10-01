import React, { Component } from 'react';
import axios from '../../axios';

import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import FullPost from './FullPost/FullPost';




import './Blog.css';

import Posts from '../Posts/Posts';

import NewPost from './NewPost/NewPost';

class Blog extends Component {

    state = {
        auth : false
    }

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
                             to="/posts/"
                              exact
                              >Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname:  '/new-post',
                                hash : '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav> 

                </header>
                
                <Switch>
                {this.state.auth ? <Route path="/new-post" exact component={NewPost} /> : null}
               <Route path="/posts"  component={Posts} />
               <Redirect from="/" to="/posts" />
                </Switch>

            
            </div>
        );
    }
}

export default Blog;