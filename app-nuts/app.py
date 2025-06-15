from flask import Flask
from flask import render_template

import os
from dotenv import load_dotenv
from dotenv import find_dotenv

load_dotenv(find_dotenv())

# Fetch variables from the .env file.
username = os.getenv('USERNAME')
password = os.getenv('PASSWORD')
region = os.getenv('REGION')
account_id = os.getenv('ACCOUNT_ID')
dashboard_id = os.getenv('DASHBOARD_ID')


import boto3

def get_embed_url():
    client_quicksight = boto3.client('quicksight', 
                                     region_name=region, 
                                     aws_access_key_id=username, 
                                     aws_secret_access_key=password)

    response = client_quicksight.get_dashboard_embed_url(AwsAccountId = account_id,
                                                         DashboardId = dashboard_id,
                                                         IdentityType = 'IAM')
    return response['EmbedUrl']


app = Flask(__name__)

@app.route('/')

def show_dashboard():
    embed_url = get_embed_url()
    return render_template('dashboard.html', embed_url=embed_url)


if __name__ == "__main__":
   app.run(debug=False, host='0.0.0.0')