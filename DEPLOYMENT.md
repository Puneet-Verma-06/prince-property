# Deployment Guide

## EmailJS Setup for Contact Form

To enable the contact form to send emails to **Hautedevelopers2@gmail.com**, follow these steps:

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (supports 200 emails/month)

### 2. Configure Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail**
4. Connect your Gmail account (Hautedevelopers2@gmail.com)

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. **IMPORTANT - Set the "To Email" field:**
   - In the template settings (top section), find the "To email" field
   - Enter: `Hautedevelopers2@gmail.com`
   - This ensures all form submissions come to this Gmail inbox

4. **Set the template content** (Email Body):

```
Subject: New Contact Form Submission from {{from_name}}

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Interested In: {{interested_in}}
Project: {{project}}

Message:
{{message}}

---
Reply to customer at: {{from_email}}
This email was sent from your website contact form.
```

5. **Set "From name"** (optional): `Website Contact Form`
6. **Set "Reply to"**: `{{from_email}}` (so you can reply directly to the customer)
7. Save the template and note the **Template ID**

### 4. Get Your Credentials
- **Service ID**: Found in Email Services section
- **Template ID**: Found in Email Templates section
- **Public Key**: Found in Account > API Keys

### 5. Configure Environment Variables

#### For Local Development:
Edit the `.env` file in the root directory and add your credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

#### For Production Deployment:

**Vercel:**
1. Go to your project settings
2. Navigate to Environment Variables
3. Add these variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

**Netlify:**
1. Go to Site settings > Build & deploy > Environment
2. Add the same three variables

**Other Platforms:**
Add the environment variables in your hosting platform's settings.

### 6. Test the Form
1. Fill out the contact form on your website
2. Submit the form
3. Check Hautedevelopers2@gmail.com for the email
4. Check EmailJS dashboard for delivery status

## Important Notes
- The `.env` file is gitignored for security
- Never commit your actual EmailJS credentials to GitHub
- Free tier allows 200 emails/month
- Emails are sent directly from the browser (no backend needed)

## Troubleshooting
- If emails aren't sending, check the browser console for errors
- Verify your EmailJS credentials are correct
- Ensure the template ID matches exactly
- Check EmailJS dashboard for usage limits
