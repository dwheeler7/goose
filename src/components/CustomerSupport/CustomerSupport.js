import React, { useState } from 'react';
import styles from './CustomerSupport.module.scss'; // Import SCSS module
import * as usersService from '../../utilities/users-service';

export const SupportTicketForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [attachment, setAttachment] = useState(null); // State for attachment
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
  
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);
      formData.append('attachment', attachment);
  
      console.log('Form data:', formData);
  
      // Call customerSupportRequest function from usersService and pass formData
      await usersService.customerSupportRequest(formData);
      setSubmitted(true); // Update submitted state if submission successful
    } catch (error) {
      console.error('Error submitting support ticket:', error);
      setError(error.message || 'Failed to submit support ticket, invalid email 👎');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles['support-ticket-form']}>
      {submitted ? (
        <p className={styles['success-message']}>Support ticket submitted successfully! 👍</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={styles['input-field']}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles['input-field']}
          />
          <textarea
            placeholder="Your Message (You can paste images here)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className={styles['textarea-field']}
          ></textarea>
          <div>
            <label htmlFor="attachment">Attach Image:</label>
            <input
              type="file"
              id="attachment"
              accept=".jpg, .jpeg, .png"
              onChange={(e) => {
                console.log('Attachment selected:', e.target.files[0]); // Log the selected attachment
                setAttachment(e.target.files[0]);
              }}
              multiple
            />
          </div>
          <button type="submit" disabled={submitting} className={styles['submit-button']}>
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
          {error && <p className={styles['error-message']}>{error} ❌👎👎👎</p>}
        </form>
      )}
    </div>
  );
};
