import "./App.css";
import { useState, createContext } from "react";
import { User, NewUser } from "./user";

export const UserContext = createContext();

export default function App() {
    const initialUsers = [
        { id: 1, name: "Ivan", years: 30 },
        { id: 2, name: "Marko", years: 35 },
        { id: 3, name: "Ana", years: 25 },
    ];

    const [users, setUsers] = useState(initialUsers);

    const UserContextProvider = ({ children }) => {
        return (
            <UserContext.Provider value={[users, setUsers]}>
                {children}
            </UserContext.Provider>
        );
    };

    return (
        <UserContextProvider>
            <div>
                <h1>React aplikacija</h1>

                {users.map((user, index) => (
                    <User key={user.id} index={index} />
                ))}

                <NewUser />
            </div>
        </UserContextProvider>
    );
}
