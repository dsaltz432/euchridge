/* eslint-disable */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../onboarding.styles';

export default class LogInView extends React.Component {
    constructor(props) {
        super(props);
        console.log("LogInView constructor()");

        this.state = {
            username: '',
            password: '',
            error: false,
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log("LogInView componentDidMount()");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("LogInView componentDidUpdate()");
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            submitted: true
        });

        const {username, password} = this.state;
        if (username && password) {
            const { success, error } = this.props.logIn(username, password);
            if (!success) {
                this.setState({
                    error: error
                });
            }
        }
    }

    render() {
        console.log("LogInView render()");
        const { username, password, submitted } = this.state;
        return (
            <div css={styles.onboardingContainer} className="col-md-6 col-md-offset-3 jumbotron">
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username && <div className="help-block">Username is required</div>}
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password && <div className="help-block">Password is required</div>}
                    </div>
                    {this.state.error && <div className="help-block">{this.state.error}</div>}
                    <div className='form-group'>
                        <button className="btn btn-primary">Login</button>
                        <Link to="/signUp" className="btn btn-link">Register</Link>
                    </div>
                </form>
            </div>
        );
    }
}
