import React from "react";
import './DisplayInfor.scss';
import logo from './../logo.svg';


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
            <div className="display-infor-container">

                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide list Users:" : "Show list Users"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <>
                        {listUsers.map((user, index) => {

                            // cau dieu kien 
                            return (
                                <div key={user.id} className={+user.age > 21 ? "green" : "red"}>
                                    <div>My name's {user.name} </div>
                                    <div>My age {user.age}</div>
                                    <div>
                                        <button onClick={() => { this.props.handleDeleteUser(user.id) }}>Delete</button>
                                    </div>
                                    <hr />
                                </div>
                            )

                        })}
                        <img src={logo} />
                    </>
                }
            </div>
        )
    }
}
export default DisplayInfor;