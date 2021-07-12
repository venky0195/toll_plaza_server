# toll_plaza_server
Automating a toll plaza by issuing toll receipts to vehicles.
The receipt will include:
● The vehicle registration number
● The amount (100 for one-way, 200 for return)
● The current date and time (Date and Time of issue)

Vehicles can also pass if they have a return toll receipt. If a vehicle already has a return toll receipt,
the date of issue in the receipt will be validated to be today's date.
---
## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g


## Install

    $ git clone https://github.com/venky0195/toll_plaza_server.git
    $ cd toll_plaza_server
    $ npm install


## Running the project

    $ npm start
    
## Testing the project
    
    $ npm test
