import os
#from datetime import datetime

from io import BytesIO
from PIL import Image

import matplotlib.pyplot as plt
plt.switch_backend('agg')

import matplotlib.patches as patches

from dotenv import load_dotenv, find_dotenv
load_dotenv(find_dotenv())

import boto3


UPLOAD_FOLDER = './static/'

# Fetch variables from the .env file.
username = os.getenv('USERNAME')
password = os.getenv('PASSWORD')
region = os.getenv('REGION')


def detector(photo):
    client=boto3.client('rekognition', region_name=region, aws_access_key_id=username, aws_secret_access_key=password)
    
    with open(photo, 'rb') as image:
        response = client.detect_labels(Image={'Bytes': image.read()}, MaxLabels=100)
        
    labels_all = []
    for label in response['Labels']:
        if label['Confidence'] > 80:
            labels_all.append(label['Name'])
            
    with open(photo, 'rb') as image:        
        img = Image.open(BytesIO(image.read()))

        # Display the image
        plt.imshow(img)
        ax = plt.gca()
 
        # Plot bounding boxes
        for label in response['Labels']:
            for instance in label.get('Instances', []):
                bbox = instance['BoundingBox']
                left = bbox['Left'] * img.width
                top = bbox['Top'] * img.height
                width = bbox['Width'] * img.width
                height = bbox['Height'] * img.height

                rect = patches.Rectangle((left, top), width, height, linewidth=1, edgecolor='r', facecolor='none')
                ax.add_patch(rect)

                label_text = label['Name'] #+ ' (' + str(round(label['Confidence'], 2)) + '%)'
                plt.text(left, top - 2, label_text, color='r', fontsize=8, bbox=dict(facecolor='white', alpha=0.7))
        
    return labels_all
