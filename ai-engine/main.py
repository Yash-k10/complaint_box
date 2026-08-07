from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI(title='CivicFlow AI Engine')
app.add_middleware(CORSMiddleware, allow_origins=['*'], allow_methods=['*'], allow_headers=['*'])
@app.get('/health')
def health(): return {'status': 'ok'}
@app.post('/analyze')
def analyze(data: dict): return {'category': 'Road Damage', 'urgency': 'High', 'department': 'DEPT_ROAD', 'confidenceScore': 94}
@app.post('/redact')
def redact(data: dict): return {'redactedText': data.get('text',''), 'piiDetected': []}
@app.post('/copilot')
def copilot(data: dict): return {'repairMethod': 'Hot-mix asphalt patching', 'estimatedCost': '18500', 'estimatedTime': '6 hours'}
