/* eslint-disable */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { styles } from '../onboarding.styles';

export default class SignUpView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false,
            error: null,
            redirectTarget: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log("SignUpView componentDidMount()");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("SignUpView componentDidUpdate()");
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;

        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({
            submitted: true
        });

        const { user } = this.state;
        if (user.firstName && user.lastName && user.username && user.password) {
            const { success, error } = this.props.signUp(user);
            if (success) {
                this.setRedirect('/logIn');
            } else {
                this.setState({
                    error: error
                });
            }
        }
    }

    setRedirect(redirectTarget) {
        this.setState({
            redirectTarget: redirectTarget
        });
    }

    render() {
        console.log("SignUpView render()");
        const { user, submitted, redirectTarget } = this.state;
        if (redirectTarget != null) {
            return <Redirect push to={redirectTarget} />
        }

        return (
            <div css={styles.onboardingContainer} className="col-md-6 col-md-offset-3 jumbotron">
                <h2>Register</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} />
                        {submitted && !user.firstName && <div className="help-block">First Name is required</div>}
                    </div>
                    <div className='form-group'>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} />
                        {submitted && !user.lastName && <div className="help-block">Last Name is required</div>}
                    </div>
                    <div className='form-group'>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={user.username} onChange={this.handleChange} />
                        {submitted && !user.username && <div className="help-block">Username is required</div>}
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
                        {submitted && !user.password && <div className="help-block">Password is required</div>}
                    </div>
                    {this.state.error && <div className="help-block">{this.state.error}</div>}
                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                        <Link to="/logIn" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}
