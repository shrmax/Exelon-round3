

## JSON Store API

This is a simple Node.js server that stores user data in a JSON file.

## Features

* Save user data to `data.json`
* Validations:

  * Name: alphabets and spaces only
  * Email: must be valid
  * Password: must have uppercase, lowercase, number, special character, and minimum length 8
* Get all stored data

## Install

```bash
npm install
```

## Run

```bash
node server.js
```

## API Endpoints

### POST `/save`

Example:

```json
{
  "name": "Shan Kumar",
  "email": "shan@example.com",
  "password": "Aa@12345"
}
```

### GET `/data`

Returns all stored data.
