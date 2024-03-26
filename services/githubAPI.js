const { Octokit } = require('@octokit/rest');

// Create a new instance of Octokit with your GitHub personal access token
const octokit = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN });

// Function to fetch README content from GitHub repository
async function fetchReadmeContent(owner, repo) {
    try {
        const { data } = await octokit.repos.getReadme({
            owner,
            repo
        });
        // README content is Base64 encoded, so decode it
        const readmeContent = Buffer.from(data.content, 'base64').toString('utf-8');
        return readmeContent;
    } catch (error) {
        console.error('Error fetching README content:', error);
        throw new Error('Failed to fetch README content');
    }
}

module.exports = { fetchReadmeContent }