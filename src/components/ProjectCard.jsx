import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { title, description, progress, status, team, deadline, color } = project;

  return (
    <div className="project-card fade-in">
      <div className="project-header">
        <div className="project-color" style={{ backgroundColor: color }}></div>
        <div className="project-status-badge">{status}</div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description text-secondary text-sm">{description}</p>
        
        <div className="project-progress">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%`, backgroundColor: color }}></div>
          </div>
          <span className="progress-text">{progress}%</span>
        </div>

        <div className="project-footer">
          <div className="project-team">
            {team.map((member, index) => (
              <div key={index} className="team-member" title={member}>
                {member.charAt(0)}
              </div>
            ))}
          </div>
          <div className="project-deadline text-xs text-secondary">
            📅 {deadline}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
