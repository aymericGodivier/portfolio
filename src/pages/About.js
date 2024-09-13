import { useTranslation } from 'react-i18next';
import { DownloadButton } from '../components/DownloadButton';
import { SkillCard } from '../components/SkillCard';
import { Collapsable } from '../components/Collapsable';
function About() {
    const { t } = useTranslation('about');
    const skillsList = t('skillsSection.allSkills', { returnObjects: true });
    // Vérifie si 'skillsList' est un tableau
    if (!Array.isArray(skillsList) || skillsList.length === 0) {
        return <div>Loading projects...</div>;  // Ou retourne null pour ne rien afficher
    }
    
    return(
        <div>
            <h1>{t('title')}</h1>
            <h2>{t('aboutSection.title')}</h2>
            <div className='about-section part1'>
                <p style={{ whiteSpace: 'pre-line' }} className='p-about'>{t('aboutSection.description')}</p>
                <DownloadButton label={t('aboutSection.downloadLabel')} url={t('aboutSection.resumeUrl')} />
            </div>
            <h2>{t('skillsSection.title')}</h2>
            <div className='about-section part2'>
                <div className='skills-container'>
                    <SkillCard name={skillsList[0].name} skills={skillsList[0].skills}/>
                    <SkillCard name={skillsList[1].name} skills={skillsList[1].skills}/>
                                       
                </div>
            </div>
            <h2>{t('educationSection.title')}</h2>
            <div className='about-section part3'>                
                <div className='education-card'>
                    <span className='formation-title'>Openclassrooms testeur logiciel</span>
                    <p className='formation-desc'>Testeur logiciel</p>
                </div>
                <div className='education-card'>
                    <span className='formation-title'>ICAN Master Game Design</span>
                    <p className='formation-desc'>Game Design</p>
                </div>
                <div className='education-card'>
                    <span className='formation-title'>Gamagora DU Level Design</span>
                    <p className='formation-desc'>Level Design</p>
                </div>
                <div className='education-card'>
                    <span className='formation-title'>IUT du Limousin DUT MMI</span>
                    <p className='formation-desc'>Multimédia</p>
                </div>
            </div>
            
        </div>
    );        
    
}
export default About;