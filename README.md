# ADN-CarePro

ADN-CarePro is a robust appointment management and registration system designed for hospitals. Built using Next.js and Appwrite, it offers seamless scheduling and efficient management of appointments to enhance the patient care experience.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Libraries and Technologies Used](#libraries-and-technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contact](#contact)

## Introduction

ADN-CarePro is designed to streamline hospital appointment management and registration processes. With an intuitive interface and powerful backend integration, it ensures that both healthcare providers and patients can manage appointments efficiently. The system leverages Next.js for its robust frontend capabilities and Appwrite for backend services, providing a scalable and reliable solution.

## Features

- **Appointment Scheduling**: Easily schedule, reschedule, and cancel appointments.
- **Patient Registration**: Streamlined process for registering new patients.
- **Doctor Management**: Manage doctor schedules and availability.
- **Notification System**: Alerts and reminders for upcoming appointments.
- **Secure Data Handling**: Ensures patient data is handled securely.
- **Responsive Design**: Optimized for various devices and screen sizes.
- **CI/CD with Vercel**: Automated deployments and continuous integration.
- **Customizable Form Builder** : Fully customizable and dynamic form builder for every need. 

## Libraries and Technologies Used

- **Next.js** (`next`): For server-side rendering and static site generation.
- **Appwrite** (`node-appwrite`): Backend as a service for authentication, database, and storage.
- **React** (`react`, `react-dom`): To build the user interface.
- **Zod**: For schema validation.
- **Tailwind CSS**: For styling and responsive design.
- **React Hook Form**: For form validation and management.
- **React Dropzone**: For file uploads.
- **React Datepicker**: For date selection in forms.
- **Libphonenumber-js**: For phone number validation.
- **Lucide React**: For icons.
- **Next Themes**: For theme management.
- **Clsx**: For conditional class names.
- **Class Variance Authority**: For managing class name variance.
- **Tailwind Merge**: For merging Tailwind CSS classes.
- **Tailwind CSS Animate**: For adding animations with Tailwind CSS.
- **Twilio**: For one-time password and confirmation regarding appointment.

## Installation

### Prerequisites

- Node.js v14 or later
- npm
- Appwrite instance

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Ahmednaf03/ADN-CarePro.git
   cd ADN-CarePro

2. **Install Dependencies**:

```bash
npm install

3. **Setup Environment Variables**: Create a .env.local file and add the required environment variables:

NEXT_PUBLIC_APPWRITE_ENDPOINT=https://appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
NEXT_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
NEXT_PUBLIC_APPWRITE_API_KEY=your_api_key
NEXT_PUBLIC_APPWRITE_PATIENT_COLLECTION_ID=your_collection_id
NEXT_PUBLIC_APPWRITE_DOCTOR_COLLECTION_ID=your_collection_id
NEXT_PUBLIC_APPWRITE_APPOINTMENT_COLLECTION_ID=your_collection_id
NEXT_PUBLIC_APPWRITE_BUCKET_ID=your_bucket_id
NEXT_PUBLIC_ADMIN_PASSKEY=your_pass_key
```

Running the Development Server

```bash
npm run dev
Visit http://localhost:3000 to view the application locally.
```
Building for Production

```bash
npm run build
npm run start
```

### Appwrite Configuration

Ensure you have the correct project and database IDs set in your environment variables. Check the Appwrite documentation for more details on setting up your backend services.

### Next.jsConfiguration
Update next.config.js if you have any custom configurations or plugins.

also this runs or --peer-legacy-deps feel free to run it on latest veriosn 
if ran into version mismatch just make sure to add the .npmrc file 


Contact:
For any questions or feedback, feel free to reach out:

GitHub: Ahmednaf03

Email: ahamednafees777@gmail.com