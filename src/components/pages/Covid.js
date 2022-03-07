import { useState, useEffect } from 'react';
import Pagination from '../Pagination';
import { useNavigate } from 'react-router-dom';
import '../../styles/covid.css';

function Covid() {
  const [workPlace, setWorkPlace] = useState('');
  const [covidContact, setCovidContact] = useState('');
  const [covidDate, setCovidDate] = useState('');
  const [vaccinated, setVaccinated] = useState('');
  const [vaccineDate, setVaccineDate] = useState('');
  const [showErrors, setShowErrors] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('progress') || localStorage.getItem('progress') < 2) {
      navigate(-1);
    }
    setWorkPlace(localStorage.getItem('workPlace'));
    setCovidContact(localStorage.getItem('covidContact'));
    setVaccinated(localStorage.getItem('vaccinated'));
    setCovidDate(localStorage.getItem('covidDate'));
    setVaccineDate(localStorage.getItem('vaccineDate'));
  }, [navigate]);

  const onNext = function () {
    if (
      workPlace &&
      ((covidContact === 'Yes' && covidDate) || covidContact === 'No') &&
      ((vaccinated === 'Yes' && vaccineDate) || vaccinated === 'No')
    ) {
      navigate('/survey/4');
    } else {
      setShowErrors(true);
    }
  };

  return (
    <div className="container">
      <div className="survey-container">
        <div className="survey-container-main">
          <h2>Covid Stuff</h2>
          <form action="" className="covid-form">
            <label>How would you prefer to work?</label>
            <div className="covid-form-radios">
              <div className="radio-wrapper">
                <input
                  type="radio"
                  id="office"
                  name="work_place"
                  value="From Sairme Office"
                  className="radio-input"
                  onChange={(e) => {
                    localStorage.setItem('workPlace', e.target.value);
                    setWorkPlace(e.target.value);
                  }}
                  checked={workPlace === 'From Sairme Office'}
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
                  onChange={(e) => {
                    localStorage.setItem('workPlace', e.target.value);
                    setWorkPlace(e.target.value);
                  }}
                  checked={workPlace === 'From Home'}
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
                  onChange={(e) => {
                    localStorage.setItem('workPlace', e.target.value);
                    setWorkPlace(e.target.value);
                  }}
                  checked={workPlace === 'Hybrid'}
                />
                <label htmlFor="hybrid">Hybrid</label>
              </div>

              {showErrors && !workPlace && (
                <p className="error-message" style={{ marginTop: '-4px', marginLeft: '10px', marginBottom: '4px' }}>
                  * you should answer this question{' '}
                </p>
              )}
            </div>
            <label>Did you contact covid 19? :(</label>

            <div className="covid-form-radios">
              <div className="radio-wrapper">
                <input
                  type="radio"
                  id="covid-yes"
                  name="covid-contact"
                  value="Yes"
                  className="radio-input"
                  onChange={(e) => {
                    localStorage.setItem('covidContact', e.target.value);
                    setCovidContact(e.target.value);
                  }}
                  checked={covidContact === 'Yes'}
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
                  onChange={(e) => {
                    localStorage.setItem('covidContact', e.target.value);
                    setCovidContact(e.target.value);
                  }}
                  checked={covidContact === 'No'}
                />
                <label htmlFor="covid-no">No</label>
              </div>
            </div>

            {showErrors && !covidContact && (
              <p className="error-message" style={{ marginTop: '-40px', marginLeft: '10px', marginBottom: '40px' }}>
                * you should answer this question{' '}
              </p>
            )}

            {covidContact === 'Yes' && (
              <>
                <label htmlFor="covid-date">When?</label>
                <input
                  type="date"
                  id="covid-date"
                  name="covid-date"
                  value={covidDate}
                  onChange={(e) => {
                    localStorage.setItem('covidDate', e.target.value);
                    setCovidDate(e.target.value);
                  }}
                  min="2019-01-01"
                  max="2022-12-31"
                />
                {showErrors && !covidDate && (
                  <p className="error-message" style={{ marginTop: '-38px', marginBottom: '22px', marginLeft: '10px' }}>
                    * you should answer this question{' '}
                  </p>
                )}
              </>
            )}

            <label>Have you been vaccinated?</label>

            <div className="covid-form-radios">
              <div className="radio-wrapper">
                <input
                  type="radio"
                  id="vaccinated-yes"
                  name="covid-vaccinated"
                  value="Yes"
                  className="radio-input"
                  onChange={(e) => {
                    localStorage.setItem('vaccinated', e.target.value);
                    setVaccinated(e.target.value);
                  }}
                  checked={vaccinated === 'Yes'}
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
                  onChange={(e) => {
                    localStorage.setItem('vaccinated', e.target.value);
                    setVaccinated(e.target.value);
                  }}
                  checked={vaccinated === 'No'}
                />
                <label htmlFor="covid-no">No</label>
              </div>
            </div>

            {showErrors && !vaccinated && (
              <p className="error-message" style={{ marginTop: '-40px', marginLeft: '10px' }}>
                * you should answer this question{' '}
              </p>
            )}

            {vaccinated === 'Yes' && (
              <>
                <label htmlFor="covid-date">When did you get your last covid vaccine?</label>
                <input
                  type="date"
                  id="vaccine-date"
                  name="vaccine-date"
                  value={vaccineDate}
                  onChange={(e) => {
                    localStorage.setItem('vaccineDate', e.target.value);
                    setVaccineDate(e.target.value);
                  }}
                  min="2020-01-01"
                  max="2022-12-31"
                />

                {showErrors && !vaccineDate && (
                  <p className="error-message" style={{ marginTop: '-38px', marginBottom: '22px', marginLeft: '10px' }}>
                    * you should answer this question{' '}
                  </p>
                )}
              </>
            )}
          </form>
        </div>
        <Pagination onNext={onNext} />
      </div>
      <div className="about-container">
        <h2>Redberry Covid Policies</h2>
        <p style={{ width: '51ch' }}>
          As this infamous pandemic took over the world, we adjusted our working practices so that our employees can be
          as safe and comfortable as possible. We have a hybrid work environment, so you can either work from home or
          visit our lovely office on Sairme Street. If it was up to us, we would love you to see us in the office
          because we think face-to-face communications &gt; Zoom meetings. Both on the fun and productivity scales.
        </p>
      </div>
    </div>
  );
}

export default Covid;
