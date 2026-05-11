
 # GYM-ELITE-EDGE-FITNESS-FINAL-REVIEW-
# Enterprise SOC & AI Threat Intelligence Platform

## Project Overview

This project is a real-time AI-powered Security Operations Center (SOC) dashboard developed to detect, monitor, classify, and visualize cyber attacks on a simulated enterprise infrastructure. The platform integrates machine learning, real-time event streaming, attack visualization, and AI-based threat analysis into a unified monitoring system.

The project simulates attacks on a Zerodha-inspired target application and processes attack telemetry through a real-time AI detection pipeline. The dashboard continuously receives attack events, performs machine learning-based classification, and visualizes threats through live charts, attack feeds, and a global attack map.

---

## Features

- Real-time attack monitoring and streaming
- AI-powered cyber attack classification
- Multi-model machine learning architecture
- Live dashboard with animated cyber defense UI
- Global attack map visualization
- Real-time Socket.IO communication
- SSE-based attack event ingestion
- Threat level monitoring
- Live attack analytics and charts
- Gemini AI threat analysis integration

---

## Supported Attack Types

1. Brute Force Attack
2. DoS / DDoS Attack
3. SQL Injection
4. Cross Site Scripting (XSS)
5. Port Scanning
6. API Abuse
7. Phishing Attack

---

## System Architecture

The architecture consists of four major layers:

### 1. Target Application Layer
A Zerodha-inspired web application used to simulate real-world cyber attacks.

### 2. SOC Backend Layer
An Express.js + Socket.IO backend that receives attack telemetry through Server Sent Events (SSE), processes attack data, and communicates with the machine learning service.

### 3. AI/ML Layer
A FastAPI-based machine learning service built using Python and scikit-learn. The service classifies attacks using trained ML models.

### 4. Frontend Dashboard Layer
A React.js based SOC dashboard that visualizes attack events, AI predictions, global attack locations, and threat analytics in real time.

---

## Machine Learning Architecture

The project uses a modular AI architecture with multiple ML models.

### Network Attack Model
Detects:
- Brute Force
- DoS / DDoS
- Port Scanning
- API Abuse

### Web Attack Model
Detects:
- SQL Injection
- Cross Site Scripting (XSS)

### Phishing Detection Model
Detects:
- Phishing attacks

The backend combines predictions from all models to generate a unified AI-powered threat classification system.

---

## Technologies Used

### Frontend
- React.js
- Tailwind CSS
- Recharts
- React Leaflet
- Socket.IO Client

### Backend
- Node.js
- Express.js
- Socket.IO
- SSE (Server Sent Events)

### AI / ML
- Python
- FastAPI
- scikit-learn
- RandomForestClassifier
- GradientBoostingClassifier

### Database
- MongoDB

---

## Real-Time Event Flow

1. Cyber attack is triggered on the target application.
2. The target backend generates attack telemetry.
3. Events are streamed using Server Sent Events (SSE).
4. SOC backend receives the events.
5. Backend extracts features and sends them to the ML service.
6. ML service predicts the attack type.
7. Backend attaches AI predictions to the event.
8. Events are broadcast to the React dashboard using Socket.IO.
9. Dashboard updates in real time with attack analytics and AI predictions.

---

## Dashboard Modules

### Live Feed
Displays:
- Attack type
- Source IP
- Risk level
- AI prediction
- Real-time alerts

### Threat Level Monitor
Displays live system threat status with animated alerts.

### Attack Donut Chart
Visualizes attack distribution statistics.

### World Attack Map
Displays attack origins on a live global map.

### Gemini AI Panel
Provides AI-generated explanations and cyber threat analysis.

---

## Machine Learning Workflow

### Step 1 — Dataset Generation
Synthetic and real attack telemetry are used to generate a balanced training dataset containing:
- Request count
- Failed login attempts
- Payload size
- Port number
- Endpoint hit frequency
- Risk level

### Step 2 — Model Training
Separate ML models are trained for:
- Network attacks
- Web attacks
- Phishing detection

### Step 3 — Real-Time Prediction
Incoming attack events are converted into ML features and classified in real time.

---

## Project Structure

soc-dashboard/
│
├── backend/
│   ├── routes/
│   ├── services/
│   ├── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│
├── ml-service/
│   ├── models/
│   ├── training/
│   ├── utils/
│   ├── main.py

---

## Installation and Setup

### Backend Setup

npm install
node server.js

### Frontend Setup

npm install
npm run dev

### ML Service Setup

pip install fastapi uvicorn pandas scikit-learn joblib

python -m uvicorn main:app --reload --port 5000

---

## Future Enhancements

- Deep learning-based anomaly detection
- Automated attack mitigation
- Threat intelligence integration
- SIEM integration
- Cloud deployment
- AI explainability dashboard
- Real-time alert notifications

---

## Key Highlights

- Real-time AI-powered SOC platform
- Multi-model cyber attack detection
- Live event streaming pipeline
- Interactive dashboard visualization
- Global attack monitoring
- Machine learning integration
- Enterprise-style architecture
- Real-time cyber threat intelligence

---

## Developed By

Kushith Shetty

Electronics & Telecommunication Engineering (EXTC)

Major Project — Enterprise SOC & AI Threat Intelligence Platform
