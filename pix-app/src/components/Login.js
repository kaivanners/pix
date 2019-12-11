import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        const stateName = event.target.type;
        this.setState({
            ...this.state,
            [stateName]: value});
    }

    handleSubmit(event) {

    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    render() {
        return (
        <div className="Login">
            <form onSubmit={this.handleSubmit}>
                <Form.Group controlId="email">
                <Form.Control 
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="email"
                />
                </Form.Group>
                <Form.Group controlId="password">
                <Form.Control 
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    placeholder="password"
                />
                </Form.Group>
                <Button block disabled={!this.validateForm()} type="submit">
          Login
        </Button>
            </form>
        </div>
        )
        
    }
    
}

export default Login;


