#!/usr/bin/env python
from setuptools import setup

setup(name='iopipe_payload',
      version='1.0.2',
      description='IOpipe payload schema & normalization library',
      author='IOpipe',
      author_email='support@iopipe.com',
      url='https://github.com/iopipe/iopipe-payload',
      packages=['iopipe_payload'],
      setup_requires=[
          'flake8',
          'pytest-runner'
      ],
      extras_require={
          'dev': [
              'flake8'
          ]
      },
      tests_require=[
          'pytest'
      ]
      )
