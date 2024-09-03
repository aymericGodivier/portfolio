import { useTranslation } from 'react-i18next';
import { ProjectCard } from '../components/ProjectCard';

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  // Importer toutes les images
const images = importAll(require.context('../assets/images/main', false, /\.(png|jpe?g|svg)$/));

function Home() {
    const { t } = useTranslation('home');
    const projects = t('projects', { returnObjects: true });

    // Vérifie si 'projects' est un tableau
    if (!Array.isArray(projects) || projects.length === 0) {
        return <div>Loading projects...</div>;  // Ou retourne null pour ne rien afficher
    }
    return (
        <div>
          {projects.map((project, index) => {
             const projectImage = images[project.image];
             console.log(projectImage);
            return (
              <ProjectCard
                key={index}
                image={projectImage}
                title={project.title}
                description={project.description}
                link={project.link}
                id={project.projectId}
              />
            );
          })}
        </div>
      );
    
}
export default Home;