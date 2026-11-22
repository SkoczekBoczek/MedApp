# MedApp - Healthcare Management Dashboard

[![Tests](https://github.com/SkoczekBoczek/MedApp/actions/workflows/test.yml/badge.svg)](https://github.com/SkoczekBoczek/MedApp/actions/workflows/test.yml)

A full-stack medical management application built with Next.js and React, providing a comprehensive platform for patients to manage their healthcare information, appointments, medications, and communications with doctors.

## Project Overview

MedApp is a healthcare management system designed to help patients organize their medical life efficiently. It combines an intuitive frontend interface with robust backend APIs to deliver a seamless healthcare management experience.

## Demo Accounts

You can test the application using pre-configured accounts (or register a new one):

- **Patient Role:** `pacjent@medapp.pl` / `Pacjent123!`
- **Doctor Role:** `lekarz@medapp.pl` / `Lekarz123!`

## Features

### Authentication

- **User Registration**: Secure account creation for new users
- **User Login**: Secure login system with JWT tokens
- **Session Management**: Persistent user sessions using JWT tokens and local storage

### User Management

- **Settings Modal**: Change user name and preferences
- **Real-time Updates**: Instant synchronization across dashboard components

### Medication Management

- **Medication Scheduling**: Add and organize medications by day and time
- **Drug Database**: Browse and select from a comprehensive drug database
- **Schedule Tracking**: View medication schedules for each day of the week
- **Medication Details**: Detailed information about selected medications

### Appointments & Events

- **Calendar Integration**: Interactive calendar for viewing and managing medical events
- **Event Creation**: Add new medical appointments with date and time
- **Event Management**: Organize and track upcoming medical appointments

### Doctor Communications

- **Doctor Directory**: Browse available healthcare providers
- **Direct Messaging**: Real-time messaging system with doctors
- **Contact Management**: Save and organize favorite doctor contacts

### Dashboard

- **Welcome Screen**: Personalized greeting with real-time date/time display
- **Quick Access**: Fast navigation to all features via responsive sidebar
- **Mobile-Optimized**: Fully responsive design with sticky navigation on mobile

## Getting Started

### Prerequisites

- Node.js 22+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/SkoczekBoczek/MedApp.git
cd MedApp
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Testing

The project includes unit and integration tests powered by **Vitest**, **React Testing Library**, and **jsdom**, executed automatically on every push and pull request via GitHub Actions.

```bash
# Run all tests once
npm test

# Run tests in watch mode
npm run test:watch
```

**Covered modules:**

- `AuthForm` – client-side validation (`useActionState`), API/network error handling, role-based login via `AuthContext`, and `<dialog>` imperative controls
- `AuthContext` – session persistence across reloads (including `isDoctor` role restoration) and `localStorage` cleanup on logout
- `MedicationsSection` – weekly plan synchronization (`/api/plan`), adding medications with chronological sorting, duplicate prevention, taken toggle, and deletion
- `ContactCard` – unauthenticated/loading states, speciality filtering, pagination (buttons & touch gestures), doctor vs patient views, and `ChatContext` integration

## Project Structure

```
app/
├── api/                          # Backend API routes
│   ├── auth/                     # Authentication API
│   │   ├── login/                # Login endpoint
│   │   └── register/             # Registration endpoint
│   ├── conversations/            # Messaging API
│   ├── doctors/                  # Doctor data API
│   ├── drugs/                    # Medication database API
│   ├── events/                   # Calendar events API
│   └── plan/                     # Medication schedule API
│
├── components/                   # Reusable React components
│   ├── AuthModal/                # Authentication forms
│   ├── SideBar/                  # Navigation sidebar
│   ├── WelcomeCard/              # Welcome dashboard & settings
│   ├── CalendarCard/             # Calendar & event management
│   ├── ContactCard/              # Doctor directory & messaging
│   ├── MedicationsSection/       # Medication management
│   └── AlertPopup/               # Alert notifications
│
├── context/                      # React Context providers
│   ├── AuthContext.js            # Authentication state
│   └── ChatContext.js            # Chat and messaging state
│
├── styles/                       # Global styling
│   ├── main.css                  # Main styles
│   └── variables.css             # CSS variables & theme
│
├── layout.js                     # Root layout component
├── page.js                       # Home page
└── globals.css                   # Global CSS

lib/                              # Utility libraries
├── auth.js                       # Authentication utilities
├── authMiddleware.js             # Authentication middleware
└── mongodb.js                    # Database connection
```

## Technologies Used

### Frontend

- **Next.js 16**
- **React 19**
- **CSS Modules**
- **Lucide React** - Icon library
- **react-big-calendar** - Calendar component
- **@tanstack/react-virtual** - Virtual scrolling for performance

### Backend & Database

- **Node.js**
- **MongoDB**
- **JWT**

### Testing & CI

- **Vitest** & **jsdom**
- **React Testing Library** & **@testing-library/user-event**
- **GitHub Actions** - Automated test runs on push & pull requests

## Key Components

### AuthModal

Authentication component featuring:

- Login and registration forms
- JWT token handling
- User session management

### SideBar

Main navigation component with:

- Profile settings access
- Doctor messaging
- Medication management
- Fixed positioning on mobile devices

### MedicationsSection

Comprehensive medication management with:

- Day-based medication scheduling
- Drug selection from database
- Medication details display
- Add/remove medications

### CalendarCard

Event management featuring:

- Interactive calendar view
- Event creation modal
- Event listing and management

### ContactCard & MessagesMenu

Doctor communication system:

- Doctor directory browsing
- Real-time messaging interface
- Contact information display

## State Management

The application uses React Context API for global state management:

- **AuthContext**: Manages user authentication state and session data
- **ChatContext**: Handles messaging and conversation state

Additionally:

- React hooks (useState, useEffect) for component-level state
- localStorage for persistent user data
- Event listeners for cross-component synchronization

## Responsive Design

- **Desktop**: Full-featured layout with sidebar navigation
- **Tablet**: Optimized touch interface
- **Mobile**: Hamburger menu, sticky sidebar at top, touch-friendly buttons

## License

This project is open source and available under the MIT License.
