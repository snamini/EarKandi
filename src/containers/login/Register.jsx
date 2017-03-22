// importing the component class from the react library
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GoogleLogin from '../components/Google';


// then we use that component class that we just imported to make our special components
// // portfolio inherited a bunch of things from the component
class Register extends Component {

        constructor(props) {
          super(props);
          this.state = {
           name: "",
           username: "",
           email: "",
           password: "",
           password2: "",

          };
          this.handleInputChange = this.handleInputChange.bind(this);
        }

          handleInputChange(event) {
            const target = event.target;
            const value = target.value;
            const name = target.name;

            this.setState({
              [name]: value
            });
          }

        render(){
        return (
            <div>
{/*-------------------------Header------------------------*/}
                <Header/>
{/*-------------------------Register Section------------------*/}
              <GoogleLogin/>

              <form onSubmit={this.handleSubmit}>
             <div className="form-group">
              <label>Name</label>
              <input type="text" value={this.state.name} onChange={this.handleInputChange}   className="form-control" placeholder="Name" name="name"/>
            </div>
            <div className="form-group">
              <label>Username</label>
              <input type="text" value={this.state.username} onChange={this.handleInputChange} className="form-control" placeholder="Username" name="username"/>
            </div>
             <div className="form-group">
              <label>Email</label>
              <input type="email" value={this.state.email} onChange={this.handleInputChange} className="form-control" placeholder="Email" name="email"/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" value={this.state.password} onChange={this.handleInputChange} className="form-control" placeholder="Password" name="password"/>
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" value={this.state.password2} onChange={this.handleInputChange} className="form-control" placeholder="Password" name="password2"/>
            </div>
              <div className="form-group">
              <label>Genre</label>
              <input type="text" className="form-control" placeholder="Genre" name="genre"/>
            </div>
            <div className="form-group">
              <label>Location</label>
              <input type="text" className="form-control" placeholder="Location" name="location"/>
            </div>
            <div className="form-group">
              <label>Photo link</label>
              <input type="text" className="form-control" placeholder="Photo link" name="photolink"/>
            </div>
            <div className="form-group">
              <label>Sound Cloud</label>
              <input type="text" className="form-control" placeholder="Link to SoundCloud" name="soundCloud"/>
            </div>

            <button type="submit" className="btn btn-default">Submit</button>

          </form>

{/*-------------------------Footer-----------------------*/}
                <Footer/>
            </div>
        );
    }
}

export default Register;
