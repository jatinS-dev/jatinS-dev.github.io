---
layout: page
title: "Gestural AI – Real-Time ASL Interpreter"
description: Video-based ASL recognition with MediaPipe features, temporal models, and a real-time Streamlit demo.
img: assets/img/8.jpg
importance: 5
category: AI/ML
featured: true
year: 2024
metrics:
  - "94% recognition accuracy"
  - "20K+ videos"
  - "Real-time inference"
stack:
  - TensorFlow
  - OpenCV
  - MediaPipe
  - Streamlit
related_publications: false
---

## Overview

Built a real-time American Sign Language recognition system using video features, hand-tracking signals, and lightweight inference for live interaction. The best model reached **94% accuracy** across a dataset of 20,000+ videos and 166,000 images.

## Technical Implementation

The system compares several video and image modeling approaches:

- **I3D (Inflated 3D ConvNet)** for temporal feature extraction from video sequences
- **ResNet** for robust spatial feature learning
- **MobileNet** for optimized real-time inference on edge devices

## Key Features

- **Real-time Processing**: Optimized for low-latency inference suitable for live communication
- **High Accuracy**: Reached 94% recognition accuracy on diverse ASL gestures
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

The project helped me think through accessibility ML as a systems problem: model accuracy matters, but so do latency, robustness to camera conditions, and the shape of the user interface around the model.

## Future Enhancements

- Integration with mobile applications for on-the-go accessibility
- Support for additional sign languages beyond ASL
- Real-time translation to spoken language
- Integration with video conferencing platforms
