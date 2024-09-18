import React from 'react';
import { useFilters } from '../context/FilterContext'; // Importer le contexte des filtres

export function FilterSelector({id, tags, labels, filterType }) {
    const { filters, updateFilter } = useFilters();
    const selectedTag = filters[filterType] || tags[0];

    const handleChange = (event) => {
        updateFilter(filterType, event.target.value);
    };

    return (
            <select id={id} value={selectedTag} onChange={handleChange}>
                {tags.map((tag, index) => (
                    <option key={index} value={tag}>
                        {labels[index]}
                    </option>
                ))}
            </select>        
    );
}