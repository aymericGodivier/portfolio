import { useTranslation } from 'react-i18next';
function About() {
    const { t } = useTranslation('about');
    return(
        <div>
            <h1>{t('title')}</h1>
            
        </div>
    );        
    
}
export default About;