---
layout: page
title: "Gestural AI – Real-Time ASL Interpreter"
description: A real-time American Sign Language recognition system achieving 94% accuracy
img: assets/img/asl_project.jpg
importance: 1
category: AI/ML
related_publications: false
---

## Overview

Developed a cutting-edge real-time American Sign Language (ASL) recognition system that achieves **94% accuracy** on a dataset of 20,000+ videos and 166,000 images. This project demonstrates advanced computer vision techniques and real-time inference optimization.

## Technical Implementation

The system leverages multiple state-of-the-art deep learning architectures:

- **I3D (Inflated 3D ConvNet)** for temporal feature extraction from video sequences
- **ResNet** for robust spatial feature learning
- **MobileNet** for optimized real-time inference on edge devices

## Key Features

- **Real-time Processing**: Optimized for low-latency inference suitable for live communication
- **High Accuracy**: Achieved 94% recognition accuracy on diverse ASL gestures
- **Scalable Architecture**: Deployed via Docker on Linux servers for production use
- **Multi-modal Input**: Supports both video and image input formats

## Technologies Used

- **Python** for core implementation
- **OpenCV** for video processing and computer vision
- **MediaPipe** for hand tracking and pose estimation
- **TensorFlow** for deep learning model training and inference
- **Streamlit** for user interface development
- **Docker** for containerized deployment

## Impact

This project has significant implications for accessibility technology, enabling real-time communication between deaf and hearing individuals. The high accuracy and real-time performance make it suitable for practical applications in education, healthcare, and daily communication.

## Future Enhancements

- Integration with mobile applications for on-the-go accessibility
- Support for additional sign languages beyond ASL
- Real-time translation to spoken language
- Integration with video conferencing platforms
