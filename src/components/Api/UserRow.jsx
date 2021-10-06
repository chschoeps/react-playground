import './UserRow.css';

const UserRow = (props) => {
    return (
        <tr className="user-row" onClick={(e) => props.onRowClick(props.userData, e)}>
            <td>{props.userData.id}</td>
            <td>{props.userData.name}</td>
            <td>{props.userData.username}</td>
        </tr>
    )
}

export default UserRow;
