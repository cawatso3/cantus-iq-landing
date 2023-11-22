import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add your submit logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Comments:', comments);
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.title}>Contact Us!</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="comments" style={styles.label}>
              Comments:
            </label>
            <textarea
              id="comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              style={styles.textarea}
              required
            />
          </div>
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#000041',
  },
  box: {
    width: 'auto',
    padding: '40px',
    backgroundColor: 'white',
    borderRadius: '4px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: '0px',
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
    fontSize: '14px',
    color: 'black',
    fontFamily: 'Lato'
  },
  input: {
    padding: '10px',
    border: '1px solid #000041',
    borderRadius: '4px',
    fontSize: '16px',
    color: '#FF7518',
    width: '100%',
  },
  textarea: {
    padding: '10px',
    border: '1px solid #000041',
    borderRadius: '4px',
    fontSize: '16px',
    color: 'black',
    width: '100%',
    resize: 'vertical',
    fontFamily: 'Lato'
  },
  button: {
    backgroundColor: '#000041',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '9999px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    width: '100%',
  },
};

export default ContactForm;
