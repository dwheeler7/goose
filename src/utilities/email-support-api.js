const nodemailer = require('nodemailer');

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
    // Configure Gmail SMTP
    service: 'gmail',
    auth: {
        user: process.env.GMAIL, // add to your .env file
        pass: process.env.GMAILPASS    // enable an app security pass in your Gmail of the email ^ above you're using, NOT your actual password put it in your .env.
    }
});

function getRandomNameWithLink(names) {
    const randomIndex = Math.floor(Math.random() * names.length);
    return { name: names[randomIndex], link: nameLinks[names[randomIndex]] };
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

// Function to generate a random alphanumeric string (ticket number)
function generateTicketNumber() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 6; // Adjust the length of the ticket number as needed
    let ticketNumber = 'TICKET-';
    for (let i = 0; i < length; i++) {
        ticketNumber += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return ticketNumber;
}

// Function to send support ticket email with a link
async function sendSupportTicketEmail(name, email, message) {
    try {
        const { name: randomName, link: randomNameLink } = getRandomNameWithLink(Object.keys(nameLinks));
        const ticketNumber = generateTicketNumber(); // Call generateTicketNumber function to get the ticket number

        // Send email to support team
        await transporter.sendMail({
            from: 'codehivemod@gmail.com',
            to: 'codehivemod@gmail.com', // Update this with your valid support email address
            subject: `New Support Ticket (${ticketNumber}) Assigned to ${randomName}`,
            html: `
                <p><strong>Assigned Support:</strong> <a href="${randomNameLink}">${randomName}</a></p>
                <br>
                <p><strong>CodeHive Support</strong></p>
                <br>
                <p>Hello,</p>
                <p>A new support ticket (${ticketNumber}) has been submitted:</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
                <br>
                <p>Please review and respond as necessary.</p>
                <br>
                <p>CodeHive Support</p>
            `
        });

        // Send email to user who generated the ticket
        await transporter.sendMail({
            from: 'codehivemod@gmail.com',
            to: email,
            subject: `Your Support Ticket: ${ticketNumber} , Your Support ${randomName}`,
            html: `
                <p><strong>Assigned Support:</strong> <a href="${randomNameLink}">${randomName}</a></p>
                <br>
                <p><strong>CodeHive Support</strong></p>
                <br>
                <p>Hello ${name},</p>
                <p><strong>Your support ticket (${ticketNumber}) has been received</strong></p>
                <p>Please wait for further communication from our support team.</p>
                <br>
                <p>Thank you for reaching out,</p>
                <p>CodeHive Support</p>
            `
        });

        console.log('Support ticket emails sent successfully');
    } catch (error) {
        console.error('Error sending support ticket emails:', error);
        throw error;
    }
}
// Export email utility function
module.exports = { sendSupportTicketEmail };
