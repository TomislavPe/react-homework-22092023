import { UserContext } from "../App";
import { useContext, useState } from "react";
import UserPosts from "./UserPosts";

export default function User({ index }) {
    const [users, setUsers] = useContext(UserContext);
    const name = users[index].name;
    const years = users[index].years;
    const userId = users[index].id;

    const [newName, setNewName] = useState(name)

    const handleNameChange = () => {
        const newUsers = [...users];

        newUsers[index].name = newName;
        setUsers(newUsers);
    };

    const handleNewNameChange = (event) => {
      setNewName(event.target.value);
  };

  const userStyle = {
    border: '4px solid white',
    padding: '20px',
  };

    return (
        <div style={userStyle}>
            <p>
                Pozdrav, moje ime je {name} i imam {years} godina.
            </p>
            <UserPosts userId={userId}/>
            <label>
                Upiši novo ime:
                <input
                    type="text"
                    onChange={handleNewNameChange}
                    value={newName}
                />
            </label>
            <button onClick={handleNameChange}>Promijeni ime</button>
        </div>
    );
}
