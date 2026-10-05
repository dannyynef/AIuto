# AIuto

AIuto is an AI-powered business consulting platform in early development, designed to help small businesses identify practical opportunities to use artificial intelligence and automation.

## Project Idea

Small businesses often want to adopt AI but struggle to identify where it will provide value. AIuto aims to analyze business operations, recommend useful AI workflows, and eventually help owners implement those workflows and measure their results.

## Current Features

- React frontend with a business consultation form collecting industry and business description.
- Express backend with a consultation API.
- Working frontend-to-backend flow: the frontend submits business information to `POST /api/consultation`, and the backend returns a confirmation and the submitted information for display.

## Planned Features

- AI-generated structured business analysis and opportunity recommendations.
- Interactive follow-up questions tailored to each business.
- ROI estimates to help prioritize opportunities.
- Business document analysis using retrieval-augmented generation (RAG).
- AI agents and tool calling.
- Integrations with business software.
- Assistance implementing AI-powered workflows.
- Results and ROI tracking.

## Tech Stack

| Area | Current technologies |
| --- | --- |
| Frontend | React, Vite, JavaScript |
| Backend | Node.js, Express |

Planned technologies include PostgreSQL, LLM APIs, RAG and embeddings, and business software integrations.

## Project Status

AIuto is in early development. The consultation form and API communication are working; AI analysis is planned and has not yet been implemented. The next milestone is collecting enough business context to generate structured, practical recommendations.

## Running Locally

Install Node.js and npm, then start the backend and frontend in separate terminals from the repository root.

### Backend

```bash
cd backend
npm install
node server.js
```

The backend runs at `http://localhost:3000`. Open `http://localhost:3000/api/test` to check that it responds.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Open the local URL printed by Vite. Keep the backend running when submitting the consultation form; the frontend currently sends requests to `http://localhost:3000/api/consultation`.
