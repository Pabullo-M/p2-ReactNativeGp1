import React, { createContext, useContext, useState } from 'react';

 export type Filme = {
    imdbID: string;
    Title: string;
    Poster: string;
    favorito: boolean;
};

type FilmesContextType = {
    filmes: Filme[];
    setFilmes: React.Dispatch<React.SetStateAction<Filme[]>>;
};

const FilmesContext = createContext<FilmesContextType | undefined>(undefined);

export const FilmesProvider: React.FC = ({ children }) => {
    const [filmes, setFilmes] = useState<Filme[]>([]);

    return (
        <FilmesContext.Provider value={{ filmes, setFilmes }}>
            {children}
        </FilmesContext.Provider>
    );
};

export const useFilmes = () => {
    const context = useContext(FilmesContext);
    if (!context) {
        throw new Error('useFilmes must be used within a FilmesProvider');
    }
    return context;
};