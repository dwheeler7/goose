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

// Function to generate a random alphanumeric string (ticket number)
function generateTicketNumber() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 10; 
    let ticketNumber = 'TICKET-';
    for (let i = 0; i < length; i++) {
        ticketNumber += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return ticketNumber;
}

// Function to get a random name with its link
function getRandomNameWithLink(names) {
    const randomIndex = Math.floor(Math.random() * names.length);
    return { name: names[randomIndex], link: nameLinks[names[randomIndex]] };
}

// Name links object
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

// Function to send support ticket email with a link
async function sendSupportTicketEmail(name, email, message, attachment) {
    try {
        const ticketNumber = generateTicketNumber();
        const attachments = []; // Array to hold attachments

        // Get random name and link
        const { name: randomName, link: randomNameLink } = getRandomNameWithLink(Object.keys(nameLinks));

        // Check if an attachment exists
        if (attachment) {
            // Add attachment to attachments array
            attachments.push({
                filename: attachment.originalname, // Set the filename to the original name of the attachment
                content: attachment.buffer, // Set the content to the buffer of the attachment
            });
        }
        // Send email to support team with attachments
        await transporter.sendMail({
            from: 'codehivemod@gmail.com',
            to: 'codehivemod@gmail.com',
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
            `,
            attachments: attachments,
        });

        // Send email to user who generated the ticket with attachments
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
                <p><strong>Tickets message:</strong> ${message}</p>
                <p>Please wait for further communication from our support team.</p>
                <br>
                <p>Thank you for reaching out,</p>
                <p>CodeHive Support</p>
            `,
            attachments: attachments,
        });

        console.log('Support ticket emails with attachments sent successfully');
    } catch (error) {
        console.error('Error sending support ticket emails:', error);
        throw error;
    }
}

// Export email utility function
module.exports = { sendSupportTicketEmail };
