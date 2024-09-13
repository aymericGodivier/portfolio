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
                <a href='https://www.linkedin.com/in/aymeric-godivier-5aa763137/'>Linkedin</a>
                <a href='https://github.com/aymericGodivier'>GitHub</a>
            </div>
            <div className='header-titles'>
                <h2 className='portfolio-title'>AYMERIC GODIVIER</h2>
            </div>
                        
            <nav>
                <li>
                    <NavLink to="/" className="nav-link" activeclassname="active">
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
                    {t('header.nav.translate.english')}
                </button>
                <button onClick={() => changeLanguage('fr')}>
                    {t('header.nav.translate.french')}
                </button>
            </div>
                
        </header>
    )
}
