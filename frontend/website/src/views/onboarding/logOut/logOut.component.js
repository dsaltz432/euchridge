/* eslint-disable */
import React from 'react';

export default class LogOutView extends React.Component {
    render() {
        const { logOut, username } = this.props;
        logOut(username);
        return (
            <div>dummy value</div>
        );
    }
}
