# syntax=docker/dockerfile:1

FROM python:3.12

WORKDIR /api

COPY ./requirements.txt /api/

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY . /api/

RUN python myworkinprogress/manage.py makemigrations

RUN python myworkinprogress/manage.py migrate

RUN python myworkinprogress/manage.py loaddata sample

CMD ["python", "myworkinprogress/manage.py", "runserver", "0.0.0.0:8000"]
