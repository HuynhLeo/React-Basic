import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Leo',
        address: 'Cao Lanh',
        age: '21'
    };

    // JSX
    render() {
        return (
            <div>
                {/* Leo đẹp trai */}
                My name is {this.state.name} and I'm from {this.state.address}
            </div>
        )
    }
}
export default MyComponent;