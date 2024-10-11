import React from "react";

class DisplayInfor extends React.Component {

    state = {
        isShowListUser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {

        const { listUsers } = this.props;
        console.log(listUsers)
        return (
            <div>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide list Users:" : "Show list Users"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <div >
                        {listUsers.map((user) => {
                            // cau dieu kien 
                            return (
                                <div key={user.id} className={+user.age > 21 ? "green" : "red"}>
                                    <div>My name's {user.name} </div>
                                    <div>My age {user.age}</div>
                                    <hr />
                                </div>
                            )

                        })}


                    </div>
                }
            </div>
        )
    }
}
export default DisplayInfor;