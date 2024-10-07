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
    }
    handleOnMoverOver(event) {
        console.log(event.pageX)
    }
    // JSX
    render() {
        return (
            <div>
                {/* Leo đẹp trai */}
                My name is {this.state.name} and I'm from {this.state.address}
                <div>
                    <button onClick={this.handleClick}>Click me</button>
                    <button onMouseOver={this.handleOnMoverOver}>Hover me</button>
                </div>
            </div>
        )
    }
}
export default MyComponent;