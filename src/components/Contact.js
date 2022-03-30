import React from 'react';
import { useState, useEffect } from 'react';

export default function Contact() {
  // RegExp for validations
  const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
  const validName = new RegExp("^[a-zA-Z,.'-]+$");

  // declaring useState in my variables to look for any incoming changes from user
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  // declaring error messages in my useState if validation fails
  const [errorFirstName, setErrorFirstName] = useState(null);
  const [errorLastName, setErrorLastName] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);

  // submit buttons is disabled unless information is validated.
  const [submitted, setSubmitted] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // prevents multiple renders with any activities of the page that doesn't affect it.
  useEffect(() => {

    // condition that needs to be met before submit buttons becomes available
    if (firstName && lastName && email) {
      setIsButtonDisabled(false);
    }

    // dependencies that the useEffect listens to re-render the page.
  }, [firstName, lastName, email]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation conditions for all my inputs
    setSubmitted(null);
    if (!validName.test(firstName)) {
      setErrorFirstName('Invalid First Name, try again!');
    }
    else if (!validName.test(lastName)) {
      setErrorFirstName(null);
      setErrorLastName('Invalid Last Name, try again!');
    }
    else if (!validEmail.test(email)) {
      setErrorLastName(null);
      setErrorEmail('Invalid Email, try again!');
    }

    // Successful inputs
    else {
      setErrorLastName(null);
      setErrorFirstName(null);
      setErrorEmail(null);
      setComment(null);
      setSubmitted("Thank you! Your information was received and we will reach out to you as soon as possible!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setComment("");
      return
    }
    return
  }

  return (
    <div>
      <form>
        <label htmlFor="first">First name:</label><br />
        <input type="text" id="first" name="first" placeholder="John" value={firstName} onChange={e => setFirstName(e.target.value)} /><br />

        {errorFirstName ? (<div className="red">{errorFirstName}</div>) : null}

        <label htmlFor="last">Last name:</label><br />
        <input type="text" id="last" name="last" placeholder="Doe" value={lastName} onChange={e => setLastName(e.target.value)} /><br />

        {errorLastName ? (<div className="red">{errorLastName}</div>) : null}

        <label htmlFor="email">E-mail:</label><br />
        <input type="email" id="email" name="email" placeholder="JohnDoe@gmail.com" value={email} onChange={e => setEmail(e.target.value)} /><br />

        {errorEmail ? (<div className="red">{errorEmail}</div>) : null}

        <label htmlFor="comments">Comments:</label><br />
        <textarea type="text" name="comments" id="comments" placeholder="Leave any questions or comments here..." value={comment} onChange={e => setComment(e.target.value)}></textarea> <br />

        {submitted ? (<div className="red">{submitted}</div>) : null}

        <button disabled={isButtonDisabled} onClick={handleSubmit} formAction="#">Submit</button>

      </form>

    </div>
  );
}