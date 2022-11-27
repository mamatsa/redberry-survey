import '../styles/skills.css';

function Skill({ id, title, experience, onSkillDelete }) {
  return (
    <div className="skill-wrapper">
      <p>{title.padEnd(7, ' ')}</p>
      <p>Years of experience: {experience}</p>
      <div
        className="skill-delete"
        onClick={(e) => {
          onSkillDelete(id);
        }}
      >
        <div></div>
      </div>
    </div>
  );
}

export default Skill;
