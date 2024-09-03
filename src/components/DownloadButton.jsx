export function DownloadButton({ label, url }) {
    return (
        <a href={url} className="download-button" download>
            {label}
        </a>
    );
}