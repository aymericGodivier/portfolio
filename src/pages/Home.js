import '../i18n';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
function Home() {
    const { t } = useTranslation('home');
    return(
        <div>
            <p>C'est home ici</p>
            <p>{t('app.header')}</p>
        </div>
    );        
    
}
export default Home;