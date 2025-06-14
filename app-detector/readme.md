A Flask photo app deployed in AWS using
- Rekognition
- Lightsail
- Route 53

This app detects the objects in the photo you upload: 
[https://detector.ronkow.com](https://detector.ronkow.com) 

AWS tutorial:  
[https://aws.amazon.com/tutorials/deploy-webapp-lightsail/](https://aws.amazon.com/tutorials/deploy-webapp-lightsail/) 

Create Docker image:  
`docker build -t image-name .`
`docker images`

Run in localhost:  
`docker run -p 5000:5000 image-name:latest`

Using AWS CLI:   
Push image to Amazon Lightsail.  
`aws lightsail push-container-image --region <region-name> --service-name <container-service-name> --label <container-label> --image <image-name>:<image-tag>`

Deploy in container service:  
`aws lightsail create-container-service-deployment --region <region-name> --cli-input-json file://lc.json`

