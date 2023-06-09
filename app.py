from flask import Flask, render_template

app = Flask(__name__, static_folder="static")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/about-us")
def about_us():
    return render_template("about-us.html")

@app.route("/crop")
def crop():
    return render_template("crop.html")

@app.route("/fertilizer")
def fertilizer():
    return render_template("fertilizer.html")


if __name__ == "__main__":
    app.run()
