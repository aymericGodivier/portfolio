import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export function ProjectCard({ image, title, description,link,tags }){
    const { t } = useTranslation('home');

    return(
        <div className="card-container" data-tags={tags.join(' ')}>
            <img className="card-image" src={image} alt={title}/>
            <span className="card-title">{title}</span>
            <p className="card-description">{description}</p>
            <NavLink to={`/${link}`} className="nav-link" activeclassname="active">
                        {t('linkLabel')}
            </NavLink>
        </div>
    )
}