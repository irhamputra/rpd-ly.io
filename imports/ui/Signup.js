import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { Accounts } from 'meteor/accounts-base';

class Signup extends Component {
    constructor(props){
        super(props);

        this.state = {
            error: '',
        };
    }

    onSubmit(e){
        e.preventDefault();

         let fullname = this.refs.fullname.value.trim();
         let email = this.refs.email.value.trim();
         let password = this.refs.password.value.trim();

         Accounts.createUser({ fullname, email, password }, (err) => {
            console.log('Sign Up callback', err)
         });

        // this.setState({
          //  error: 'Oops! Something went error'
        // })
    }

    render(){
        return(
            <div className="container">
                <h1>Sign Up</h1>

                { this.state.error ? <div className="alert alert-danger" role="alert">{this.state.error}</div> : undefined}

                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <label>Fullname:</label>
                        <input ref="fullname" type="text" name="name" placeholder="Fullname" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input ref="email" type="email" name="email" placeholder="Email" className="form-control"/>
                    </div>

                   <div className="form-group">
                       <label>Password:</label>
                       <input ref="password" type="password" name="password" placeholder="Password" className="form-control"/>
                   </div>
                    <button className="btn btn-primary">Create Account</button>
                </form>
                <hr/>
                <Link to="/">Have already Account?</Link>
            </div>
        )
    }
}

export default withRouter(Signup);