# Cypress Zap

### What is this?

This is an example of showing how cypress can be used to automate ZAP attack proxy.

### How do I run this?

Start the example website to be attacked by running the following command. *Note* this is only for demo purposes

```
docker-compose up
``` 

To run the cypress tests use one of the commands below

```
yarn test
```
```
yarn test:ci
```

The first command will open the cypress user interface so you can see your tests running (*Note* you will have to exit the UI to see the scan results). 
The second command is intended for running on continuous integration servers where a user interface is not required.

### How do I see the results?

Once the scan is completed a new file will be created on the root of the project called report.html this contains the results of the attack proxy
