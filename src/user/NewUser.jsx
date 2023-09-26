import { UserContext } from "../App";
import { useContext, useState } from "react";
import WithColor from "../WithColor";

function NewUser() {
    const [users, setUsers] = useContext(UserContext);

    const [name, setName] = useState("");
    const [years, setYears] = useState("");

    const onNameChange = (event) => {
        setName(event.target.value);
    };

    const onYearsChange = (event) => {
        const years = event.target.value;
        setYears(parseInt(years, 10));
    };

    const handleUserSubmit = (event) => {
        event.preventDefault();
        if (name && years) {
            const newUser = {
                id: `${name}_${new Date().getTime()}`,
                name,
                years,
            };
            setUsers([...users, newUser]);
        }
        setName("");
        setYears("");
    };

    return (
        <form onSubmit={handleUserSubmit}>
            <label>
                Novi korisnik:
                <input
                    type="text"
                    name="Ime"
                    placeholder="Ime"
                    onChange={onNameChange}
                    value={name}
                />
                <input
                    type="number"
                    name="Godine"
                    placeholder="Godine"
                    onChange={onYearsChange}
                    value={years}
                />
            </label>
            <button type="submit">Dodaj korisnika</button>
        </form>
    );
}

export default NewUser;