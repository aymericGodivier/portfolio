import { useTranslation } from 'react-i18next';
export function Footer(){

  const { t } = useTranslation('common');
    return(
        <footer>
           <p className='credits'>{t('footer.credits')}</p>
           <a href="https://www.flaticon.com/free-icons/uk-flag" title="uk flag icons">{t('footer.iconeCredits1')}</a>
           <a href="https://www.flaticon.com/free-icons/france" title="france icons">{t('footer.iconeCredits2')}</a>             
        </footer>
    )
}
