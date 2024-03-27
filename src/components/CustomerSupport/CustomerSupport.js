import React, { useState } from 'react';
import styles from './CustomerSupport.module.scss'; // Import SCSS module
import * as usersService from '../../utilities/users-service';

export const SupportTicketForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [attachments, setAttachments] = useState([]); // State for attachments
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
      attachments.forEach((file, index) => {
        formData.append(`attachment${index + 1}`, file);
      });
  
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

  const handleAttachmentChange = (e) => {
    const files = e.target.files;
    if (files.length > 5) {
      alert('You can only select up to 5 files.');
      e.target.value = null;
    } else {
      console.log('Attachments selected:', files);      
      setAttachments(Array.from(files));
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
            placeholder="Your Message"
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
              onChange={handleAttachmentChange}
              multiple
              disabled={attachments.length >= 5}
              className={styles['attachment-input']}
            />
            <p className={styles['file-limit-message']}>
              You can attach up to 5 files.
            </p>
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
