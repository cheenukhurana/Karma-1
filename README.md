# Karma Project

- This project is about sending Matic to a contract as a charity and get back some KarmaCoin.
- You can get 1 KarmaCoin for donating 1 Matic into the contract

## How to set it up?

- You will need to have a localhost running. In this example we have had used a python localhost where we interacted with the contract in the frontend page.

Steps to setup Localhost:
- Open Powershell or cmd
- cd to the index.html file
- run following code: python3 -m http.server 8000
- Go to web browser and open localhost:8000


- Also you will need to have some accounts in the polygon testnet ( Mumbai ) and have to add some Faucet Matic to be able to make interaction. 
- The accounts that have been used for this contract are from Alchemy, You can set up Mumbai testnet addresses there

## Frotnend Part

-On the Frontend, first you will need to deposit some Matic in order to make some charity donations.
-After that the contract will receive the deposited MATIC amount and will save the transaction on PolygonScan
-Then We can actually use the Donate button now
-The Matic will go to the Charity's address which will create some KarmaToken and send it back to the user's address as a reward.

(We were not able to understand why due to the short period of time, but the Matic amount is staying on the smart contract's address and the KarmaCoin is actually going to the Charity's address where the Matic should go ( the transactions can be seen on the PolygonScan ) )


