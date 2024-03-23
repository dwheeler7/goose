import React, { useState } from 'react';
import styles from './CustomerSupport.module.scss'; // Import SCSS module
import * as usersService from '../../utilities/users-service';

export const SupportTicketForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Call the customerSupportRequest function from usersService
      await usersService.customerSupportRequest(name, email, message);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting support ticket:', error);
      // Handle error
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles['support-ticket-form']}>
      {submitted ? (
        <p className={styles['success-message']}>Support ticket submitted successfully!</p>
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
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className={styles['textarea-field']}
          ></textarea>
          <button type="submit" disabled={submitting} className={styles['submit-button']}>
            {submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      )}
    </div>
  );
};
