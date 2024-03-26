import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownRenderer = ({ source }) => {
    return (
        <div className="markdown-container">
            <ReactMarkdown>{source}</ReactMarkdown>
        </div>
    );
};

export default MarkdownRenderer;
