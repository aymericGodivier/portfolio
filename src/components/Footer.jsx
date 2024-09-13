import { useTranslation } from 'react-i18next';
export function Footer(){

  const { t } = useTranslation('common');
    return(
        <footer>
           <p className='credits'>{t('footer.credits')}</p>             
        </footer>
    )
}
