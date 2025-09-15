# Ghost Agent 🤖

A full-stack, AI-powered chat assistant that leverages advanced embedding and retrieval techniques to generate intelligent, context-aware responses. Built with a modern Next.js frontend and a high-performance FastAPI backend.

![Ghost Agent Interface](https://github.com/user-attachments/assets/ad91f439-43e5-46ec-9c3c-77177361899a)

## ✨ Features

- **AI-Powered Conversations**: Utilizes Google's Gemini API for intelligent response generation.
- **Context-Aware Responses**: Employs vector embedding retrieval (RAG) via ChromaDB to provide relevant answers.
- **Modern & Responsive UI**: Built with Next.js and Tailwind CSS for a seamless experience on any device.
- **Type Safety**: Full TypeScript integration on the frontend for robust development.
- **Modular Backend**: A scalable and well-structured FastAPI server with clear separation of concerns.
- **Secure API Communication**: Configured with CORS and environment variables for safe frontend-backend interaction.

## 🛠️ Tech Stack

### Frontend
- **Next.js** (React framework) - UI and routing
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety

### Backend
- **FastAPI** (Python) - RESTful API server
- **ChromaDB** - Vector store for document embeddings
- **Google Gemini API** - For generating embeddings and AI content
- **Python-dotenv** - Environment variable management
- **Uvicorn** - ASGI server

## 🚀 How It Works

### Frontend (Next.js)
1. The user interacts with a chat interface built in React.
2. Upon sending a message, the frontend sends a `POST` request to the `/chat` endpoint on the FastAPI backend.

### Backend (FastAPI + Python)
1. The backend receives the user's message.
2. It generates an embedding for the message using the Gemini API.
3. This embedding is used to query a ChromaDB collection to find the most relevant context from stored documents.
4. A prompt is constructed combining the user's query and the retrieved context.
5. The prompt is sent to the Gemini API to generate a final, conversational response.
6. The generated response is sent back to the frontend.

### Frontend
1. The response is received and displayed in the chat interface for the user.


