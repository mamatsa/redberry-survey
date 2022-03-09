import '../styles/applications.css';
import arrowUp from '../images/arrow-up.svg';
import arrowDown from '../images/arrow-down.svg';
import { useState } from 'react';

function Application({ application, numeration, skills }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="application-container">
      <p className="application-numeration" onClick={() => setIsOpen(!isOpen)}>
        {numeration + 1} <img src={isOpen ? arrowUp : arrowDown} style={{ cursor: 'pointer' }} alt="arrow" />
      </p>

      <div className="application-data" style={!isOpen ? { display: 'none' } : {}}>
        <div className="application-data-top">
          <div className="application-data-personal">
            <a href="/application">Personal Information</a>
            <p>
              First Name <span>{application.first_name}</span>
            </p>
            <p>
              Last Name <span>{application.last_name}</span>
            </p>
            <p>
              E Mail <span>{application.email}</span>
            </p>
            <p>
              Phone <span>{application.phone || ''}</span>
            </p>
          </div>
          <div className="application-data-skillset">
            <a href="/application">Skillset</a>
            {application.skills.map((skill, index) => {
              return (
                <p key={index}>
                  {skills[skill.id]} <span>Years of Experience: {skill.experience}</span>
                </p>
              );
            })}
          </div>
        </div>
        <div className="application-data-bottom">
          <div className="application-data-covid">
            <a href="/application">Covid Situation</a>
            <form action="" className="covid-form">
              <label>How would you prefer to work?</label>
              <div className="form-radios">
                <div className="radio-wrapper">
                  <input
                    type="radio"
                    id="office"
                    name="work_place"
                    value="From Sairme Office"
                    className="radio-input"
                    checked={application.work_preference === 'from_office'}
                    readOnly
                  />
                  <label htmlFor="office">From Sairme Office</label>
                </div>

                <div className="radio-wrapper">
                  <input
                    type="radio"
                    id="home"
                    name="work_place"
                    value="From Home"
                    className="radio-input"
                    checked={application.work_preference === 'from_home'}
                    readOnly
                  />
                  <label htmlFor="home">From Home</label>
                </div>

                <div className="radio-wrapper">
                  <input
                    type="radio"
                    id="hybrid"
                    name="work_place"
                    value="Hybrid"
                    className="radio-input"
                    checked={application.work_preference === 'hybrid'}
                    readOnly
                  />
                  <label htmlFor="hybrid">Hybrid</label>
                </div>
              </div>
              <label>Did you contact covid 19? :(</label>

              <div className="form-radios">
                <div className="radio-wrapper">
                  <input
                    type="radio"
                    id="covid-yes"
                    name="covid-contact"
                    value="Yes"
                    className="radio-input"
                    checked={application.had_covid}
                    readOnly
                  />
                  <label htmlFor="covid-yes">Yes</label>
                </div>

                <div className="radio-wrapper">
                  <input
                    type="radio"
                    id="covid-no"
                    name="covid-contact"
                    value="No"
                    className="radio-input"
                    checked={!application.had_covid}
                    readOnly
                  />
                  <label htmlFor="covid-no">No</label>
                </div>
              </div>

              {application.had_covid && (
                <>
                  <label htmlFor="covid-date">When?</label>
                  <input
                    type="date"
                    id="covid-date"
                    name="covid-date"
                    value={application.had_covid_at}
                    onChange={() => {
                      return;
                    }}
                  />
                </>
              )}

              <label>Have you been vaccinated?</label>

              <div className="form-radios">
                <div className="radio-wrapper">
                  <input
                    type="radio"
                    id="vaccinated-yes"
                    name="covid-vaccinated"
                    value="Yes"
                    className="radio-input"
                    checked={application.vaccinated}
                    readOnly
                  />
                  <label htmlFor="covid-yes">Yes</label>
                </div>

                <div className="radio-wrapper">
                  <input
                    type="radio"
                    id="vaccinated-no"
                    name="covid-vaccinated"
                    value="No"
                    className="radio-input"
                    checked={!application.vaccinated}
                    readOnly
                  />
                  <label htmlFor="covid-no">No</label>
                </div>
              </div>

              {application.vaccinated && (
                <>
                  <label htmlFor="covid-date">When did you get your last covid vaccine?</label>
                  <input
                    type="date"
                    id="vaccine-date"
                    name="vaccine-date"
                    value={application.vaccinated_at || ''}
                    onChange={() => {
                      return;
                    }}
                  />
                </>
              )}
            </form>
          </div>
          <div className="application-data-insights">
            <a href="/application">Insights</a>
            <form action="" className="covid-form">
              <label>Would you attend Devtalks and maybe also organize your own?</label>
              <div className="form-radios">
                <div className="radio-wrapper">
                  <input
                    type="radio"
                    id="devtalks-yes"
                    name="devtalks"
                    value="Yes"
                    className="radio-input"
                    checked={application.will_organize_devtalks}
                    readOnly
                  />
                  <label htmlFor="covid-yes">Yes</label>
                </div>

                <div className="radio-wrapper">
                  <input
                    type="radio"
                    id="vaccinated-no"
                    name="devtalks"
                    value="No"
                    className="radio-input"
                    checked={!application.will_organize_devtalks}
                    readOnly
                  />
                  <label htmlFor="covid-no">No</label>
                </div>
              </div>

              <label htmlFor="devtalk-topic">What would you speak about at Devtalk?</label>
              <textarea
                id="devtalk-topic"
                name="devtalk-topic"
                placeholder="I would..."
                value={application.devtalk_topic}
                rows="3"
                cols="50"
                readOnly
              />

              <label htmlFor="something-special">Tell us something special</label>
              <textarea
                id="something-special"
                name="something-special"
                placeholder="I..."
                value={application.something_special}
                rows="2"
                cols="50"
                readOnly
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Application;
