import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {Carrousel} from './Carrousel';
import {DownloadButton} from './DownloadButton';

export function ProjectPage() {
    const { projectId } = useParams();
    const { i18n } = useTranslation();
    const language = i18n.language;
    const [projectData, setProjectData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProjectData = async () => {
            try {
                const response = await fetch(`/locales/${language}/${projectId}.json`);
                if (!response.ok) {
                    throw new Error('Erreur lors du chargement du projet');
                }        
                const data = await response.json();
                setProjectData(prev => data);
            } catch (err) {
                setError(err.message);
            }
        };
        if (language){
            loadProjectData();
        }
        
    }, [projectId,language]);

    if (error) {
        return <p>Erreur : {error}</p>;
    }

    if (!projectData) {
        return <p>Chargement...</p>;
    }

    function renderCapsule(capsule) {
        switch (capsule.type) {
         
         case 'image':
             return <img className='img-solo' key={capsule.alt} src={capsule.src} alt={capsule.alt} />;
         case 'carrousel':
            return <Carrousel images={capsule.images}></Carrousel>    
         case 'youtube':
            return <iframe 
             src={`https://www.youtube.com/embed/${capsule.videoId}?rel=0&modestbranding=1`} 
             title="YouTube video player"  
             allowFullScreen
            ></iframe>
         case 'video':
             return <video src={capsule.src} controls></video>    
         default:
             return null;
         } 
     }

    return (
        <div className="project-page">
            
                       
            <div className='capsule'>
                <h1>{projectData.title}</h1>   
                <h2>{projectData.subtitle}</h2>
                <div className='media-container'>
                    {renderCapsule(projectData.capsule)}
                    <div className='link-container'>
                        {projectData.documents.map((item, index) => {
                            switch (item.type) {
                                case 'link':
                                    return <a className='link' key={index} href={item.url}>{item.label}</a>;
                                case 'download':
                                    return <DownloadButton key={index} label={item.label} url={item.url} />;
                                default:
                                    return null;
                            }
                        })}
                    </div>                    
                </div> 
                
            </div>              
            
            
            <div className="project-content">
                {projectData.content.map((item, index) => {
                    switch (item.type) {
                        case 'paragraph':
                            return <p style={{ whiteSpace: 'pre-line' }} key={index}>{item.text}</p>;
                        case 'image':
                            return <img key={index} src={item.src} alt={item.alt} />;
                        case 'link':
                            return <a key={index} href={item.url}>{item.label}</a>;
                        case 'download':
                            return <DownloadButton key={index} label={item.label} url={item.url} />;
                        case 'video':
                            return <video key={index} src={item.src} controls></video>
                        default:
                            return null;
                    }
                })}
            </div>
        </div>
    );
}