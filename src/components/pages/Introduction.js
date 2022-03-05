import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from '../Pagination';

function Introduction() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState({ firstName: '', lastName: '', email: '', phoneNumber: '' });

  const navigate = useNavigate();

  useEffect(() => {
    setFirstName(localStorage.getItem('firstName'));
    setLastName(localStorage.getItem('lastName'));
    setEmail(localStorage.getItem('email'));
    setPhoneNumber(localStorage.getItem('phoneNumber'));
  }, []);

  const onFirstNameChange = function (e) {
    setFirstName(e.target.value);
    localStorage.setItem('firstName', e.target.value);
  };

  const onLastNameChange = function (e) {
    setLastName(e.target.value);
    localStorage.setItem('lastName', e.target.value);
  };

  const onEmailChange = function (e) {
    setEmail(e.target.value);
    localStorage.setItem('email', e.target.value);
  };

  const onPhoneNumberChange = function (e) {
    setPhoneNumber(e.target.value);
    localStorage.setItem('phoneNumber', e.target.value);
  };

  // On pagination next button press
  const onSubmit = function () {
    let errors = { firstName: '', lastName: '', email: '', phoneNumber: '' };

    // First Name validation
    if (!firstName) {
      errors.firstName = 'first name is required';
    } else if (firstName.length <= 1) {
      errors.firstName = 'first name should include 2 or more characters';
    }

    // Last Name validation
    if (!lastName) {
      errors.lastName = 'last name is required';
    } else if (lastName.length <= 2) {
      errors.lastName = 'last name should include 3 or more characters';
    }

    // Email validation
    if (!email) {
      errors.email = 'e mail is required';
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(email)) {
      errors.email = 'you should enter a valid email address';
    }

    // Mobile number
    if (phoneNumber && phoneNumber.substr(0, 4) !== '+995') {
      errors.phoneNumber = 'number should start width +995';
    } else if (phoneNumber.length > 13) {
      errors.phoneNumber = 'phone number is too long';
    } else if (phoneNumber.length < 13) {
      errors.phoneNumber = 'phone number is too short';
    }

    setErrorMessage(errors);

    if (!errors.firstName && !errors.lastName && !errors.email && !errors.phoneNumber) {
      localStorage.setItem('progress', 1);
      navigate('/survey/2');
    } else {
      localStorage.setItem('progress', '');
      return;
    }
  };

  return (
    <div className="container">
      <div className="survey-container">
        <div className="survey-container-main">
          <h2>Hey, Rocketeer, what are your coordinates?</h2>
          <form action="">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => onFirstNameChange(e)}
              style={errorMessage.firstName ? { border: '1px solid #FE3B1F' } : {}}
            />
            {errorMessage.firstName && <p className="error-message">* {errorMessage.firstName}</p>}
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => onLastNameChange(e)}
              style={errorMessage.lastName ? { border: '1px solid #FE3B1F' } : {}}
            />
            {errorMessage.lastName && <p className="error-message">* {errorMessage.lastName}</p>}
            <input
              type="email"
              placeholder="E Mail"
              value={email}
              onChange={(e) => onEmailChange(e)}
              style={errorMessage.email ? { border: '1px solid #FE3B1F' } : {}}
            />
            {errorMessage.email && <p className="error-message">* {errorMessage.email}</p>}
            <input
              type="tel"
              placeholder="+995 5__ __ __ __"
              value={phoneNumber}
              onChange={(e) => onPhoneNumberChange(e)}
              style={errorMessage.phoneNumber ? { border: '1px solid #FE3B1F' } : {}}
            />
            {errorMessage.phoneNumber && <p className="error-message">* {errorMessage.phoneNumber}</p>}
          </form>
        </div>
        <Pagination onSubmit={onSubmit} />
      </div>
      <div className="about-container">
        <h2>Redberry Origins</h2>
        <p>
          You watch “What? Where? When?” Yeah. Our founders used to play it. That’s where they got a question about a
          famous American author and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the exact name and
          he answered Ray Redberry. And at that moment, a name for a yet to be born company was inspired - Redberry 😇
        </p>
      </div>
    </div>
  );
}

export default Introduction;
