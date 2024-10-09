import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    // JSX
    render() {
        const arr = [
            'a', 'b', 'c'
        ]
        return (
            <div>
                <UserInfor />
                <hr />
                <DisplayInfor name='Leo' age={21} />
                <hr />
                <DisplayInfor name='dep trai' age='22' arr={arr} />
            </div>

        )
    }
}
export default MyComponent;