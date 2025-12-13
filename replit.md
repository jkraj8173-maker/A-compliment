# Compliment Site for Aradhya

A cute interactive Next.js application that displays personalized compliments with animated screens, GIFs, music, and a fun cuteness meter - made with love by Jeet.

## Overview

This is a single-page React application built with:
- **Next.js 16** - React framework with App Router
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Features

- **Music Permission Popup** - Asks to play music when website loads
- **Intro Screen** - Welcoming animation with waving GIF
- **Pre-Cuteness Screen** - Building anticipation
- **Cuteness Meter** - Fun measuring instrument that goes over 200% and "bursts"
- **Balloon Pop Screen** - Cute colorful balloons that reveal "You are a Cutiee" when popped
- **Compliments Screen** - Displays sweet compliments in animated tap-to-reveal cards
- **Message Screen** - Beautiful typewriter effect letter with floating hearts
- **Thank You Screen** - Heartfelt closing message with animations
- **Background Music** - With mute/unmute button at top right
- **Cute Watermark** - "made with ♥ by jeet" in bottom right

## Project Structure

```
src/
├── app/
│   ├── page.jsx        # Main entry point with screen navigation
│   ├── layout.js       # Root layout with watermark
│   ├── globals.css     # Global styles
│   └── favicon.ico
├── components/
│   ├── MusicPlayer.jsx # Audio player with permission popup
│   └── screens/
│       ├── IntroScreen.jsx
│       ├── PreCutenessScreen.jsx
│       ├── CutenessScreen.jsx
│       ├── BalloonScreen.jsx    # Balloon pop game
│       ├── ComplimentsScreen.jsx
│       ├── MessageScreen.jsx
│       └── FinalScreen.jsx      # Thank you screen
public/
├── gifs/
│   ├── cute.gif
│   └── waving.gif
└── music.mp3
```

## Running the Application

The app runs on port 5000 in development mode:

```bash
npm run dev -- -p 5000 -H 0.0.0.0
```

## Deployment

The app is configured for autoscale deployment with:
- Build: `npm run build`
- Start: `npm run start -- -p 5000 -H 0.0.0.0`
