import React from 'react';
import {Link, Route} from 'react-router-dom';
import NewPost from './NewPost';
import MyPosts from './MyPosts';

const Account = (props)=>{
    return (
        <div className="Account">
          <aside>
            <Link to = '/account/new-post'>Create New Post</Link>
            <Link to = '/account/my-posts'>My Posts</Link>
            <Link to = '/account/settings'>Settings</Link>
          </aside>
          <div className="container">
            <Route path ="/account/new-post" component = {NewPost}/>
            <Route path ="/account/my-posts" component = {MyPosts}/>
          </div>
        </div>
    );
};
export default Account