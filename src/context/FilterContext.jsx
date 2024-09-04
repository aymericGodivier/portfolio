import React, { createContext, useContext, useState } from 'react';

// Créer un contexte pour stocker les filtres
const FilterContext = createContext();

// Créer un fournisseur de contexte pour encapsuler l'état des filtres
export function FilterProvider({ children }) {
    const [filters, setFilters] = useState({});

    const updateFilter = (filterType, selectedTag) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterType]: selectedTag,
        }));
    };

    return (
        <FilterContext.Provider value={{ filters, updateFilter }}>
            {children}
        </FilterContext.Provider>
    );
}

// Hook personnalisé pour accéder au contexte des filtres
export function useFilters() {
    return useContext(FilterContext);
}