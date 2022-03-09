import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/submit.css';

function Submit() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('progress') || localStorage.getItem('progress') < 4) {
      navigate(-1);
    }
  }, []);

  const onSubmitSurvey = async function () {
    const skills = [];
    for (let skill of JSON.parse(localStorage.getItem('skills'))) {
      const { id, experience } = skill;
      skills.push({ id, experience });
    }

    const work_place = localStorage.getItem('workPlace');
    let work_preference = '';
    if (work_place === 'From home') {
      work_preference = 'from_home';
    } else if (work_place === 'From sairme office') {
      work_preference = 'from_office';
    } else {
      work_preference = 'hybrid';
    }

    const application = {
      token: '62245d3f-023a-4139-b3f4-13140f74bea3',
      first_name: localStorage.getItem('firstName'),
      last_name: localStorage.getItem('lastName'),
      email: localStorage.getItem('email'),
      work_preference,
      skills,
      had_covid: localStorage.getItem('covidContact') === 'Yes' ? true : false,
      vaccinated: localStorage.getItem('vaccinated') === 'Yes' ? true : false,
      will_organize_devtalk: localStorage.getItem('devtalks') === 'Yes' ? true : false,
      devtalk_topic: localStorage.getItem('devtalkTopic'),
      something_special: localStorage.getItem('somethingSpecial'),
    };

    // add not required input values
    if (localStorage.getItem('phoneNumber')) {
      application.phone = localStorage.getItem('phoneNumber');
    }

    if (localStorage.getItem('covidContact') && localStorage.getItem('covidContact') === 'Yes') {
      application.had_covid_at = localStorage.getItem('covidDate');
    }

    if (localStorage.getItem('vaccinated') && localStorage.getItem('vaccinated') === 'Yes') {
      application.vaccinated_at = localStorage.getItem('vaccineDate');
    }

    // send post request
    await fetch('https://bootcamp-2022.devtest.ge/api/application', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(application),
    });

    localStorage.setItem('progress', 5);
    navigate('/thanks');
  };

  return (
    <div className="submit-container">
      <button className="btn" onClick={onSubmitSurvey}>
        Submit
      </button>
      <a href="/survey/4">Go back</a>
    </div>
  );
}

export default Submit;
