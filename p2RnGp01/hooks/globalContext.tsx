import React, { createContext, useContext, useState } from 'react';

 export type Filme = {
    imdbID: string;
    Title: string;
    Poster: string;
    favorito: boolean;
    userEmail:string;
};
interface ContextProps {
    children: React.ReactNode;
 }
type FilmesContextType = {
    filmes: Filme[];
    setFilmes: React.Dispatch<React.SetStateAction<Filme[]>>;
};

const FilmesContext = createContext<FilmesContextType | undefined>(undefined);



export const useFilmes = () => {
    const context = useContext(FilmesContext);
    if (!context) {
        throw new Error('useFilmes must be used within a FilmesProvider');
    }
    return context;
};

export const FilmesProvider: React.FC<ContextProps> = ({ children }) => {
    const [filmes, setFilmes] = useState<Filme[]>([]);

    return (
        <FilmesContext.Provider value={{ filmes, setFilmes }}>
            {children}
        </FilmesContext.Provider>
    );
};