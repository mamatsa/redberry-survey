import '../styles/skills.css';

function Skill({ skillName, experience }) {
  return (
    <div className="skill-wrapper">
      <p>{skillName.padEnd(7, ' ')}</p>
      <p>Years of experience: {experience}</p>
      <div
        className="skill-delete"
        onClick={(e) => {
          e.target.parentElement.remove();
        }}
      >
        <div></div>
      </div>
    </div>
  );
}

export default Skill;
