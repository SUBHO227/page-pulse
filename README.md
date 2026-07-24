# Page Pulse

Page Pulse is a web-based website auditing tool built using **Node.js, Express, React, Axios, and Cheerio**. It analyzes a webpage and provides basic SEO, accessibility, and performance metrics such as page title, meta description, heading count, missing image alt attributes, response time, and word count.

This project was developed as part of the **Digital Heroes Training Task**.

---

## Features

- Analyze any valid website URL
- Measure HTTP response status
- Measure page response time
- Extract page title
- Extract meta description
- Count H1 tags
- Detect images missing alt attributes
- Calculate word count
- Handle invalid URLs
- Handle non-HTML pages
- Handle request timeouts
- Display user-friendly error messages

---

## Tech Stack

### Frontend

- React
- Axios
- Vite

### Backend

- Node.js
- Express.js
- Axios
- Cheerio

### Testing

- Jest

---

# Project Structure

```
page-pulse
│
├── client
│   ├── src
│   ├── package.json
│
├── server
│   ├── controllers
│   ├── routes
│   ├── services
│   ├── tests
│   ├── app.js
│   └── package.json
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/SUBHO227/page-pulse.git
```

Move into the project folder

```bash
cd page-pulse
```

---

# Backend Setup

Move to server folder

```bash
cd server
```

Install dependencies

```bash
npm install
```

Start backend

```bash
node app.js
```

The backend runs on

```
http://localhost:5000
```

---

# Frontend Setup

Open another terminal

```bash
cd client
```

Install dependencies

```bash
npm install
```

Run frontend

```bash
npm run dev
```

The frontend runs on

```
http://localhost:5173
```

---

# API Contract

## Endpoint

```
POST /audit
```

---

## Request Body

```json
{
    "url":"https://example.com"
}
```

---

## Successful Response

```json
{
    "status":200,
    "responseTime":93,
    "title":"Example Domain",
    "metaDescription":"No Meta Description",
    "h1Count":1,
    "missingAltImages":0,
    "wordCount":17
}
```

---

## Error Responses

### Invalid URL

```json
{
    "success":false,
    "message":"Invalid URL"
}
```

---

### Non HTML Page

```json
{
    "success":false,
    "message":"URL does not contain an HTML page"
}
```

---

### Timeout / Other Errors

```json
{
    "success":false,
    "message":"Something went wrong"
}
```

---

# Parsing Metrics

The tool extracts the following information from a webpage:

- HTTP Status Code
- Response Time
- Page Title
- Meta Description
- Number of H1 Tags
- Images Missing Alt Attributes
- Total Word Count

---

# Running Tests

Move to server folder

```bash
cd server
```

Run

```bash
npm test
```

Current test coverage includes:

- Happy Path
- Invalid URL
- Non HTML Page

---

# Design Decisions

## 1. Separation of Concerns

The application is divided into Routes, Controllers, and Services.

**Reason**

The controller handles HTTP requests and responses while the service contains the business logic for webpage analysis. This separation improves readability, maintainability, and makes the parsing logic easier to test independently.

---

## 2. Using Cheerio for HTML Parsing

Cheerio was used to parse HTML and extract webpage elements.

**Reason**

Cheerio provides a lightweight, jQuery-like API that makes it simple and efficient to access HTML elements such as titles, headings, images, and meta tags without requiring a browser.

---

## 3. Input Validation and Error Handling

The application validates URLs before making requests, verifies that the response is an HTML document, and configures Axios with a request timeout.

**Reason**

These checks prevent crashes, provide meaningful error messages, and improve the reliability of the application when handling invalid input or unsupported resources.

---

# Testing Strategy

The parsing logic is tested using Jest.

Three test cases are implemented:

1. Happy Path
2. Invalid URL
3. Non HTML Response

The tests verify that the parsing logic behaves correctly for both successful and failure scenarios.

---

# Future Improvements

If additional development time were available, I would extend the application by:

- Adding Lighthouse-style SEO metrics
- Checking broken internal links
- Detecting duplicate meta tags
- Detecting missing Open Graph tags
- Generating downloadable PDF audit reports
- Supporting concurrent analysis of multiple pages

---

# AI Usage

AI tools (ChatGPT) were used to understand concepts such as Express routing, React state management, Axios, Cheerio, Jest testing, debugging, and error handling.

All code was implemented, integrated, tested, and verified manually before submission.

---

# Live Build Requirement

The deployed frontend includes a footer with the required credit:

**Built for Digital Heroes Training Task**

linked to:

https://digitalheroesco.com

---

# Author

**Subhoraj Das**

GitHub

https://github.com/SUBHO227
