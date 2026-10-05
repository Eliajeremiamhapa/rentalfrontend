import { LuFileText, LuInbox } from 'react-icons/lu';

export default function Leases() {
    return (
        <div className="page-container">
            <div className="page-header">
                <div className="page-title-row">
                    <LuFileText className="page-title-icon" />
                    <h1>Mikataba</h1>
                </div>
                <p className="page-subtitle">Mikataba yote ya kodi.</p>
            </div>

            <div className="section-card">
                <div className="empty-state">
                    <LuInbox className="empty-state-icon" />
                    <p>Hakuna mikataba bado.</p>
                    <span>Mikataba itaonekana hapa mara baada ya kuundwa.</span>
                </div>
            </div>
        </div>
    );
}