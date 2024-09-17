import { useTranslation } from 'react-i18next';
import { DownloadButton } from '../components/DownloadButton';
import { SkillCard } from '../components/SkillCard';
import { EducationCard } from '../components/EducationCard';
function About() {
    const { t } = useTranslation('about');
    const skillsList = t('skillsSection.allSkills', { returnObjects: true });
    const educationList = t('educationSection.education', { returnObjects: true });
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
                <DownloadButton label={t('aboutSection.downloadLabel1')} url={t('aboutSection.resumeUrl')} />
                <DownloadButton label={t('aboutSection.downloadLabel2')} url={t('aboutSection.memoireUrl')} />
            </div>
            <h2>{t('skillsSection.title')}</h2>
            <div className='about-section part2'>
                <div className='skills-container'>
                    <SkillCard name={skillsList[0].name} skills={skillsList[0].skills}/>
                    <SkillCard name={skillsList[1].name} skills={skillsList[1].skills}/>
                    <SkillCard name={skillsList[2].name} skills={skillsList[2].skills}/>
                    <SkillCard name={skillsList[3].name} skills={skillsList[3].skills}/>                  
                </div>
            </div>
            <h2>{t('educationSection.title')}</h2>
            <div className='about-section part3'>                
                <EducationCard school={educationList[0].school} name={educationList[0].name} dates={educationList[0].dates} description={educationList[0].description}/>
                <EducationCard school={educationList[1].school} name={educationList[1].name} dates={educationList[1].dates} description={educationList[1].description}/>
                <EducationCard school={educationList[2].school} name={educationList[2].name} dates={educationList[2].dates} description={educationList[2].description}/>
                <EducationCard school={educationList[3].school} name={educationList[3].name} dates={educationList[3].dates} description={educationList[3].description}/>
            </div>
            
        </div>
    );        
    
}
export default About;