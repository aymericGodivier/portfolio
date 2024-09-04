import React from 'react';
import { useTranslation } from 'react-i18next';
import { useFilters } from '../context/FilterContext'; 
import { ProjectCard } from '../components/ProjectCard';
import { FilterSelector } from '../components/FilterSelector';

function Home() {
    const { t } = useTranslation('home');
    const { filters } = useFilters(); // Récupère les filtres actuels depuis le contexte
    const projects = t('projects', { returnObjects: true });
    const tags1 = ["All", "GD", "QA", "LD", "UX", "Prog"];
    const labels1 = t('filterLabels1', { returnObjects: true });

    // Vérifie si 'projects' est un tableau
    if (!Array.isArray(projects) || projects.length === 0) {
        return <div>Loading projects...</div>;  // Ou retourne null pour ne rien afficher
    }

    // Filtre les projets en fonction des filtres sélectionnés
    const filteredProjects = projects.filter(project => {
        return Object.entries(filters).every(([filterType, selectedTag]) => {
            return selectedTag === 'All' || project.tags.includes(selectedTag);
        });
    });

    return (
        <div>
            <h1>{t('title')}</h1>
            <FilterSelector tags={tags1} labels={labels1} filterType="role" />
            {/* Tu peux ajouter d'autres FilterSelector pour d'autres types de filtres */}
            
            <div className="project-list">
                {filteredProjects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        id={project.projectId}
                        tags={project.tags}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;