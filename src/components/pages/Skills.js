import Pagination from '../Pagination';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Skill from '../Skill';

function Skills() {
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState('');
  const [userSkills, setUserSkills] = useState([]);
  const [errorMessage, setErrorMessage] = useState({ skill: '', experinece: '' });

  const navigate = useNavigate();

  // Fetch skills
  useEffect(() => {
    if (!localStorage.getItem('progress')) {
      navigate('/survey/1');
    }

    // Fetch skills for select
    const fetchSkills = async () => {
      const res = await fetch('https://bootcamp-2022.devtest.ge/api/skills');
      const data = await res.json();
      setSkills(data);
    };
    fetchSkills();

    // Take localstorage items
    setUserSkills(JSON.parse(localStorage.getItem('skills')));
    setExperience(localStorage.getItem('experience'));
  }, [navigate]);

  // On experience change
  const onExperienceChange = function (e) {
    setExperience(e.target.value);
    localStorage.setItem('experience', e.target.value);
  };

  // On skill add
  const onAdd = function (e) {
    e.preventDefault();

    let errors = { skill: '', experinece: '' };

    // if skill is not chosen
    const skill = document.getElementById('skills');
    if (skill.value === 'default') {
      errors.skill = 'Please choose a skill';
    }

    if (!experience) {
      errors.experinece = 'you should fill experience field';
    } else if (experience < 1 || experience > 30) {
      errors.experinece = 'experience should be between 1 and 30';
    }

    if (userSkills) {
      // if skill is already chosen
      for (const skillObj of userSkills) {
        if (skillObj.title === skill.value) {
          errors.skill = 'this skill is already chosen';
        }
      }
      if (errors.skill || errors.experinece) {
        setErrorMessage(errors);
        return;
      }
      const newSkill = { id: userSkills.length + 1, title: skill.value, experience };
      setUserSkills([...userSkills, newSkill]);
      localStorage.setItem('skills', JSON.stringify([...userSkills, newSkill]));
    } else {
      if (errors.skill || errors.experinece) {
        setErrorMessage(errors);
        return;
      }
      setUserSkills([{ id: 1, title: skill.value, experience }]);
    }

    setErrorMessage(errors);
  };

  // On skill delete
  const onSkillDelete = function (skillId) {
    const updatedSkills = [];
    for (const skill of userSkills) {
      if (skill.id !== skillId) {
        updatedSkills.push(skill);
      }
    }
    setUserSkills(updatedSkills);
    localStorage.setItem('skills', JSON.stringify(updatedSkills));
    setErrorMessage({});
  };

  // On pagination next button press
  const onNext = function () {
    if (!userSkills || userSkills.length < 1) {
      setErrorMessage({ skill: 'you should choose at least 1 skill', experinece: '' });
    } else {
      localStorage.setItem('progress', 2);
      navigate('/survey/3');
    }
  };

  return (
    <div className="container">
      <div className="survey-container">
        <div className="survey-container-main">
          <h2>Tell us about your skills</h2>
          <form className="standart-form" onSubmit={(e) => onAdd(e)}>
            <div className="select-skill">
              <select
                name="skills"
                id="skills"
                defaultValue="default"
                style={errorMessage.skill ? { border: '1px solid #FE3B1F' } : {}}
              >
                <option style={{ color: '#fff' }} value="default" disabled hidden>
                  Skills
                </option>

                {skills &&
                  skills.map((skill) => {
                    return (
                      <option key={skill.id} value={skill.title}>
                        {skill.title}
                      </option>
                    );
                  })}
              </select>
              <div className="select-arrow">
                <div className="select-arrow-1"></div>
                <div className="select-arrow-2"></div>
              </div>
            </div>
            {errorMessage.skill && <p className="error-message">* {errorMessage.skill}</p>}

            <input
              id="experience"
              name="experience"
              style={{ margin: '30px 0' }}
              type="number"
              value={experience || ''}
              onChange={(e) => onExperienceChange(e)}
              placeholder="Experience Duration in Years"
            />
            {errorMessage.experinece && (
              <p style={{ marginTop: '-25px', marginBottom: '0' }} className="error-message">
                * {errorMessage.experinece}
              </p>
            )}

            <button type="submit" className="add-skill">
              Add Programming Language
            </button>
          </form>
          {userSkills &&
            userSkills.map((userSkill) => {
              return (
                <Skill
                  key={userSkill.id}
                  id={userSkill.id}
                  title={userSkill.title}
                  experience={userSkill.experience}
                  onSkillDelete={onSkillDelete}
                />
              );
            })}
        </div>

        <Pagination onNext={onNext} />
      </div>
      <div className="about-container">
        <h2>A bit about our battles</h2>
        <p>
          As we said, Redberry has been on the field for quite some time now, and we have touched and embraced a variety
          of programming languages, technologies, philosophies, and frameworks. We are battle-tested in PHP Laravel
          Stack with Vue.js, refined in React, and allies with Serverside technologies like Docker and Kubernetes, and
          now we have set foot in the web3 industry.
        </p>
      </div>
    </div>
  );
}

export default Skills;
