

# Node.js HTTP Server Learning Project

## Overview

This repository demonstrates how to build a simple HTTP server using Node.js **without any external frameworks**. It covers the essentials of handling HTTP requests, routing, serving content, and managing status codes using only the built-in `http` module.

---

## Features

-  Minimal and fast HTTP server (no dependencies)
-  Handles multiple routes (`/`, `/mlue`, `/contact`)
-  Returns plain text responses
-  Custom status codes (200, 404)
-  Clean and readable code for learning

---

## Tech Stack

- **Node.js** (native `http` module)
- No frameworks (no Express, Koa, etc.)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed (v12 or higher recommended)

### Installation & Running

1. **Clone the repository**
   ```bash
   git clone https://github.com/ProducerG-hub/nodejs-http-server.git
   cd nodejs-http-server
   ```
2. **Run the server**
   ```bash
   node server.js
   ```
3. **Open your browser**
   - Visit: [http://localhost:3000](http://localhost:3000)

---

## Example Endpoints

| Route         | Description                                 |
|-------------- |---------------------------------------------|
| `/`           | Welcome message                             |
| `/mlue`       | Info about the team                         |
| `/contact`    | Contact email                               |
| any other     | 404 Not Found                               |

---

## Project Structure

```
├── server.js      # Main HTTP server code
├── README.md      # Project documentation
```

---

## How to Contribute

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## License

This project is open source and available under the [MIT License](LICENSE)

---

## Author & Contact

**Gwamaka Mwakabuta (Mlue Technology)**  
Email: mluetechnologytz@gmail.com

---

> _“Practice makes perfect. This project is for learning and experimentation with Node.js core modules.”_
