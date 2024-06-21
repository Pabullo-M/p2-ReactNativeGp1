import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useState } from "react";

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
  retrieveData: () => Promise<string | null>;
  setSalvarEmail: React.Dispatch<React.SetStateAction<boolean>>
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('Erro no contexto de usuário, useUser');
  }
  return context;
};

const storeData = async (value: User) => {
  try {
    await AsyncStorage.setItem('EmailUsuario', value.email);
  } catch (error) {
    
  }
};

export const UserProvider: React.FC<ContextProps> = ({ children }) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  const[salvarEmail, setSalvarEmail] = useState<boolean>(false)
  const storeData = async (value: User) => {
    try {
        let log;
      if(salvarEmail){
        log = value.email
      }else{
        // await AsyncStorage.clear();
        return;
      }  
      await AsyncStorage.setItem('EmailUsuario', log);
    } catch (error) {
      
    }
  };

  if (salvarEmail) {
    storeData(user!);
  }

  const retrieveData = async (): Promise<string | null> => {
    try {
      const value = await AsyncStorage.getItem('EmailUsuario');
      return value;
    } catch (error) {
      return null;
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, retrieveData, setSalvarEmail }}>
      {children}
    </UserContext.Provider>
  );
};
