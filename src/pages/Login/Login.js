import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , } from '@fortawesome/free-brands-svg-icons';

const icon = <FontAwesomeIcon icon={faFacebookF} />



class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        email: "",
        password: "",
        };
      console.log("Login props", props);
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        const user = { email, password };
        console.log(user);
    };


    
    render() {
        return (
        <Fragment>
            <Header />
            
            {/* <h1>Login</h1>
            <form onSubmit={this.onSubmit}>
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.onChange}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.onChange}
            />
            <input type="submit" value="Login" />
            </form> */}
            <div className="container"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                marginTop: "-300px",
            }}
            >
            <div className="row">
                <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                    <h2 className="text-center"
                    style={{
                        color: "#000",
                        fontWeight: "bold",
                        fontSize: "20px",
                    }}
                    >
                        Log in to your Guru Mantra account
                        </h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="facebook-login">
                            <button className="btn btn-primary btn-block">
                                <i className="fab fa-facebook-f"></i> {icon} &nbsp; Login with Facebook
                            </button>
                        </div>
                        <div className="or-seperator">
                            <i>or</i>
                        </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter Email"
                        value={this.state.email}
                        onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter Password"
                        value={this.state.password}
                        onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                        Login
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
            <div style={{ marginTop: "100px",
            display: "flex",
            justifyContent: "center" }}>
            <Footer />
            </div>

        </Fragment>
        );
    }
    }

export default Login;
