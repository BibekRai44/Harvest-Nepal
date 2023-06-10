import pickle
import numpy as np
from flask import Flask, request, jsonify, render_template

app = Flask(__name__, static_folder="static")
model = pickle.load(open("RandomForest.pkl", "rb"))

@app.route("/")
def home():
    return render_template("index.html")

@app.route('/')
def index():
    return render_template('index.html')

@app.route("/about-us")
def about_us():
    return render_template("about-us.html")

@app.route("/crop")
def crop():
    return render_template("crop.html")


@app.route("/fertilizer")
def fertilizer():
    return render_template("fertilizer.html")

@app.route("/crop_prediction", methods=["POST"])
def crop_prediction():
    if request.method == "POST":
        
        nitrogen = int(request.form["nitrogen"])
        phosphorous = int(request.form["phosphorous"])
        potassium = int(request.form["potassium"])
        temperature = int(request.form["temperature"])
        humidity = int(request.form["humidity"])
        rainfall = int(request.form["rainfall"])
        ph_value = int(request.form["ph value"])

        
        input_data = np.array([[nitrogen, phosphorous, potassium, temperature, humidity, rainfall, ph_value]])

        
        crop_prediction = model.predict(input_data)
        crop_name = crop_prediction[0]

        
        return ({"prediction_text": crop_name})

  
    return render_template("crop.html")

if __name__ == "__main__":
    app.run()