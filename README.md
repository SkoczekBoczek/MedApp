# MedCare - Next.js Medical Dashboard

A modern medical dashboard application built with Next.js, featuring a responsive design and intuitive user interface for healthcare management.

## Features

- **Dashboard Overview**: Welcome screen with real-time date and time
- **Calendar Integration**: View upcoming medical appointments
- **Doctor Directory**: Browse and contact healthcare providers
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── SideBar.js      # Navigation sidebar
│   ├── WelcomeCard.js  # Welcome dashboard card
│   ├── CalendarCard.js # Calendar widget
│   └── ContactCard.js  # Doctor contact cards
├── styles/             # Global styles and CSS variables
├── layout.js           # Root layout component
└── page.js            # Home page component
```

## Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **CSS Modules** - Component-scoped styling
- **Font Awesome** - Icon library
- **Next.js Image** - Optimized image loading

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.