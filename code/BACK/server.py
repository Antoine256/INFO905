from flask import Flask, request, jsonify
from transformers import pipeline
from flask_cors import CORS  

app = Flask(__name__)
CORS(app)  # <-- Enable CORS for all routes

pipe = pipeline("text-classification", model="Unechevre/flirtyORnot")

@app.route('/classify', methods=['GET'])
def classify_text():
    text = request.args.get('text', '')
    result = pipe(text)
    return jsonify(result)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
