'use server'

import nodemailer from 'nodemailer'

type ContactFormData = {
    name: string
    company: string
    email: string
    message: string
}

export async function sendContactEmail(formData: ContactFormData) {
    const { name, company, email, message } = formData

    // Validate environment variables
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.error('Missing SMTP configuration. Please check your .env file.')
        return { success: false, error: 'Server configuration error' }
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
        connectionTimeout: 5000, // 5 seconds
        socketTimeout: 5000, // 5 seconds
    })

    // Email content
    const mailOptions = {
        from: process.env.SMTP_FROM || '"Flatscouts Website" <noreply@flatscouts.ch>',
        to: 'MAURIN@flatscouts.ch',
        subject: `Neue Kontaktanfrage von ${name}`,
        text: `
      Neue Kontaktanfrage:
      
      Name: ${name}
      Firma: ${company}
      Email: ${email}
      
      Nachricht:
      ${message}
    `,
        html: `
      <h2>Neue Kontaktanfrage</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Firma:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <br/>
      <p><strong>Nachricht:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
    }

    try {
        // Verify connection configuration
        // await transporter.verify()

        // Send email
        const info = await transporter.sendMail(mailOptions)
        console.log('Message sent: %s', info.messageId)
        return { success: true }
    } catch (error) {
        console.error('Error sending email:', error)
        return { success: false, error: 'Failed to send email' }
    }
}
