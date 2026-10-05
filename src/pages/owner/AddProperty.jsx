import { LuCirclePlus, LuConstruction } from 'react-icons/lu';

export default function AddProperty() {
    return (
        <div className="page-container">
            <div className="page-header">
                <div className="page-title-row">
                    <LuCirclePlus className="page-title-icon" />
                    <h1>Ongeza Nyumba Mpya</h1>
                </div>
                <p className="page-subtitle">Jaza taarifa za nyumba yako.</p>
            </div>

            <div className="section-card">
                <div className="empty-state">
                    <LuConstruction className="empty-state-icon" />
                    <p>Ukurasa huu unajengwa.</p>
                    <span>API ya kuongeza nyumba bado haijatengenezwa.</span>
                </div>
            </div>
        </div>
    );
}