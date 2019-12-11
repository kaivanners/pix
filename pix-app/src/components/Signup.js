import React from 'react';
import '../style/style.css';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            retypePassword: ""
        }
        this.setItem = this.setItem.bind(this);
    }

    setItem(e) {
        this.setState({username: e.target.value});
    }

    render() {
        return (
        <div className="signup">
            <form>
                <input type="text" placeholder="username" value={this.state.username} onChange={this.setItem}></input>
                <input type="text" placeholder="email" value={this.state.email} onChange={this.setItem}></input>
                <input type="password" placeholder="password"></input>
                <input type="password" placeholder="re-type password"></input>
                <input type="submit" value="Sign-up"></input>
            </form>
        </div>
        )
        
    }
    
}

export default Signup;


