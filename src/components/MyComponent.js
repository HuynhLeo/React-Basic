import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    state = {
        listUsers:
            [
                { id: 1, name: "Leo", age: "21" },
                { id: 2, name: "Leo1", age: "22" },
                { id: 3, name: "Leo2", age: "23" },
            ]


    }
    // JSX
    render() {

        return (
            <div>
                <UserInfor />
                <hr />
                <DisplayInfor listUsers={this.state.listUsers} />

            </div>

        )
    }
}
export default MyComponent;