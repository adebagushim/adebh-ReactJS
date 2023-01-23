import React from "react";

export default class List extends React.Component {
    state = {
        users: ['Ade', 'Bardi', 'Saka', 'Soto', 'Loli']
    }
    render(){
        return(
            <div>
                <ul>
                    {
                        this.state.users.map((user, i) => <li key={i}>{user}</li> )
                    }
                </ul>
            </div>
        )
    }
}