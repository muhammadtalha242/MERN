import React from 'react'
import UserList from "../components/UserList";
const User = (props) => {

    const USERS = [
        {
            id: "u1",
            name: "dummy 1",
            image: "https://images.unsplash.com/photo-1604034731259-a6ccac77e1d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
            places: 3
        }]
    return (
        <UserList items={USERS} />
    )
}
export default User

