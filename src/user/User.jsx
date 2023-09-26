import { UserContext } from "../App";
import { useContext } from "react";
import UserPosts from "./UserPosts";

export default function User({ index }) {
    const [users, setUsers] = useContext(UserContext);
    const name = users[index].name;
    const years = users[index].years;
    const userId = users[index].id;

    const handleNameChange = (event, index) => {
        const newUsers = [...users];

        newUsers[index].name = event.target.value;
        setUsers(newUsers);
    };

    return (
        <div>
            <p>
                Pozdrav, moje ime je {name} i imam {years} godina.
            </p>
            <UserPosts userId={userId}/>
            <label>
                Upiši novo ime:
                <input
                    type="text"
                    onChange={(event) => handleNameChange(event, index)}
                    value={name}
                />
            </label>
        </div>
    );
}
