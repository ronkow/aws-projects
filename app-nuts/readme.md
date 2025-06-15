A Flask app embedded with an interactive Amazon Quicksight dashboard. Deployed in AWS using
- Amazon Lightsail
- Amazon Route 53

View the dashboard at: 
[https://nuts.ronkow.com](https://nuts.ronkow.com) 

AWS tutorial:  
[https://aws.amazon.com/tutorials/deploy-webapp-lightsail/](https://aws.amazon.com/tutorials/deploy-webapp-lightsail/) 

Create Docker image    
`docker build -t <image-name> .`  
`docker images`

Run in localhost     
`docker run -p 5000:5000 <image-name>:<image-tag>  `

Using AWS CLI,    
Push image to Amazon Lightsail    
`aws lightsail push-container-image --region <region-name> --service-name <container-service-name> --label <container-label> --image <image-name>:<image-tag>`

Deploy in container service  
`aws lightsail create-container-service-deployment --region <region-name> --cli-input-json file://lc.json`
