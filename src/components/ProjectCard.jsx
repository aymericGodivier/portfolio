import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export function ProjectCard({ image, title,type, description,link,tags }){
    const { t } = useTranslation('home');

    return(
        <div className="card-container" data-tags={tags.join(' ')}>
            <div className='image-container'>
                <img className="card-image" src={image} alt={title}/>
            </div>            
            <span className="card-title">{title}</span>
            <span className='card-type'>{type}</span>
            <p className="card-description">{description}</p>
            <NavLink to={`/${link}`} className="nav-link" activeclassname="active">
                        {t('projectsSection.linkLabel')}
            </NavLink>
        </div>
    )
}