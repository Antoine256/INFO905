# Flirty or Not Application

## Group
**Group Name:** Flirtyboys

**Members:**
- Enzo Marchal
- Tom Voituret
- Yvann Uzelac
- Antoine Dupasquier

## Launching the Application

### Backend Setup
1. Navigate to `code/BACK` and run:
    ```bash
    pip install -r requirements.txt
    ```
2. Start the server:
    ```bash
    python3 server.py
    ```

### Frontend Setup
1. Navigate to `code/UI` and run:

    If Angular is not installed:
    ```bash
    npm install -g @angular/cli@17
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    ng serve
    ```

### Training the Model
1. Navigate to `code/TRAIN/Model` and run the necessary commands to train the model.


### Model Training Details
- Number of epochs trained: 5
- CUDA: Enabled
- Model: BERT
- Loss rate: 0.3
- Accuracy: 0.82

The application should be accessible at [http://localhost:4200/](http://localhost:4200/)


### huggingface links for the dataset and the model :

dataset : https://huggingface.co/datasets/TaumeV/flirty_or_not_IA_extended

model : https://huggingface.co/Unechevre/flirtyORnot
