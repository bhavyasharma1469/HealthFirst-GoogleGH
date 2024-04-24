from flask import Flask, jsonify
import subprocess

app = Flask(__name__)

@app.route('/run-app')
def run_app():
    result = subprocess.run(['python', 'app.py'], capture_output=True)
    output = result.stdout.decode('utf-8')
    return jsonify({'output': output})

if __name__ == '__main__':
    app.run(debug=True)
