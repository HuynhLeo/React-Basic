import React from "react";

class AddUserInfor extends React.Component {
    state = {
        name: '',
        address: 'Cao Lanh',
        age: ''
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
        // alert(this.state);
        // ham chuyen tu cha sang con: con
        this.props.handleAddNewUser({
            id: 1,
            name: this.state.name,
            age: this.state.age
        });
    }
    handleClick = (event) => {
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

export default AddUserInfor;