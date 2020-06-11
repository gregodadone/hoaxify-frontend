import React from 'react';

export class UserSignUpPage extends React.Component {

    state = {
        displayName: '',
        username: '',
        password: '',
        passwordRepeat: ''
    }

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <div>
                    <input
                        placeholder="Your display name"
                        value={this.state.displayName}
                        onChange={this.onChangeDisplayName}
                    />
                </div>
                <div>
                    <input
                        placeholder="Your username"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                    />
                </div>
                <div>
                    <input
                        placeholder="Your password"
                        type="password"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                    />
                </div>
                <div>
                    <input
                        placeholder="Repeat your password"
                        type="password"
                        value={this.state.passwordRepeat}
                        onChange={this.onChangePasswordRepeat}
                    />
                </div>
                <div>
                    <button>Sign Up</button>
                </div>
            </div>
        )
    }

    onChangeDisplayName = (event) => {
        const value = event.target.value;
        this.setState({displayName: value})
    };

    onChangeUsername = (event) => {
        const value = event.target.value;
        this.setState({username: value})
    };

    onChangePassword = (event) => {
        const value = event.target.value;
        this.setState({password: value})
    }

    onChangePasswordRepeat = (event) => {
        const value = event.target.value;
        this.setState({passwordRepeat: value})
    }
}

export default UserSignUpPage;