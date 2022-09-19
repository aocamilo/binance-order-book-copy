Binance Order Book Clone!
![image](https://user-images.githubusercontent.com/21963372/191132086-487300df-5ce4-4cc7-b422-960d22abdb37.png)

# Project setup

After cloning the repo, install the dependencies:

### `yarn install`

# Start development server

### `yarn start`

# Run unit tests

### `yarn test`

# Run integration tests

### `yarn cypress open`

# Project's Description

This is a basic clone of binance's Order Book.
This projects fetches real time asks and bids data using a web socket, and attempts to display it on a similar way
Binance does.
To start seeing the order book, the user must input a pair of coin names to form a symbol, i.e. `BTC/USDT`, if user inputs an invalid pair, a basic error component will be displayed, asking the user to check the pair and try again.

# Project's Asumptions

- The initial form is a controlled form in case validations are needed. In the current code no validations to the form are being made. In case wrong data is inputted, the app will try to connect to binance's API and return an error, giving feedback to the user to check the pair entered.

- Few basic tests have been added, it'd be great to add more.
