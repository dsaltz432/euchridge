/* eslint-disable */
import React from 'react';

export default class LogOutView extends React.Component {

    componentDidMount() {
        console.log("LogOutView componentDidMount()");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("LogOutView componentDidUpdate()");
    }

    render() {
        console.log("LogOutView render()");
        this.props.logOut();
        return (
            <div>dummy value</div>
        );
    }
}
