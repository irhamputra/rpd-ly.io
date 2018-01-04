import React, { Component } from 'react';
// import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

export default class Link extends Component {
    constructor(props){
        super(props);
    }

    onLogout(e){
        e.preventDefault();

        Meteor.logout((err) => {
            console.log("Logout Callback", err)
        });
    }

    render(){
        return(
            <div className="container">
                <h1>Your Dashboard</h1>
                <button className="btn btn-primary" onClick={this.onLogout.bind(this)}>Log Out</button>
            </div>
        )
    }
}