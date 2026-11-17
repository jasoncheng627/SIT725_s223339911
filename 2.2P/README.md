# SIT725 Task 2.2P – Express Web Server

This is a simple Express.js web server that serves a static web page and provides a calculator REST API.

## Requirements
- Node.js (v18 or later)

## How to run
```
git clone https://github.com/jasoncheng627/SIT725_s223339911.git
cd SIT725_s223339911/2.2P
npm install
npm run start
```
Then open http://localhost:3000

## API Endpoints

- GET `/add?a=5&b=3` – adds two numbers, returns 8
- GET `/calc/:operation?a=4&b=6` – operation can be add, subtract, multiply, divide
- POST `/calc` – send JSON body like { "a": 4, "b": 2, "operation": "divide" }

## Project structure
```
server.js         – express server and API routes
public/index.html – calculator web page
package.json      – project info and dependencies
```