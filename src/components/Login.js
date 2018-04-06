import React from 'react';
import {withRouter} from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false
        }
    }
    login(e) {
        e.preventDefault();
        let username = this.refs.username.value;
        let password = this.refs.password.value;

        const url = 'http://localhost:3100/login?username='+username+'&password='+password;
        fetch(url)
        .then((response) => {
            if(response.ok) {
                this.props.history.push('/home');
            } else {
                this.setState({
                    error: true
                })
                setTimeout(function() {
                this.setState({
                    error: false
                })
                }.bind(this), 3000);          
            }
        }, function(error) {
            console.log(error);
        })
    }
    render() {
        return(
            <div>
                <h1>Login Form</h1>
                <form method="post" onSubmit={this.login.bind(this)}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" name="username" id="username" ref="username" className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" id="password" ref="password" className="form-control" required />
                </div>
                <input type="submit" value="Login" className="btn btn-primary" />  
                </form>
                <p className={`error ${this.state.error ? 'visible' : 'hide'}`}>User not found</p>
            </div>
        );
    }
}

export default withRouter(Login);