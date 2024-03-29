import { useState } from 'react';
// import './App.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation here
    if (!name || !email || !subject || !message) {
        setError('Please fill in all fields.');
        return;
      }
    // Make API request to send email
    fetch('/api/send-email', { name, email, subject, message })
      .then(() => {
        setIsSent(true);
        setError('');
      })
      .catch((setError) => {
        setIsSent(false);
        setError('Error sending email. Please try again later.');
      });
  };

  return (
    <div className='contact-conatiner'>
      <h1 className='contact-title'>Contact Me</h1>
      {isSent && <p>Email sent successfully!</p>}
      {error && <p>{error}</p>}
      <form  className="form" onSubmit={handleSubmit}>
        name:<input 
        type="text" 
        value={name} 
        onChange={handleNameChange} 
        placeholder="Name" 
        required />
        email:<input 
        type="email" 
        value={email} 
        onChange={handleEmailChange} 
        placeholder="Email" 
        required />
        subject:<input 
        type="text" 
        value={subject} 
        onChange={handleSubjectChange} 
        placeholder="Subject" 
        required />
        message:<textarea 
        value={message} 
        onChange={handleMessageChange} 
        placeholder="Message" 
        required />
        <button type="submit">
            Send Email
            </button>
      </form>
    </div>
  );
};

export default Contact;