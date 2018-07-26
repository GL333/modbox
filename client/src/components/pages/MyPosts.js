import React from 'react';
import * as actions from '../../actions/postActions';
import {connect} from 'react-redux';


class MyPosts extends React.Component{

  componentDidMount(){
    if(this.props.posts) return;
      this.props.fetchAllPost();
      //ne geriausias variantas, reiktu atskiro route kur
    //pasiiimam tik
  }
    render(){

    let posts = [];
    if(this.props.posts){
      posts = this.props.posts.filter((post)=>{
        console.log(post.user._id, this.props.auth.user._id);
          return post.user._id === this.props.auth.user._id
      }).map((post,i)=>{
        return(
            <div className='post' key={i}>
              <h3>
              {post.title}
              <span onClick={()=>this.props.deletePost(post._id)}>x</span>
              </h3>
            </div>
        )

      })
    }
    console.log(posts);
        return (
        <div className="My-Posts">
          <h1>My Posts</h1>
          {posts}

          {!this.props.posts && <div>Loading...</div>}

        </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
      auth: state.auth,
      posts: state.posts
    }
};
export default connect(mapStateToProps,actions)(MyPosts)