# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a web-based quiz application for Legal Medicine (Medicina Legal) educational content. The application uses 8 numbered modules covering different topics in Legal Medicine.

## Architecture

The application follows a modular client-side architecture with no backend dependencies:

- **Frontend**: Vanilla JavaScript with Bootstrap 5 for UI
- **Data Storage**: Browser localStorage for user progress persistence
- **Question Data**: JSON files for each module/topic
- **Styling**: Custom CSS with Bootstrap framework

### Core Files Structure

- `index.html` - Single-page application entry point with all screens
- `js/config.js` - Centralized configuration (modules, titles, storage keys)
- `js/data.js` - Data management layer (localStorage, question loading, progress tracking)
- `js/app.js` - Application logic (UI state, quiz flow, timer, scoring)
- `css/styles.css` - Custom styles extending Bootstrap
- `1-introducao.json` through `8-asfixiologia.json` - Question data files for each module

### Key Features

- Multi-module quiz system with progress tracking
- User authentication (username-based, no passwords)
- LocalStorage persistence for user progress and session data
- Timer functionality with formatted display
- Detailed performance analytics and progress visualization
- Bootstrap-responsive design

## Development Commands

This is a static web application with no build process. To develop:

```bash
# Serve locally (any static server)
python -m http.server 8000
# or
npx serve .
# or open index.html directly in browser
```

## Configuration

### Adding New Modules

1. Create a new JSON file with questions following the schema:
```json
[
  {
    "question": "Question text",
    "options": ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
    "correctIndex": 0,
    "explanation": "Explanation text",
    "type": "conteudista" | "raciocínio"
  }
]
```

2. Add module to `js/config.js`:
```javascript
modules: [
  {
    id: "unique_id",
    name: "Display Name",
    file: "filename_without_extension"
  }
]
```

### Customization Points

- `quizConfig.title` - Application title
- `quizConfig.storageKey` - localStorage namespace (change to avoid conflicts)
- `quizConfig.modules` - Available quiz modules
- CSS color scheme in `css/styles.css`

## Data Management

The application uses a sophisticated localStorage-based system:

- **User Data**: Username and session tracking
- **Progress Tracking**: Per-question statistics (seen, correct, incorrect counts)
- **Module Progress**: Calculated completion percentages
- **Auto-save**: Every 10 seconds and on page unload

Progress is calculated based on questions answered correctly at least once, not total attempts.

## Question Flow

Questions are presented in the exact order defined in JSON files (no shuffling). Each question tracks:
- View count
- Correct answer count
- Incorrect answer count
- Last seen timestamp

## Deployment

Static hosting compatible - can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static web host

No server-side processing required.