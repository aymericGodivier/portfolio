import { NavLink } from 'react-router-dom';
import '../i18n';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
export function Header(){
     // Fonction pour changer la langue en anglais
   const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
  };
    return(
        <header>
            <nav>
                <li>
                    <NavLink to="/" className="nav-link" activeclassname="active">
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="nav-link" activeclassname="active">
                        A propos
                    </NavLink>
                </li>
            </nav>
                <button onClick={() => changeLanguage('en')}>
                    English
                </button>
                <button onClick={() => changeLanguage('fr')}>
                    Français
                </button>
        </header>
    )
}
