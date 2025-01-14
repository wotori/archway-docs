---
sidebar_position: 5
---

# Troubleshooting Common Issues With Validator Nodes

Here we walk through a number of common issues that you might encounter when you are running a validator node.

## Validator has 0 voting power

If your validator has `0` voting power, your validator has become auto-unbonded. On the mainnet, validators unbond when they do not vote on `9500` of the last `10000` blocks (`50` of the last `100` blocks on the testnet). Because blocks are proposed every `~5` seconds, a validator that is unresponsive for `~13` hours (`~4` minutes on testnet) become unbonded. This problem usually happens when your `archwayd` process crashes.

To return the voting power back to your validator:

### Run Archway
 If `archwayd` is not running, restart it:

  ```bash
  archwayd start
  ```

### Unjail the Validator
 Wait for your full node to reach the latest block, and run:

  ```bash
  archwayd tx slashing unjail <VlidatorAddress> --chain-id=<ChainId> --from=<Name>
  ```

where


- `<VlidatorAddress>` is the address of your validator account.
- `<Name>` is the name or address of the validator account. To find this information, run `archwayd keys list`.

  **Warning**: 
  If you don't wait for `archwayd` to sync before running `unjail`, an error message will inform you that your validator is still jailed.

### Confirm if the validator is back
 Check your validator again to see if your voting power is back:

  ```bash
  archwayd status
  ```

If your voting power is less than it was previously, it's less because you were slashed for downtime.

## Too many files open and Archwayd crashes

The default number of files Linux can open per process is `1024`. `archwayd` is known to open more than this amount, causing the process to crash. To fix this problem:

### Increase the number of open files

Run
 
 ```bash
 ulimit -n 4096
 ```

### Restart the process
Run
 
 ```bash
    archwayd start
```

## Other issues

Having another issue?

Please reach out through the following channels:

- [Medium Blog](https://medium.com/archwayhq)
- [Twitter](https://twitter.com/archwayhq) 
- [Discord Invite Link](https://discord.gg/-5FVvx3WGfa)
- [Github](https://github.com/archway-network)