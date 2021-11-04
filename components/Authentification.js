import React, { Component } from 'react'
import { Text, View } from 'react-native'

class Authentification extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        alert("name :" + this.state.value)
        event.preventDefault();
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nom :
                     <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="login"/>
            </form>
        )
    }
}

export default Authentification