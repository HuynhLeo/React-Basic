import React from "react";

class UserInfor extends React.Component {
    state = {
        name: 'Leo',
        address: 'Cao Lanh',
        age: 21
    };
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    };
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    handleSubmit = (event) => {
        // hàm ngăn loading lại trang
        event.preventDefault();
        alert("me")
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <div>
                    <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
                    <form onSubmit={(event) => this.handleSubmit(event)}>
                        <label>Your Name: </label>
                        <input
                            value={this.state.name}
                            type="text" onChange={(event) => this.handleOnChangeName(event)} />
                        <button>Submit</button>
                        <label>Your Age: </label>
                        <input
                            value={this.state.age}
                            type="text" onChange={(event) => this.handleOnChangeAge(event)} />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default UserInfor;