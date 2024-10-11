import React from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

class MyComponent extends React.Component {

    state = {
        listUsers:
            [
                { id: 1, name: "Leo", age: "21" },
                { id: 2, name: "Leo1", age: "22" },
                { id: 3, name: "Leo2", age: "23" },
            ]
    }
    // ham chuyen tu cha sang con : cha
    handleAddNewUser = (userObj) => {
        console.log('check data from parent:', userObj)
        this.setState({
            // co the them o tren hoac duoi
            // listUsers: [userObj, ...this.state.listUsers]
            listUsers: [...this.state.listUsers, userObj]
        })
    }
    // JSX
    render() {

        return (
            <div>
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br></br>
                <hr />
                <DisplayInfor
                    listUsers={this.state.listUsers}

                />

            </div>

        )
    }
}
export default MyComponent;