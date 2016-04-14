import os
import imghdr
import datetime
import pdb
import json
import numpy as np
import csv
import pandas as pd

from sqlalchemy.sql import text
from collections import OrderedDict
from itertools import compress
from flask import Flask, render_template, request, redirect, session, send_from_directory, jsonify, make_response, send_file, Response

app = Flask(__name__, static_folder='static')

@app.route('/', methods=['GET'])            
def index(): 
  return send_from_directory(app.static_folder, 'index.html')

@app.route('/bundle.js')
@app.route('/bootstrap.min.css')
def bundle():
  return send_from_directory(app.static_folder, request.path[1:])

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=9000)







