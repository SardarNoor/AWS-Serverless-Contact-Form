# AWS Serverless Contact Form

Developed a fully serverless contact form hosted on Amazon S3, using API Gateway, AWS Lambda, and DynamoDB for backend storage, and integrated Amazon SES for email notifications. Implemented CORS configurations, API security, and error handling.

## Technologies Used
- AWS S3 (Static Website Hosting)
- AWS API Gateway (API Management)
- AWS Lambda (Serverless Backend)
- AWS DynamoDB (NoSQL Database)
- AWS SES (Email Service)
- HTML, CSS, JavaScript

## Live Demo
[S3 Hosted Website Link](http://projectcontactform.s3-website-us-east-1.amazonaws.com/)

## Features
- Contact form with name, email, and message fields
- Data stored securely in DynamoDB
- Email notification sent via SES
- Fully serverless architecture
- Deployed using AWS Free Tier

## How it works
- Form data is sent to API Gateway
- API Gateway triggers Lambda
- Lambda stores data in DynamoDB and sends an email through SES
- Form shows success or error messages accordingly
  Added professional README.md

