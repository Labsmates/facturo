import nodemailer from 'nodemailer';

// Function to send an email
export const sendEmail = async (to: string, subject: string, text: string) => {
    // Create a transporter object using the SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'your_email@gmail.com', // replace with your email
            pass: 'your_password', // replace with your password
        },
    });

    // Set up email data
    const mailOptions = {
        from: 'your_email@gmail.com', // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
    };

    // Send email
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email: ', error);
    }
};

// Usage example:
// sendEmail('recipient@example.com', 'Subject', 'Email Body');