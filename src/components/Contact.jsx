import { useState } from 'react';

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
    <div>
      <h1>Contact</h1>
      {isSent && <p>Email sent successfully!</p>}
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleNameChange} placeholder="Name" required />
        <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" required />
        <input type="text" value={subject} onChange={handleSubjectChange} placeholder="Subject" required />
        <textarea value={message} onChange={handleMessageChange} placeholder="Message" required />
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
};

export default Contact;