import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { ContactForm } from './ContactForm';
export function Footer(){

  const { t } = useTranslation('common');
    return(
        <footer>
          <span className='contact-me'>{t('footer.contact')}</span>
          <ContactForm />
           <p className='credits'>{t('footer.credits')}</p>
           <NavLink to="/legal-notice" className="nav-link" activeclassname="active">
            {t('footer.legal')}   
            </NavLink>             
        </footer>
    )
}
