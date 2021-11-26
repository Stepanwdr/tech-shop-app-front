import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { connect } from 'react-redux';
import { loginRequest, registrationRequest } from '../store/actions/users';
import WrapperLogOut from '../components/WrapperLogOut';
import Input from "../components/form/Input";

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {},
            error: '',
        };
    }

    handleChange = (path, value) => {
        const { formData, errors } = this.state;
        _.set(formData, path, value);
        this.setState({ formData, errors });
    }

    handleSubmit = async (ev) => {
        const { formData } = this.state;
        ev.preventDefault();
        const { payload: { data = {} } } = await this.props.loginRequest(formData.email, formData.password);

        if (data.status !== 'ok') {
            this.setState({ error: 'invalid email or password' });
        }
    }

    render() {
        const { formData, error } = this.state;
        return (
            <WrapperLogOut>
                <h2 />
                <div className="container" id="container">
                    <div className="form-container sign-in-container">
                        <form onSubmit={this.handleSubmit}>
                            <h1>Sign in</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fab fa-facebook-f" /></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
                                <a href="#" className="social"><i className="fab fa-linkedin-in" /></a>
                            </div>
                            <span>or use your account</span>
                            <Input
                                onChange={(ev) => this.handleChange('email', ev.target.value)}
                                value={formData.email || ''}
                                type="email"
                                placeholder="Email"
                            />
                            <Input
                                onChange={(ev) => this.handleChange('password', ev.target.value)}
                                value={formData.password || ''}
                                type="password"
                                placeholder="Password"
                            />
                            <a href="#">Forgot your password?</a>
                            <button>Sign In</button>
                            {error ? (
                                <span className="error">{error}</span>
                            ) : null}
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className="ghost" id="signIn">Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <Link to="/registration">
                                    <button className="ghost" id="signUp">
                                        Sign Up
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </WrapperLogOut>
        );
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {
    loginRequest,
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Registration);

export default Container;
