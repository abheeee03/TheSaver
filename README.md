# Saver - Firebase + React Blog

A modern blog application built with React and Firebase.

## Features
- Create and view blog posts
- Real-time updates with Firebase
- Responsive design
- Dark mode support

## Tech Stack
- React
- Firebase (Firestore)
- Vite
- TailwindCSS
- React Router

## Development
1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Create a `.env` file with your Firebase configuration:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```
4. Run development server:
```bash
npm run dev
```

## Deployment on Vercel
1. Push your code to GitHub
2. Create a new project on Vercel
3. Import your GitHub repository
4. Add Environment Variables in Vercel project settings
5. Deploy!

## Build
```bash
npm run build
```

## Preview Production Build
```bash
npm run preview
```