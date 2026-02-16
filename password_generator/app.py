import hashlib
import string
import random

from flask import Flask, render_template, request

app = Flask(__name__)


def generate_password(user_password):
    hashed = hashlib.sha256(user_password.encode()).hexdigest()
    characters = string.ascii_letters + string.digits + "!@#$%^&*"

    strong_password = ""
    for i in range(16):
        index = int(hashed[i : i + 2], 16) % len(characters)
        strong_password += characters[index]

    return strong_password


def generate_random_password():
    characters = string.ascii_letters + string.digits + "!@#$%^&*"
    return "".join(random.choice(characters) for _ in range(16))


@app.route("/", methods=["GET", "POST"])
def home():
    strong_password = ""

    if request.method == "POST":
        if "random" in request.form:
            strong_password = generate_random_password()
        else:
            user_input = request.form["password"]
            strong_password = generate_password(user_input)

    return render_template("index.html", strong_password=strong_password)


if __name__ == "__main__":
    app.run()
