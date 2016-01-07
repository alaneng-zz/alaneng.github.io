from flask import Flask, request, jsonify
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

@app.route('/datatable')
def datatable():
  datatable = [
    {
      "name": "Tiger Nixon",
      "position": "System Architect",
      "salary": "$320,800",
      "start_date": "2011/04/25",
      "office": "Edinburgh",
      "extn": "5421"
    },
    {
      "name": "Garrett Winters",
      "position": "Accountant",
      "salary": "$170,750",
      "start_date": "2011/07/25",
      "office": "Tokyo",
      "extn": "8422"
    }
  ]

  # datatable = 'foobar'
  return jsonify(datatable=datatable)

if __name__ == '__main__':
  app.run(debug=True, port=5000)

