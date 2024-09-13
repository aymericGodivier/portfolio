import { Collapsable } from "./Collapsable"
export function SkillCard({name, skills}){

    function renderSkillCards() {
        return skills.map((element, index) => (
            <Collapsable 
                key={index} 
                title={element.skillName} 
                content={element.description} 
            />
        ));
    }

    return (
        <div className="skill-card">
            <span className="skill-title">{name}</span>
            {renderSkillCards()}
        </div>
    );
}