import mimetypes
import os
from flask import Flask, send_file
from flask import request, jsonify
import cv2
import numpy as np
from ultralytics import YOLO
import matplotlib.pyplot as plt
import math
from flask import Flask, request
from flask_restful import Api, Resource
from flask import Flask, jsonify
from flask_cors import CORS
from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
import cv2
import numpy as np
from ultralytics import YOLO
import matplotlib.pyplot as plt
import math

app = Flask(__name__)
api = Api(app)
CORS(app)  # Enable CORS for all routes
imgname = "vid.mp4"
original_image = cv2.imread(imgname)
app = Flask(__name__)


data = [
 
]

@app.route('/fet', methods=['GET', 'POST'])
@cross_origin(origin="http://localhost:3000")
def fet():
    print("POST eshtagal")
    images_directory = ''
    image_path = os.path.join(images_directory, imgname)
    mimetype, _ = mimetypes.guess_type(image_path)
    return send_file(image_path, mimetype=mimetype)
   
   
   
@app.route('/testapi', methods=['GET'])
@cross_origin(origin="http://localhost:3000")
def po():
 image_path = os.path.join('', imgname)
 return jsonify({
  "dirs":[image_path]
 })
 
 
# @app.route('/upload', methods=['POST'])
# @cross_origin(origin="http://localhost:3000")
# def upload_image():
    
#     if len(request.files) == 0:
#         return {'message': 'File not found'}, 404 

#     f = request.files['image']
#     print(type(f))
#     try:
#         f.save(os.path.join('/', "filename"))
#     except Exception as e:
#         return {'message': '##########'}, 200  
#     print(f)
#     return {'message': 'File uploaded successfully'}, 200

@app.route('/upload', methods=['POST'])
@cross_origin(origin="http://localhost:3000")
def upload_image():
    # Check if the POST request has the file part


    file = request.files['image']

    # Check if a file is selected
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    try:
        # Save the file in the root directory
        file.save(os.path.join('', file.filename))
        return jsonify({'message': 'File uploaded successfully'}), 200
    except Exception as e:
        return jsonify({'error': f'Failed to save file - {str(e)}'}), 500

 





if __name__ == '__main__':
    app.run(port=80, debug=True)
    
    
    
    