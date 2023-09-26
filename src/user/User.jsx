import { UserContext } from "../App";
import { useContext } from "react";

export default function User({ index }) {
    const [users, setUsers] = useContext(UserContext);
    const name = users[index].name;
    const years = users[index].years;

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
            <input
                type="text"
                onChange={(event) => handleNameChange(event, index)}
                value={name}
            />
        </div>
    );
}
