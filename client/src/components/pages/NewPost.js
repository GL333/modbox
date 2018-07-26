import React from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';

class NewPost extends React.Component{
  state={
    title:'',
    content:'',
    file:'',
  };
  onInputChange = (e)=>{
    this.setState({[e.target.name] : e.target.value})
  };
  onFormSubmit = async (e)=>{
    e.preventDefault();
    //siunciam duoomenis
   try {
     // rankiniu budu aprasome FormData
     const formData = new FormData();
     formData.append('title', this.state.title);
     formData.append('content', this.state.content);
     formData.append('postimage', this.state.file);

     await axios.post('/api/posts', formData);
     this.props.history.push('/')
   }catch (err) {
     console.log(err.response);
   }
  };

  onDrop=(files)=>{
    this.setState({
      file:files[0]
    });
  };


    render(){
        return (
        <div className="new-post">
          <h1>Create New Post</h1>
          <form onSubmit={this.onFormSubmit}>

            <input
                value={this.state.title}
                onChange={this.onInputChange}
                name = "title"
                placeholder="Post Title"
                type="text"/>
            <Dropzone
                style={{
                  backgroundImage:`url(${this.state.file.preview})`,
                  width:'100%',
                  height:'150px',
                  marginBottom:'20px',
                  border:'1px solid grey',
                  backgroundSize:'cover',
                  backgroundPositions:'center',

                }}
                className="post-image"
                onDrop={this.onDrop}>
              <h3>Post image</h3>

            </Dropzone>


            <textarea
                onChange={this.onInputChange}
                value={this.state.content}
                placeholder="Post Content"
                name="content"/>
            <button>Create Post</button>
          </form>
        </div>
        );
    }
}
export default NewPost