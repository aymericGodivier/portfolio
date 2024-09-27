import { NavLink } from 'react-router-dom';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState('fr');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour le menu burger

  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Ouvre ou ferme le menu
  };

  const { t } = useTranslation('common');

  return (
    <header>
      <div className='social-links'>
        <a href='https://www.linkedin.com/in/aymeric-godivier-5aa763137/'>
          <img src='/images/common/linkedin.png' alt='linkedin logo' />
        </a>
        <a href='https://github.com/aymericGodivier'>
          <img src='/images/common/github.png' alt='github logo' />
        </a>
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
          <button
            onClick={() => changeLanguage('en')}
            className={selectedLanguage === 'en' ? 'selected' : ''}
          >
            <img src='/images/common/united-kingdom.png' alt='UK-flag' />
            {t('header.nav.translate.english')}
          </button>

          <button
            onClick={() => changeLanguage('fr')}
            className={selectedLanguage === 'fr' ? 'selected' : ''}
          >
            <img src='/images/common/france.png' alt='french-flag' />
            {t('header.nav.translate.french')}
          </button>
      </div>

      {/* Bouton burger, visible en mode mobile */}
      <button className='burger-menu' onClick={toggleMenu}>
        &#9776; {/* Symbole pour un menu burger */}
      </button>

      {/* Menu burger, affiché si isMenuOpen est true */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className='social-links'>
          <a href='https://www.linkedin.com/in/aymeric-godivier-5aa763137/'>
            <img src='/images/common/linkedin.png' alt='linkedin logo' />
          </a>
          <a href='https://github.com/aymericGodivier'>
            <img src='/images/common/github.png' alt='github logo' />
          </a>
        </div>

        <div className='translate-section'>
          <button
            onClick={() => changeLanguage('en')}
            className={selectedLanguage === 'en' ? 'selected' : ''}
          >
            <img src='/images/common/united-kingdom.png' alt='UK-flag' />
            {t('header.nav.translate.english')}
          </button>

          <button
            onClick={() => changeLanguage('fr')}
            className={selectedLanguage === 'fr' ? 'selected' : ''}
          >
            <img src='/images/common/france.png' alt='french-flag' />
            {t('header.nav.translate.french')}
          </button>
        </div>
      </div>
    </header>
  );
}