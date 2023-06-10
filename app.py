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
        features = [int(x) for x in request.form.values()]
        print(features)
        input_data = [np.array(features)]
        
        crop_prediction = model.predict(input_data)
        crop_name = crop_prediction[0]
        return render_template("crop.html", prediction_text = "The crop you should harvest is {}".format(crop_name))

        
   

if __name__ == "__main__":
    app.run(debug=True)