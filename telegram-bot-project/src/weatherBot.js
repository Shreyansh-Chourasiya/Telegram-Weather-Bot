const axios = require('axios');
const TelegramBot = require('node-telegram-bot-api');

// Telegram Bot API token
const token = '5762617402:AAGVJCiACTZr610KZxr9ZarGfNdokxl0GQ4';
const bot = new TelegramBot(token, { polling: true });

// OpenWeatherMap API key
const apiKey = '0eee8616c1bfc8dc57e312f3e79a9c3d';


// Handle incoming messages
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const city = msg.text;

    // Call OpenWeatherMap API to get weather data
    axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then((response) => {
            const weatherData = response.data;

            // Extract required weather information
            const temperature = weatherData.main.temp;
            const humidity = weatherData.main.humidity;
            const windSpeed = weatherData.wind.speed;

            // Send weather information back to the user
            bot.sendMessage(
                chatId,
                `Weather in ${city}:\nTemperature: ${temperature} K\nHumidity: ${humidity}%\nWind Speed: ${windSpeed} m/s`
            );
        })
        .catch((error) => {
            console.error('Error:', error.message);
            bot.sendMessage(chatId, 'Error fetching weather data. Please try again later.');
        });
});

// Handle start command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    // Send welcome message
    bot.sendMessage(chatId, 'Welcome to the Weather Bot! Please enter the name of a city to get the weather information.');
});