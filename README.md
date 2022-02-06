# Karma Project

- This project is about sending Matic to a contract as a charity and get back some KarmaCoin.
- You can get 1 KarmaCoin for donating 1 Matic into the contract

## How to set it up?

- You will need to have a localhost running. In this example we have had used a python localhost where we interacted with the contract in the frontend page.
- Also you will need to have some accounts in the polygon testnet ( Mumbai ) and have to add some Faucet Matic to be able to make interaction. 

Once the Deposit Matic Function has been called, the Matic from the sender address will be sent to the contract and this transaction will also be saved on PolygonScan.
After the CharityDonation function has been called, the contract actually sends the KarmaToken to the sender's address. 
We were not able to understand why due to the short period of time, but the transactions can be seen on the PolygonScan.  
The Matic which should go to the charity Contract stays in the contract's address and the KarmaCoin which is minted is actually going to the Charity's  address.

