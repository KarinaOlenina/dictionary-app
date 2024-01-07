# Dictionary Project
<div align="center">

![GitHub contributors](https://img.shields.io/github/contributors/KarinaOlenina/dictionary-app?style=for-the-badge&color=blue)
![GitHub top language](https://img.shields.io/github/languages/top/KarinaOlenina/dictionary-app?style=for-the-badge&color=aqua)
![GitHub last commit](https://img.shields.io/github/last-commit/KarinaOlenina/dictionary-app?style=for-the-badge&color=blue)
![Github Repo Size](https://img.shields.io/github/repo-size/KarinaOlenina/dictionary-app?style=for-the-badge&color=aqua)

</div>


## 📖 Overview

The <b>"Dictionary"</b> project is an application that allows you to create pairs of words (a word and its translation) and offers a testing feature. This project includes two main modes: Quiz Pairs and Flip Cards. It's a helpful tool for learning and practicing vocabulary.

- **Quiz Pairs Mode**: In this mode, you'll be presented with a word and four possible translations. Your task is to select the correct translation from the options provided.

- **Flip Cards Mode**: Flip Cards Mode: This mode is designed for word repetition. You'll see a word, and you can choose either "I know" or "I don't know" based on your familiarity with the translation of that word.

At the end of each test, you'll receive your results.

![dictionary-gif.gif](src%2Fassets%2Fdictionary-gif.gif)

📊 Additionally, your total scores and results are saved, and you can review them by clicking on the "Statistics" option.

## 🛠 Getting Started

To use the application, follow these steps:

> First, make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your computer.

### 📔 Clone the repository:

HTTPS:
```bush
https://github.com/KarinaOlenina/dictionary-app.git
```

### 📦 Install the project dependencies by running:
```bush
npm install
```

### 💻 Install JSON-Server
```bush
npm i json-server
```

### 🚀 Start app:
```bush
npm start
```

### ☁️ Start json-server:
In addition to the application, you need to run a fake server to store data about words and results. You can do this by running:
```bush
npm run json-server
```

This will start a JSON server on  [http://localhost:3001](http://localhost:3001).

Now you can access the application in your web browser at [http://localhost:3000](http://localhost:3000).

Create word pairs, practice, and review your results using the different modes available in the application.

## ‍🔧 Technologies Used

- <b>React</b>: A JavaScript library for building user interfaces.
- <b>Redux</b>: A predictable state management container for JavaScript applications.
- <b>react-router-dom</b>: A library for adding routing and navigation to your React applications.
- <b>axios</b>: A promise-based HTTP client for making requests to your JSON server or other APIs.
- <b>JSON Server</b>: A fake REST API to store and retrieve data.
- <b>D3.js</b>: A JavaScript library for creating interactive data visualizations.
