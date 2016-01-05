from flask import Flask
import pdb

app = Flask(__name__)

@app.route('/')
def main():
  return app.send_static_file('index.html')

@app.route('/bundle.js')
def index():
  return app.send_static_file('bundle.js')

@app.route('/bootstrap.min.css')
def bootstrap():
  return app.send_static_file('bootstrap.min.css')


if __name__ == '__main__':
  app.run(debug=True, port=5000)

