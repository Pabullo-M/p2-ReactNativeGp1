import React, { createContext, useContext, useState } from 'react';

export type Filme = {
    imdbID: string;
    Title: string;
    Poster: string;
    Plot: string;
    imdbRating: string;
    favorito: boolean;
    userEmail:string;
};
interface ContextProps {
    children: React.ReactNode;
 }
type FilmesContextType = {
    filmes: Filme[];
    setFilmes: React.Dispatch<React.SetStateAction<Filme[]>>;
    removerFilmeFavorito: (id: string) => void;
};

const FilmesContext = createContext<FilmesContextType | undefined>(undefined);

export const useFilmesContext = () => {
    const context = useContext(FilmesContext);
    if (!context) {
        throw new Error('useFilmes must be used within a FilmesProvider');
    }
    return context;
};

export const FilmesProvider: React.FC<ContextProps> = ({ children }) => {
    const [filmes, setFilmes] = useState<Filme[]>([]);

    const removerFilmeFavorito = (id: string) => {
        setFilmes((prevFilmes) => prevFilmes.filter((filme) => filme.imdbID !== id));
    };

    return (
        <FilmesContext.Provider value={{ filmes, setFilmes, removerFilmeFavorito }}>
            {children}
        </FilmesContext.Provider>
    );
};
