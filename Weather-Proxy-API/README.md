# Weather Proxy API

A proxy server that fetches weather data from OpenWeatherMap and returns simplified responses.

## Features
- Consumes external weather API
- Proxy endpoint returns only needed data (location, temperature, condition)

## Tech
- Node.js
- Express
- Axios

## Setup

1. `.env` file:
```
PORT=5000
WEATHER_API_KEY=your_actual_openweathermap_api_key
```

2. Start the server:
```bash
npm run dev
```

## Endpoints

| Method | Route       | Description              |
|--------|-------------|--------------------------|
| GET    | /weather    | Returns weather summary  |

> Optional: Pass `lat` and `lon` as query params to get weather for different locations.
Example: `/weather?lat=28.61&lon=77.23`
