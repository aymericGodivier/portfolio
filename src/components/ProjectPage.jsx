import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
/*import YouTubeEmbed from './YouTubeEmbed';*/
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
        console.log(projectId);
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

    return (
        <div className="project-page">
            <h1>{projectData.title}</h1>
            <h2>{projectData.subtitle}</h2>
            {projectData.documents.map((item, index) => {
                switch (item.type) {
                    case 'link':
                        return <a key={index} href={item.url}>{item.label}</a>;
                    case 'download':
                        return <DownloadButton key={index} label={item.label} url={item.url} />;
                    default:
                        return null;
                }
            })}
            <div className="project-content">
                {projectData.content.map((item, index) => {
                    switch (item.type) {
                        case 'paragraph':
                            return <p key={index}>{item.text}</p>;
                        case 'image':
                            return <img key={index} src={item.src} alt={item.alt} />;
                        case 'link':
                            return <a key={index} href={item.url}>{item.label}</a>;
                        case 'download':
                            return <DownloadButton key={index} label={item.label} url={item.url} />;
                        default:
                            return null;
                    }
                })}
            </div>
        </div>
    );
}