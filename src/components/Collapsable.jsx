import { useState } from 'react';
export function Collapsable({title, content}){

    const [expanded, setExpanded] = useState(false);

    const toggleMenu = () => {
      setExpanded(!expanded);
    };


    return(
        <div className={`folding-menu ${expanded ? 'expanded' : ''}`}>
            <div className="menu-header">
                <span onClick={toggleMenu}>{title}</span>
                <img src="images/common/Chevron.png" onClick={toggleMenu} alt='collapse arrow'></img>
            </div>            
            <div className="menu-content">
                <p>
                    {content}
                </p>
            </div>
        </div>
    )
}