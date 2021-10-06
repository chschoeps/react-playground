import React from "react";
import './UserDetails.css';


class UserDetails extends React.Component {
    render() {
        if(!this.props.active) {
            return null;
        }
        return (
            <div id="user-details" onClick={(e) => this.props.onClose(e)} className="user-details">
                <div className="user-details-content">{JSON.stringify(this.props.user)}</div>
            </div>
        )
    }
}


export default UserDetails;
