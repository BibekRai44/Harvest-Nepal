import pickle
import numpy as np
from flask import Flask, request, jsonify, render_template

app = Flask(__name__, static_folder="static")
model = pickle.load(open("Project/RandomForest.pkl", "rb"))

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

@app.route("/crop-prediction", methods=["POST"])
def crop_prediction():
    if request.method == "POST":
        # Get the input values from the form
        nitrogen = int(request.form["nitrogen"])
        phosphorous = int(request.form["phosphorous"])
        potassium = int(request.form["potassium"])
        temperature = int(request.form["temperature"])
        humidity = int(request.form["humidity"])
        rainfall = int(request.form["rainfall"])
        ph_value = int(request.form["ph_value"])

        # Prepare the input data as a numpy array
        input_data = np.array([[nitrogen, phosphorous, potassium, temperature, humidity, rainfall, ph_value]])

        # Perform crop prediction using the loaded model
        crop_prediction = model.predict(input_data)
        crop_name = crop_prediction[0]

        # Return the result as a JSON response
        return jsonify({"prediction_text": crop_name})

    # Handle GET request if required
    return render_template("crop.html")

if __name__ == "__main__":
    app.run()