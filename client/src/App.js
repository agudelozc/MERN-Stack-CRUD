import React, { Component } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';

import LandingPage from "./components/LandingPage";
import DetailPage from "./components/DetailPage";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import Header from "./components/Header";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Switch>
          {/* <Route path="/"  element={<LandingPage/>}  exact /> */}
          <Route exact path='/' component={(props) => <LandingPage {...props}/> } />
          <Route exact path='/posts/:id' component={(props) => <DetailPage {...props}/> } />
          <Route exact path='/add' component={(props) => <CreatePost {...props}/> } />
          <Route exact path='/edit/:id' component={(props) => <EditPost {...props}/> } />

          {/* <Route path="/posts/:id" element={<DetailPage/>} /> */}
          {/* <Route path="/add" element={<CreatePost/>} /> */}
          {/* <Route path="/edit/:id" element={<EditPost/>} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;


// constructor(props){
//   super(props);
//   this.state = {
//     posts:[]
//   }
// }
// componentDidMount(){
//   this.getPosts()
//   }

// getPosts(){
//   axios.get("http://localhost:5000/posts").then(res=>{
//     if(res.data.succes){
//       this.setState({
//         posts:res.data.posts,       
//       });
//       console.log(this.state.posts)
//     }
//   });
// }


// render() {
// return (
//   <div className='container'>
//     <p>All Post</p>
    
//     <table class="table">

//       <thead>
//         <tr>
//           <th scope="col">#</th>
//           <th scope="col">Title</th>
//           <th scope="col">Description</th>
//           <th scope="col">Category</th>
//           <th scope="col">Actions</th>

//         </tr>
//       </thead>
//       <tbody>

//         {this.state.posts.map((post,index) =>(
//         <tr>
//           <th scope="row">{index}</th>
//           <td>{post.title}</td>
//           <td>{post.description}</td>
//           <td>{post.postCategory}</td>
//           <td>
//             <a className='btn btn-warning' href="#">
//               <i className='fas fa-edit'></i>
//               &nbsp;Edit
//             </a>
//             &nbsp;
//             <a className='btn btn-danger' href="#">
//               <i className='far fa-times-circle'></i>
//               &nbsp;Delete
//             </a>
//           </td>
//         </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// );
// }