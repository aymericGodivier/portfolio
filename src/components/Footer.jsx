import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
export function Footer(){

  const { t } = useTranslation('common');
    return(
        <footer>
           <p className='credits'>{t('footer.credits')}</p>
           <NavLink to="/legal-notice" className="nav-link" activeclassname="active">
            {t('footer.legal')}   
            </NavLink>             
        </footer>
    )
}
