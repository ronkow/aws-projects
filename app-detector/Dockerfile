FROM python:3.12-alpine

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY .env .
COPY app.py .
COPY detector.py .
COPY static ./static
COPY templates ./templates

EXPOSE 5000/tcp
CMD [ "python", "app.py" ]
