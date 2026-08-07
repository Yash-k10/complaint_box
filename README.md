# CivicFlow AI-X — Smart Community Redressal Planner
> **CodeRush 2.0 Hackathon | Track 3: Sustainable Development Goals (SDG-01)**  
> **Team Name:** Pragati 2.O  
> **Repository:** [CodeRush-2.0_Pragati-2.O_Community-Redressal-Planner](https://github.com/prathameshmowade/CodeRush-2.0_Pragati-2.O_Community-Redressal-Planner)

---

## 🎯 SDG-01 Problem Statement & Compliance Matrix

**Problem Statement:**  
*Build a multilingual, privacy-aware civic redressal system that turns resident complaints into deduplicated, prioritized, accountable workflows with transparent status, escalation, and measurable service-level outcomes.*

| Requirement ID | Requirement Description | CivicFlow AI-X Implementation | Source Code Link |
| :--- | :--- | :--- | :--- |
| **142. Intake** | Accessible web/voice/SMS intake, multilingual text (EN/HI/MR), image/audio evidence. | Voice speech-to-text, photo upload, auto-geolocation, multilingual UI. | [`CitizenPortal.jsx`](file:///d:/YCCE/CodeRush-2.0_Pragati-2.O_Community-Redressal-Planner/client/src/pages/CitizenPortal.jsx), [`VoiceInput.jsx`](file:///d:/YCCE/CodeRush-2.0_Pragati-2.O_Community-Redressal-Planner/client/src/components/VoiceInput.jsx) |
| **143. Triage & Classifier** | Entity extraction, urgency, confidence scoring, semantic duplicate clustering. | FastAPI Classifier Agent & Similarity Clustering. | [`classification_agent.py`](file:///d:/YCCE/CodeRush-2.0_Pragati-2.O_Community-Redressal-Planner/ai-engine/agents/classification_agent.py), [`duplicate_agent.py`](file:///d:/YCCE/CodeRush-2.0_Pragati-2.O_Community-Redressal-Planner/ai-engine/agents/duplicate_agent.py) |
| **144. Routing Engine** | Department maps, jurisdiction rules, active workload balancing, SLA & escalation. | Autonomous routing agent + load-balanced officer assignment. | [`routing_agent.py`](file:///d:/YCCE/CodeRush-2.0_Pragati-2.O_Community-Redressal-Planner/ai-engine/agents/routing_agent.py), [`sla_agent.py`](file:///d:/YCCE/CodeRush-2.0_Pragati-2.O_Community-Redressal-Planner/ai-engine/agents/sla_agent.py) |
| **145. Resident View** | Reference ID, plain-language status, next step timeline, correction & privacy consent. | 5-Step visual timeline, XAI rationale, correction appeal path. | [`TrackComplaint.jsx`](file:///d:/YCCE/CodeRush-2.0_Pragati-2.O_Community-Redressal-Planner/client/src/pages/TrackComplaint.jsx), [`TrackingTimeline.jsx`](file:///d:/YCCE/CodeRush-2.0_Pragati-2.O_Community-Redressal-Planner/client/src/components/TrackingTimeline.jsx) |
| **146. Operations Dashboard** | Interactive map queue, SLA breach risk, recurring hotspots, cross-dept coordination. | Kanban Operations Dashboard + Resolution Copilot + Ward Heatmap. | [`OfficerDashboard.jsx`](file:///d:/YCCE/CodeRush-2.0_Pragati-2.O_Community-Redressal-Planner/client/src/pages/OfficerDashboard.jsx), [`KanbanBoard.jsx`](file:///d:/YCCE/CodeRush-2.0_Pragati-2.O_Community-Redressal-Planner/client/src/components/KanbanBoard.jsx) |
| **147. Fairness & Governance** | Accessibility checks, human-in-the-loop governance & manual override with reason. | Human Officer Approval / Override flow with XAI explanation. | [`XAIPanel.jsx`](file:///d:/YCCE/CodeRush-2.0_Pragati-2.O_Community-Redressal-Planner/client/src/components/XAIPanel.jsx), [`CitizenTrustScore.jsx`](file:///d:/YCCE/CodeRush-2.0_Pragati-2.O_Community-Redressal-Planner/client/src/components/CitizenTrustScore.jsx) |
| **148. Privacy & Provenance** | Auto-redaction of Aadhaar/Phone PII, anti-doxxing, SHA-256 blockchain audit trail. | Privacy Shield regex filter + SHA-256 Cryptographic Hash Chain. | [`PrivacyShield.jsx`](file:///d:/YCCE/CodeRush-2.0_Pragati-2.O_Community-Redressal-Planner/client/src/components/PrivacyShield.jsx), [`BlockchainAudit.jsx`](file:///d:/YCCE/CodeRush-2.0_Pragati-2.O_Community-Redressal-Planner/client/src/components/BlockchainAudit.jsx) |
| **156-157. Hard-Mode & Fallbacks** | Safe fallbacks for ambiguous location/priority; human review required over silent drop. | Confidence score thresholding (<70% routes to Manual Review queue). | [`routing_agent.py`](file:///d:/YCCE/CodeRush-2.0_Pragati-2.O_Community-Redressal-Planner/ai-engine/agents/routing_agent.py#L20-L40) |

---

## 🌟 Unique Selling Propositions (USPs) Beyond Expectations

1. **Explainable AI (XAI) + Human Governance**: Gives officers transparent confidence scores, rules applied, and similar historical cases before taking action.
2. **AI Resolution Copilot**: Recommends technical repair methods, estimated labor hours, and cost breakdowns directly to field officers.
3. **AI Civic Digital Twin**: Provides dynamic infrastructure status mapping across city wards.
4. **SHA-256 Cryptographic Audit Chain**: Prevents corruption or silent complaint deletion through tamper-evident blockchain logging.

---

## 🏗️ Architecture & Technology Stack

- **Frontend**: React 18 + Vite + Tailwind CSS
- **Backend API**: Node.js + Express.js
- **AI Microservice**: Python FastAPI + Gemini AI + Embeddings
- **Database**: MongoDB / JSON File Store
- **Security & Audit**: SHA-256 Hash Chain + Regex PII Filter

---

## 👥 Pragati 2.O Team Profiles & Contributions

1. **[prathameshmowade](https://github.com/prathameshmowade)** — Team Lead / Full-Stack & System Architecture
2. **[NehaMusale11](https://github.com/NehaMusale11)** — Frontend Lead / React Pages & Workflow
3. **[Yash-k10](https://github.com/Yash-k10)** — AI/ML Lead / FastAPI Agents & Models
4. **[kanchan874](https://github.com/kanchan874)** — Backend Developer / Controllers, SLA & Analytics
5. **[Dhanshree010](https://github.com/Dhanshree010)** — UI/UX Designer / Digital Twin, Documentation & Assets

---

## 🚀 Quick Start Guide

### 1. Backend Server
```bash
cd server
npm install
npm run dev
```

### 2. AI Engine
```bash
cd ai-engine
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

### 3. Frontend Application
```bash
cd client
npm install
npm run dev
```

