import { createContext, useContext, useState } from "react";

export type User = {
    email: string;
    password: string;
};

interface ContextProps {
    children: React.ReactNode;
}
type UserContextType = {
    user: User | undefined;
    setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('Erro no contexto de usuario, useUser');
    }
    return context;
};

export const UserProvider: React.FC<ContextProps> = ({ children }) => {
    const [user, setUser] = useState<User | undefined>(undefined);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
};