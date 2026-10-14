import { config } from "../config";
import "./styles/Certifications.css";
import { FaAward, FaCertificate, FaGraduationCap } from "react-icons/fa6";
import { SiGooglecloud } from "react-icons/si";

const getIcon = (issuer: string) => {
  if (issuer.includes("Google")) return <SiGooglecloud />;
  if (issuer.includes("GATE")) return <FaGraduationCap />;
  if (issuer.includes("Udemy")) return <FaCertificate />;
  return <FaAward />;
};

const Certifications = () => {
  return (
    <div className="certifications-section section-container" id="certifications">
      <div className="certifications-container">
        <div className="certifications-header">
          <h2>
            Certifications <span>&</span> Milestones
          </h2>
          <p>
            Recognized expertise across AI development, modern frontend engineering, full stack systems, and computer science foundations.
          </p>
        </div>

        {/* Highlights / Stats */}
        {config.highlights && (
          <div className="cert-stats-row">
            {config.highlights.map((item, index) => (
              <div key={index} className="cert-stat-card">
                <div className="cert-stat-value">{item.value}</div>
                <div className="cert-stat-label">{item.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Certifications Cards */}
        <div className="cert-grid">
          {config.certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-card-top">
                <span className="cert-badge">
                  {getIcon(cert.issuer)}
                  <span>{cert.issuer}</span>
                </span>
              </div>
              <div>
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-desc">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
