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
    const tags2 = ["All", "game", "proto", "web"];
    const labels1 = t('projectsSection.filterLabels1', { returnObjects: true });
    const labels2 = t('projectsSection.filterLabels2', { returnObjects: true });

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
            <div className='welcome'>
                <div className='welcome-section part1'>
                    <h2>{t('welcomeSection.title')}</h2>
                    <p style={{ whiteSpace: 'pre-line' }} className='about-me'>{t('welcomeSection.Presentation')}</p>
                </div>
                <div className='welcome-section part2'>
                    <h3>Game Design</h3>
                    <p style={{ whiteSpace: 'pre-line' }} className='about-me'>{t('welcomeSection.GD')}</p>
                    <h3>QA</h3>
                    <p style={{ whiteSpace: 'pre-line' }} className='about-me'>{t('welcomeSection.QA')}</p>
                </div>                
            </div>
            <h2>{t('projectsSection.title')}</h2>
            <div className='filter-container'>
                <span className='filterName'>{t('projectsSection.filterName1')}</span>
                <FilterSelector tags={tags1} labels={labels1} filterType="role" />
                <span className='filterName'>{t('projectsSection.filterName2')}</span>
                <FilterSelector tags={tags2} labels={labels2} filterType="type" />
            </div>         
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