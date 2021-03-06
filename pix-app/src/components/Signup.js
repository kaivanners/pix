import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            retypePassword: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        const stateName = event.target.name;
        this.setState({
            ...this.state,
            [stateName]: value});
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    render() {
        return (
        <div className="signup">
            <form onSubmit={this.handleSubmit}>
            <Form.Group controlId="username">
                <Form.Control 
                    type="username"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    placeholder="username"
                />
                </Form.Group>
                <Form.Group controlId="email">
                <Form.Control 
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="email"
                />
                </Form.Group>
                <Form.Group controlId="password">
                <Form.Control 
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    placeholder="password"
                />
                </Form.Group>
                <Form.Group controlId="retypePassword">
                <Form.Control 
                    type="password"
                    name="retypePassword"
                    value={this.state.retypePassword}
                    onChange={this.handleChange}
                    placeholder="re-type password"
                />
                </Form.Group>
                <Button block disabled={!this.validateForm()} type="submit">
          Sign-up
        </Button>
            </form>
        </div>
        )
        
    }
    
}

export default Signup;


