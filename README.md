# AI Itinerary Agent

A modern, AI-powered travel itinerary generator built with Next.js, TypeScript, and Tailwind CSS frontend, connected to a Node.js backend using Ollama/Llama3 for intelligent travel planning.

## ✨ Features

- **AI-Powered Planning**: Uses Llama3 via Ollama to generate personalized travel itineraries
- **Modern UI**: Beautiful, responsive interface built with Next.js and Tailwind CSS
- **Preference-Based**: Customizable travel preferences (adventure, culture, food, etc.)
- **Interactive Design**: Smooth animations and transitions using Framer Motion
- **Export & Share**: Download itineraries as Markdown files and share with others
- **Real-time Loading**: Beautiful loading states and progress indicators
- **Responsive**: Fully responsive design that works on all devices

## 🚀 Tech Stack

### Frontend
- **Next.js 15** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons
- **React Hot Toast** - Elegant notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Ollama** - Local AI model serving
- **Llama3** - Large language model for itinerary generation

## 📋 Prerequisites

Before running this application, make sure you have:

1. **Node.js** (v18 or higher)
2. **npm** or **yarn**
3. **Ollama** installed on your system
4. **Llama3 model** pulled in Ollama

### Installing Ollama and Llama3

1. Install Ollama from [https://ollama.ai](https://ollama.ai)
2. Pull the Llama3 model:
   ```bash
   ollama pull llama3:latest
   ```
3. Verify installation:
   ```bash
   ollama list
   ```

## 🛠️ Installation & Setup

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd Itinerary_agent
```

### 2. Backend Setup
```bash
cd backend
npm install
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

## 🏃‍♀️ Running the Application

### 1. Start Ollama (if not already running)
```bash
ollama serve
```

### 2. Start the Backend Server
```bash
cd backend
node index.js
```
The backend will run on `http://localhost:5000`

### 3. Start the Frontend Development Server
```bash
cd frontend
npm run dev
```
The frontend will run on `http://localhost:3000`

### 4. Open your browser
Navigate to `http://localhost:3000` to use the application

## 🎯 Usage

1. **Enter Destination**: Type your desired travel destination
2. **Select Duration**: Choose how many days you want to travel (1-14 days)
3. **Choose Preferences**: Select your travel interests from options like:
   - 🏔️ Adventure
   - 🏛️ Culture
   - 🍽️ Food & Dining
   - 🌿 Nature
   - 📚 History
   - 🌃 Nightlife
   - And more...
4. **Generate Itinerary**: Click the button and wait for AI to create your plan
5. **Review & Export**: View your personalized itinerary and download/share it

## 📁 Project Structure

```
Itinerary_agent/
├── backend/
│   ├── index.js          # Express server with API endpoints
│   ├── package.json      # Backend dependencies
│   └── test-ollama.js    # Ollama connection test
├── frontend/
│   ├── app/
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Main application page
│   │   └── globals.css   # Global styles
│   ├── components/
│   │   ├── ui/           # Reusable UI components
│   │   ├── ItineraryForm.tsx
│   │   └── ItineraryDisplay.tsx
│   ├── lib/
│   │   ├── api.ts        # API integration
│   │   └── utils.ts      # Utility functions
│   ├── types/
│   │   └── index.ts      # TypeScript type definitions
│   └── package.json      # Frontend dependencies
└── README.md
```

## 🔧 Configuration

### Environment Variables

Create `.env.local` in the frontend directory:
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Backend Configuration

The backend connects to Ollama on `http://localhost:11434` by default. Modify `backend/index.js` if your Ollama instance runs on a different port.

## 🐛 Troubleshooting

### Common Issues

1. **"Failed to generate itinerary"**
   - Ensure Ollama is running: `ollama serve`
   - Check if Llama3 model is available: `ollama list`
   - Verify backend is running on port 5000

2. **Frontend connection errors**
   - Check if backend is running
   - Verify the API URL in `.env.local`
   - Check browser console for detailed error messages

3. **Styling issues**
   - Clear browser cache
   - Restart the development server
   - Check if all npm packages are installed

## 🚀 Production Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
```

### Backend (Railway/Heroku)
- Deploy the backend folder
- Set environment variables for Ollama URL
- Ensure Ollama is accessible from your deployed backend

## 🎨 Customization

### Adding New Travel Preferences
Edit `frontend/lib/utils.ts` and add to the `travelPreferences` array:
```typescript
{ id: 'new-pref', label: 'New Preference', icon: '🎯' }
```

### Styling Changes
Modify components using Tailwind CSS classes or edit `frontend/app/globals.css` for global styles.

### AI Model Configuration
Change the model or parameters in `backend/index.js`:
```javascript
const response = await axios.post("http://localhost:11434/api/generate", {
  model: "your-model:tag",
  // ... other parameters
});
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you encounter any issues or have questions, please:
1. Check the troubleshooting section
2. Search existing issues
3. Create a new issue with detailed information

---

**Made with ❤️ using Next.js, TypeScript, and Tailwind CSS**