const nodemailer = require('nodemailer');

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
    // Configure Gmail SMTP
    service: 'gmail',
    auth: {
        user: process.env.GMAIL, // add to your .env file
        pass: process.env.GMAILPASS    // enable a app security pass in your gmail of the email ^ above you're using, NOT your actual password put it in your .env.
    }
});

function getRandomNameWithLink(names) {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

const nameLinks = {
    'William Kostreski': 'http://example.com/william',
    'Juan Zelaya': 'http://example.com/juan',
    'Tyler Pierson': 'http://example.com/tyler',
    'Bryce Sexton': 'http://example.com/bryce',
    'Isaiah Branstetter': 'http://example.com/isaiah',
    'Danny Wheeler': 'http://example.com/danny',
    'Jalen Smith': 'http://example.com/jalen',
    'Jeremy Casanova': 'http://example.com/jeremy'
};

// Function to send password reset email with a link
async function sendPasswordResetEmail(email, temporaryPassword, temporaryToken) {
    try {
        // Construct the password reset link
        const resetLink = `http://localhost:3000/reset-password/${temporaryToken}`;
        
        const randomName = getRandomNameWithLink(Object.keys(nameLinks));
        const randomNameLink = nameLinks[randomName];

        // Send email
        await transporter.sendMail({
            from: 'codehivemod@gmail.com', 
            to: email,
            subject: 'Password Reset',
            html: `
                <p><strong>CodeHive</strong></p>
                <br>
                <p>Hello,</p>
                <p>We received a request to reset your password. Below is your temporary password:</p>
                <p><strong>${temporaryPassword}</strong></p>
                <p>Click the link below to reset your password:</p>
                <a href="${resetLink}">${resetLink}</a>
                <p>If you didn't request this, you can safely ignore this email.</p>
                <br>
                <p>Please note that for security reasons, this temporary password will expire in a short period of time.</p>
                <br>
                <p>Thank you,</p>
                <p><a href="${randomNameLink}">${randomName}</a>,</p>
                <p>CodeHive Support</p>
            `
        });
        console.log('Password reset email sent successfully');
    } catch (error) {
        console.error('Error sending password reset email:', error);
        throw error; 
    }
}

// Export email utility functions
module.exports = { sendPasswordResetEmail };
