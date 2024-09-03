import { NavLink } from 'react-router-dom';
export function ProjectCard({ image, title, description,link,id }){

    return(
        <div className="card-container">
            <img className="card-image" src={image} alt={title}></img>
            <span className="card-title">{title}</span>
            <p className="card-description">{description}</p>
            <NavLink to={`/${link}`} className="nav-link" activeclassname="active">
                        lien du projet
            </NavLink>
        </div>
    )
}