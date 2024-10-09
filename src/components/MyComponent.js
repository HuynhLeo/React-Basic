import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Leo',
        address: 'Cao Lanh',
        age: '21'
    };
    handleClick(event) {
        console.log('Leo dz')
        console.log(' My name is', this.state.name)
        this.setState({
            name: 'Leo1',
            age: 18
        })
    }
    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleSubmit = (event) => {
        // hàm ngăn loading lại trang
        event.preventDefault();
        alert("me")
    }
    // JSX
    render() {
        return (
            <div>
                {/* Leo đẹp trai */}
                My name is {this.state.name} and I'm {this.state.age}
                <div>
                    <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
                    <form onSubmit={(event) => this.handleSubmit(event)}>
                        <input type="text" onChange={(event) => this.handleOnChangeInput(event)} />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default MyComponent;