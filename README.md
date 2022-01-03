


```
  npm install
  npm run dev
```

- Change `.env` with your own environment variables.
- Remove `/artifacts`folder if it exists.
- Put your own smart contract inside `/contracts/`.
- Compile your smart contract with `npx hardhat compile`.
- Update `/scripts/deploy.js`according to your needs.
- Deploy your smart contract with `npx hardhat run scripts/deploy.js --network rinkeby`.
- Copy the deployed _contract address_ and put it inside `/utils/interact.js` contractAddress section.

#