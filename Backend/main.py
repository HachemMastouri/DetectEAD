from fastapi import FastAPI, HTTPException, BackgroundTasks
from pydantic import BaseModel
from model_utils import load_model, preprocess_input
import numpy as np
from scapy.all import sniff
from sniffing import packet_sniffing
import time


app = FastAPI()

# Load the model at startup
MODEL_PATH = "my_model.h5"
model = load_model(MODEL_PATH)

#packet sniffing
c=0
while True : 
    sniff(prn=packet_sniffing, count=10)
    time.sleep(20)
    c+=10
    if (c>1000) : 
        break


# Input schema
class PredictionRequest(BaseModel):
    features: list[float]  # List of input features (can be incomplete)

@app.get("/heartbeat")
def heartbeat():
    return {"status": "running", "message": "The FastAPI is active and sniffing packets."}


@app.get("/")
def read_root():
    return {"message": "Welcome to the FastAPI model backend!"}

@app.post("/predict/")
def predict(request: PredictionRequest, background_tasks: BackgroundTasks):
    try:
        background_tasks.add_task(packet_sniffing)
        
        time.sleep(20) 

        # Preprocess the input
        processed_input = preprocess_input(request.features, model)
        
        # Make prediction
        predictions = model.predict(processed_input)
        predictions = predictions.tolist()  # Convert to list for JSON serialization
        
        return {"predictions": predictions}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))