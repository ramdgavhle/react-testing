function UserList({ users }) {
    const renderedUsers = users.map(user => {
        return <tr key={user.name}>
            <td>{user.name}</td>
            <td>{user.email}</td>
        </tr>
    });

    return (
    <table cellPadding={15} border={1}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {renderedUsers}
        </tbody>
    </table>
    )
}

export default UserList;