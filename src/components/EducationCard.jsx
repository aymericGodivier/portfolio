export function EducationCard({school,name,dates,description}){

    return(
        <div className="education-card">            
            <span className="formation-name">{name}</span>
            <span className="school-name">{school}</span>
            <span className="dates">{dates}</span>
            <p className="formation-desc">{description}</p>
        </div>
    )
}