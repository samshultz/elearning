FROM python:3.8
MAINTAINER Samuel Taiwo

ENV PYTHONUNBUFFERED 1

RUN apt-get update && apt-get install -y \
        python3-dev python3-pip python3-setuptools \
        libffi-dev libxml2-dev libxslt1-dev \
        libtiff5-dev libjpeg62-turbo-dev zlib1g-dev libfreetype6-dev \
        liblcms2-dev libwebp-dev  python3-tk

RUN ln -s /usr/lib/x86_64-linux-gnu/libz.so /lib/
RUN ln -s /usr/lib/x86_64-linux-gnu/libjpeg.so /lib/

COPY ./requirements /requirements
RUN pip install --default-timeout=100 -r /requirements/local_requirements.txt
RUN pip install pillow
RUN mkdir /app
WORKDIR /app
COPY . /app

RUN adduser  user
USER user
