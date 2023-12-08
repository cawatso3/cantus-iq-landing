// pages/api/send-email.js
import AWS from 'aws-sdk';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Configure AWS SES
    AWS.config.update({
      region: 'us-east-1', // e.g., 'us-west-2'
    });

    const ses = new AWS.SES({apiVersion: '2010-12-01'});

    const { name, email, comments } = req.body;

    const params = {
      Source: 'contact@cantusiq.com',
      Destination: {
        ToAddresses: ['contact@cantusiq.com']
      },
      Message: {
        Subject: { Data: 'New Contact Form Submission' },
        Body: { Text: { Data: `Name: ${name}\nEmail: ${email}\nComments: ${comments}` }}
      }
    };

    try {
      await ses.sendEmail(params).promise();
      res.status(200).json({ message: 'Email sent' });
    } catch (error) {
      console.error('SES email send error:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
