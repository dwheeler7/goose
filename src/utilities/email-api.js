const nodemailer = require('nodemailer');

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
    // Configure Gmail SMTP
    service: 'gmail',
    auth: {
        user: process.env.GMAIL, // Your Gmail email address
        pass: process.env.GMAILPASS    // Your Gmail password or an app-specific password if 2-Step Verification is enabled
    }
});

// Function to send password reset email with a link
async function sendPasswordResetEmail(email, temporaryPassword, temporaryToken) {
    try {
        // Construct the password reset link
        const resetLink = `http://localhost:3000/reset-password/${temporaryToken}`;

        // Send email
        await transporter.sendMail({
            from: 'codehivemod@gmail.com', // Use the same email address as the transporter configuration
            to: email,
            subject: 'Password Reset',
            html: `
                <p>Hello,</p>
                <p>We received a request to reset your password. Below is your temporary password:</p>
                <p><strong>${temporaryPassword}</strong></p>
                <p>Click the link below to reset your password:</p>
                <a href="${resetLink}">${resetLink}</a>
                <p>If you didn't request this, you can safely ignore this email.</p>
            `
        });
        console.log('Password reset email sent successfully');
    } catch (error) {
        console.error('Error sending password reset email:', error);
        throw error; // Throw error for handling in the calling function if needed
    }
}


// Export email utility functions
module.exports = { sendPasswordResetEmail };
