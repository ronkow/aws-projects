from flask import Flask
from flask import request
from flask import redirect
from flask import url_for
from flask import render_template

import os
from datetime import datetime
from io import BytesIO

import base64
from PIL import Image
from werkzeug.utils import secure_filename

from detector import detector

app = Flask(__name__)

DIR_UPLOAD = 'static'
ALLOWED = ('png','jpg','jpeg','gif')

def allowed_file(filename):
    if '.' in filename and filename.rsplit('.',1)[1].lower() in ALLOWED:
        return True
    else:
        return False

@app.route('/')
def f1():
    return render_template('upload.html')


@app.route('/', methods=['POST'])
def f2():    
    
    if 'file' not in request.files:
        #flash('')
        return redirect(request.url)

    file = request.files['file']

    if file.filename == '':
        return redirect(request.url)

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)

        date1 = datetime.now().strftime("%Y%m%d")
        time1 = datetime.now().strftime("%H%M%S")
        filename = date1 + '_' + time1 + '_' + filename #'.png'
        
        file.save(os.path.join(DIR_UPLOAD, filename))

        filename1, labels = detector(os.path.join(DIR_UPLOAD, filename))

        img = Image.open(file.stream)
        if img.width > 360:
            flag = True
        else:
            flag = False

        with BytesIO() as buf:
            img.save(buf, 'png')
            image_bytes = buf.getvalue()
        encoded_string = base64.b64encode(image_bytes).decode()
       
        return render_template('upload.html', filename=filename, filename1=filename1, objects=labels, img_data=encoded_string, flag=flag)
    else:
        return redirect(request.url)

if __name__ == '__main__':
    app.run(debug=False)
