import { useTranslation } from 'react-i18next';
function LegalNotice() {
    const { t } = useTranslation('legal-notice');
    const legalContent = t('content', { returnObjects: true });
    
    // Fonction pour générer le contenu des sections
    const renderSections = () => {
        return Object.keys(legalContent).map((key, index) => (
            <div key={index} className="legal-section">
                
                <h2>{legalContent[key].title}</h2>
                <p style={{ whiteSpace: 'pre-line' }}>{legalContent[key].text}</p>
            </div>
        ));
    };
    
    return(
        <div>
            <h1>{t('title')}</h1>
            <div className='legal-content'>
                {renderSections()}
            </div>            
        </div>
    );        
    
}
export default LegalNotice;