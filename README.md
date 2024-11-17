
# Dashboard Project with React, Recoil and Responsive Layout

A Vite-powered React project featuring a responsive layout with a left and right sidebar, dynamic dark/light theme management, and a horizontal scroll for the main content. Recoil is used for global state management, particularly for theme and sidebar states.

## Table of Contents

1. [Setup](#setup)
2. [Running Locally](#running-locally)
3. [Design Decisions](#design-decisions)
4. [Design Decisions](#design-decisions) 
5. [Deployed Version](#routes)

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/niveshnagar/juspay-assignment.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

## Running Locally

Ensure you have [Node.js](https://nodejs.org/) installed. After cloning the repository and installing dependencies, use `npm run dev` to start the app locally at [http://localhost:3000](http://localhost:3000).

## Design Decisions

- **Recoil for State Management**: Used Recoil to manage global state for the theme (light/dark) and sidebar visibility. The `themeAtom` controls theme switching, and the `appSidebarAtom` tracks whether the sidebar is open or closed.


## Routes
- **Dashboard**: Mounted on the root route -> `/`.
- **Order List** Page: Mounted on the route-> `/orderlist`.

## Deployed Version

View the live version here:

- [Deployed Version on Vercel](https://y-mocha-one.vercel.app/)

---