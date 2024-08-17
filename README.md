# Table of Contents

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Quick Start](#quick-start)

## Introduction

Welcome to the **live-docs** project. Coded along this [video](https://youtu.be/y5vE8y_f_OM?si=5Cm9rrSCuB_u2sC_) to learn more about Nextjs. This tool allows multiple users to collaborate in real-time on documents, with robust features like authentication, document management, commenting, notifications, and more. The application is built using modern web technologies, ensuring a responsive and smooth user experience across all devices.

## Tech Stack

This project is built using the following technologies:

- **Next.js**: The React framework for production.
- **TypeScript**: Type-safe JavaScript for better developer experience.
- **Liveblocks**: Real-time collaboration features.
- **Lexical Editor**: Rich text editor framework.
- **ShadCN**: Utility-first CSS framework.
- **Tailwind CSS**: Highly customizable, low-level CSS framework.

## Features

Here's a breakdown of the key features of this application:

- **Authentication**: Secure user sign-in and session management with GitHub via NextAuth.
- **Collaborative Text Editor**: Real-time editing with multiple users.
- **Documents Management**:
  - Create, delete, share, and list documents with ease.
  - Share documents via email or link with customizable permissions.
  - Search and sort through documents efficiently.
- **Comments**: Inline and general comments with threading support.
- **Active Collaborators**: Display real-time presence indicators for active collaborators.
- **Notifications**: Get notified about document shares, new comments, and collaborator activities.
- **Responsive Design**: Optimized for all devices.
- **And many more**: Including code architecture for reusability and scalability.

## Quick Start

Follow these instructions to set up and run the project locally on your machine.

### Prerequisites

Ensure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

### Cloning the Repository

````bash
git clone https://github.com/AgurSan/live-docs.git
cd live-docs

**Installation**

Install the project dependencies using npm:

```bash
npm install
````

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
#Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

#Liveblocks
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=
LIVEBLOCKS_SECRET_KEY=
```

Replace the placeholder values with your actual Clerk & LiveBlocks credentials. You can obtain these credentials by signing up on the [Clerk](https://clerk.com/) and [Liveblocks](liveblocks.io/) website.

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
