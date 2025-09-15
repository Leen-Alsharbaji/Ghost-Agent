Project Overview
This project is a full-stack AI-powered chat assistant called Ghost Agent. It allows users to interact with a chat interface, where their messages are processed by a backend that leverages advanced embedding and retrieval techniques to generate intelligent responses.

Tech Stack
Frontend:

Next.js (React framework): For building the user interface and handling routing.
Tailwind CSS: For modern, responsive, and utility-first styling.
TypeScript: For type safety and better developer experience.
Backend:

FastAPI (Python): A high-performance web framework for building RESTful APIs.
ChromaDB: Used for storing and querying document embeddings.
Google Gemini API: For generating embeddings and AI-powered content.
Python-dotenv: For managing environment variables securely.
Other Tools:

CORS Middleware: To allow communication between the frontend (Next.js) and backend (FastAPI) during development.
Uvicorn: ASGI server for running FastAPI.
How It Works
Frontend (Next.js):

Users type messages into a chat interface.
When a message is sent, it is POSTed to the FastAPI backend.
Backend (FastAPI + Python):

Receives the chat message via an API endpoint.
Uses the Gemini API to generate embeddings for the message.
Stores and queries document embeddings using ChromaDB to find relevant context.
Constructs a prompt and uses Gemini to generate a conversational, context-aware response.
Sends the response back to the frontend.
Frontend:

Displays the AI-generated response in the chat interface.
Project Structure
src/pages/index.tsx: Main chat UI (Next.js/React).
embedding.py: Embedding and AI logic (Python).
server.py: FastAPI server exposing the chat API.
public/ and src/styles/: Static assets and global styles (Tailwind CSS).
next.config.ts: Next.js configuration, including allowed development origins.
Key Features
Real-time chat interface.
AI-powered, context-aware responses.
Modern, responsive UI.
Modular backend with scalable embedding and retrieval logic.
Secure API communication between frontend and backend.
Let me know if you want this tailored for a README, a blog post, or a specific platform!

GPT-4.1 • 1x
