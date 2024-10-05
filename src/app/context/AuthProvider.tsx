import { createContext, useState, ReactNode } from "react";

interface AuthContextType {
    auth: { [key: string]: any };
    setAuth: React.Dispatch<React.SetStateAction<{ [key: string]: any }>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode; 
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [auth, setAuth] = useState<{ [key: string]: any }>({});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;