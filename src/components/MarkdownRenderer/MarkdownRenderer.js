import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './MarkdownRenderer.module.scss'; // Import the SCSS file

const MarkdownRenderer = ({ source }) => {
    return (        
        <div className={styles.markdownContainer}> {/* Use the styles imported from SCSS */}
            <ReactMarkdown>{source}</ReactMarkdown>
        </div>
    );
};

export default MarkdownRenderer