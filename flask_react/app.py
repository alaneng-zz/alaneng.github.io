from flask import Flask, request
import pdb

app = Flask(__name__)

@app.route('/')
def main():
  return app.send_static_file('index.html')

@app.route('/bundle.js')
@app.route('/bootstrap.min.css')
@app.route('/application.css')
def index():
  return app.send_static_file(request.path[1:])

if __name__ == '__main__':
  app.run(debug=True, port=5000)

