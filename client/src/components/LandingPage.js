import React, { Component } from 'react';
import axios from  "axios"


class LandingPage extends Component {
    constructor(props){
      super(props);
      this.state = {
        posts:[]
      }
    }
    componentDidMount(){
      this.getPosts()
      }

    getPosts(){
      axios.get("http://localhost:5000/posts").then(res=>{
        if(res.data.succes){
          this.setState({
            posts:res.data.posts,       
          });
          console.log(this.state.posts)
        }
      });
    }

    onDelete = (id) => {
      axios.delete(`http://localhost:5000/posts/delete/${id}`).then((res) => {
        alert(res.data.title + " has been deleted successfully");
        this.getPosts();
      });
    };


  render() {
    return (
      <div className='container'>        
        <table className="table  table-striped">

          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Actions</th>

            </tr>
          </thead>
          <tbody>

            {this.state.posts.map((post,index) =>(
            <tr>
              <th scope="row">{index}</th>
              <td>{post.title}</td>
              <td>{post.description}</td>
              <td>{post.postCategory}</td>
              <td>
                <a className='btn btn-warning' href={`/edit/${post._id}`}>
                  <i className='fas fa-edit'></i>
                  &nbsp;Edit
                </a>
                &nbsp;
                <a className='btn btn-danger' href="" onClick={()=>this.onDelete(post._id)}>
                  <i className='far fa-times-circle'></i>
                  &nbsp;Delete
                </a>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
        <a href="/add" className="btn btn-success">
          <i class="fa-sharp fa-solid fa-plus"></i>
          Add New Post
        </a>
      </div>
    );
  }
}

export default LandingPage;
