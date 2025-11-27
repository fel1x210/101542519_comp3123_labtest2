# Weather App - Lab Test 2

## Project Description
This is a simple, user-friendly React application that displays current weather information for any city. It fetches real-time data from the OpenWeatherMap API and displays key details such as temperature, weather conditions, humidity, wind speed, and a weather icon.

## Student Information
**Student ID:** 101542519
**Project Name:** 101542519_comp3123_labtest2

## Setup Steps

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd 101542519_comp3123_labtest2
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **API Key Configuration:**
    *   Open `src/components/WeatherApp.js`.
    *   Replace the `API_KEY` variable with your valid OpenWeatherMap API key.
    *   *Note: A placeholder key is currently in the code, which may not work.*

4.  **Run the application:**
    ```bash
    npm start
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## API Used
*   **Name:** OpenWeatherMap Current Weather Data
*   **Endpoint:** `http://api.openweathermap.org/data/2.5/weather`
*   **Documentation:** [https://openweathermap.org/current](https://openweathermap.org/current)

## Features
*   **Search:** Users can search for weather by city name.
*   **Current Weather:** Displays temperature, weather description, humidity, wind speed, and "feels like" temperature.
*   **Visuals:** Includes weather icons provided by the API.
*   **Responsive Design:** Simple and clean UI that works on different screen sizes.

## Assumptions & Notes
*   The app assumes the user has a valid internet connection to fetch data.
*   The API key provided in the code is a placeholder/example. You must sign up at OpenWeatherMap to get a free key.
*   Error handling is implemented for invalid city names or network issues.

## Screenshots
*(Add screenshots of your running application here)*

## Original Create React App README below:

