import React from "react";
import axios from "axios";
import UserRow from "../components/Api/UserRow";
import UserDetails from "../components/Api/UserDetails";
import './Api.css';
import { withTranslation } from 'react-i18next';

const UserList = (props) => {
    return (
        <>
            {props.user.map((u) => <UserRow onRowClick={props.onRowClick} key={u.id} userData={u}/>)}
        </>
    )
}

class Api extends React.Component {
    state = {
        user: [],
        showUserDetails: false,
        userDetails: null,
    }
    componentDidMount() {
        this.getUsers();
    }

    toggleUserDetails(user, e) {
        if(e?.target.id === "user-details") {
            return;
        }
        this.setState({showUserDetails: !this.state.showUserDetails});
        this.setState({userDetails: user});
    }

    getUsers = () => {
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/users',
        }).then((response) => {
            this.setState({user: response.data});
        })
    }

    render() {
        const {t} = this.props;
        return (
            <div>
                <div>API Test</div>
                <div className="user-list">
                    <table>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>{t('Firstname')}</th>
                                <th>{t('Lastname')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <UserList onRowClick={(user, e) => this.toggleUserDetails(user, e)} user={this.state.user}/>
                        </tbody>
                    </table>
                </div>
            <UserDetails active={this.state.showUserDetails} onClose={(user, e) => this.toggleUserDetails(user, e)} user={this.state.userDetails}/>
            </div>
        )
    }
}

export default withTranslation()(Api);
