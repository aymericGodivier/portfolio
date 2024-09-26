import { NavLink } from 'react-router-dom';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
export function Header(){
     // Fonction pour changer la langue en anglais
   const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
  };
  const { t } = useTranslation('common');
    return(
        <header>
            <div className='social-links'>
                <a href='https://www.linkedin.com/in/aymeric-godivier-5aa763137/'><img src='/images/common/linkedin.png' alt='linkedin logo'></img></a>
                <a href='https://github.com/aymericGodivier'><img src='/images/common/github.png' alt='github logo'></img></a>
            </div>
            <div className='header-titles'>
                <NavLink to="/" className="nav-link" activeclassname="active">
                    <h2 className='portfolio-title'>AYMERIC GODIVIER</h2>    
                </NavLink>                
            </div>
                        
            <nav>
                <li>
                    <NavLink to="/#my-projects" className="nav-link" activeclassname="active">
                        {t('header.nav.home')}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="nav-link" activeclassname="active">
                        {t('header.nav.about')}
                    </NavLink>
                </li>
            </nav>
            <div className='translate-section'>
            
                <button onClick={() => changeLanguage('en')}>
                <img src='/images/common/united-kingdom.png' alt='UK-flag'></img>
                    {t('header.nav.translate.english')}
                </button>                
                <button onClick={() => changeLanguage('fr')}>
                <img src='/images/common/france.png' alt='french-flag'></img>
                    {t('header.nav.translate.french')}
                </button>
            </div>
                
        </header>
    )
}
