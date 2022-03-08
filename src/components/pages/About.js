import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from '../Pagination';
import '../../styles/about.css';

function About() {
  const [devtalks, setDevtalks] = useState('');
  const [devtalkTopic, setDevtalkTopic] = useState('');
  const [somethingSpecial, setSomethingSpecial] = useState('');
  const [showErrors, setShowErrors] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('progress') || localStorage.getItem('progress') < 3) {
      navigate(-1);
    }

    setDevtalks(localStorage.getItem('devtalks'));
    setDevtalkTopic(localStorage.getItem('devtalkTopic'));
    setSomethingSpecial(localStorage.getItem('somethingSpecial'));
  }, [navigate]);

  const onNext = function () {
    if (devtalks && devtalkTopic && somethingSpecial) {
      localStorage.setItem('progress', 4);
      navigate('/survey/submit');
    } else {
      setShowErrors(true);
    }
  };
  return (
    <div className="container">
      <div className="survey-container">
        <div className="survey-container-main">
          <h2>What about you?</h2>
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
                  onChange={(e) => {
                    localStorage.setItem('devtalks', e.target.value);
                    setDevtalks(e.target.value);
                  }}
                  checked={devtalks === 'Yes'}
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
                  onChange={(e) => {
                    localStorage.setItem('devtalks', e.target.value);
                    setDevtalks(e.target.value);
                  }}
                  checked={devtalks === 'No'}
                />
                <label htmlFor="covid-no">No</label>
              </div>
            </div>

            {showErrors && !devtalks && (
              <p className="error-message" style={{ marginTop: '-38px', marginLeft: '10px', marginBottom: '25px' }}>
                * you should answer this question{' '}
              </p>
            )}

            <label htmlFor="devtalk-topic">What would you speak about at Devtalk?</label>
            <textarea
              id="devtalk-topic"
              name="devtalk-topic"
              placeholder="I would..."
              value={devtalkTopic || ''}
              onChange={(e) => {
                localStorage.setItem('devtalkTopic', e.target.value);
                setDevtalkTopic(e.target.value);
              }}
              rows="3"
              cols="50"
            />

            {showErrors && !devtalkTopic && (
              <p className="error-message" style={{ marginTop: '-38px', marginLeft: '10px', marginBottom: '25px' }}>
                * you should answer this question{' '}
              </p>
            )}

            <label htmlFor="something-special">Tell us something special</label>
            <textarea
              id="something-special"
              name="something-special"
              placeholder="I..."
              value={somethingSpecial || ''}
              onChange={(e) => {
                localStorage.setItem('somethingSpecial', e.target.value);
                setSomethingSpecial(e.target.value);
              }}
              rows="2"
              cols="50"
            />

            {showErrors && !somethingSpecial && (
              <p className="error-message" style={{ marginTop: '-38px', marginLeft: '10px', marginBottom: '25px' }}>
                * you should answer this question{' '}
              </p>
            )}
          </form>
        </div>
        <Pagination onNext={onNext} />
      </div>
      <div className="about-container">
        <h2>Redberrian Insights</h2>
        <p style={{ width: '51ch' }}>
          We were soo much fun before the pandemic started! Parties almost every weekend and lavish employee birthday
          celebrations! Unfortunately, covid ruined that fun like it did almost everything else in the world. But we try
          our best to zhuzh it up a bit. For example, we host biweekly Devtalks where our senior and lead developers
          talk about topics they are passionate about. Previous topics have included Web3, NFT, Laravel 9, Kubernetes,
          etc. We hold these talks in the office but you can join our Zoom broadcast as well. Feel free to join either
          as an attendee or a speaker!
        </p>
      </div>
    </div>
  );
}

export default About;
