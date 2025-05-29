# WoW 3.3.5a Serve

> **Note:** This project only restores the web page loading functionality of the WoW 3.3.5a launcher. It is not perfect since every client must manually edit their hosts file unless you provide modified binaries. For more information about this launcher, including peer-to-peer updating, visit [stoneharry's GitHub](https://github.com/stoneharry?tab=repositories).

This project restores the web functionality of the World of Warcraft 3.3.5a launcher by redirecting XML requests to a locally served `page.html` file. The HTML page is sourced from the Wayback Machine archive, allowing the launcher to work as originally intended.

![Launcher](https://i.imgur.com/qA7pAuC.png)

## Requirements

- Node.js
- npm (Node Package Manager)

## Setup & Usage

1. Clone or download this repository:

    ```bash
    git clone https://github.com/brian8544/335_launcher.git
    cd 335_launcher
    npm install express
    ```

2. Start the local web server by running:

    ```bash
    node app.js
    ```

3. Modify your system's hosts file to redirect WoW launcher domains to your local server. On Windows, the hosts file is located at:  
   `C:\Windows\System32\drivers\etc\hosts`

    Add the following lines to the file:

    ```
    127.0.0.1 launcher.worldofwarcraft.com
    127.0.0.1 www.worldofwarcraft.com
    127.0.0.1 wow-europe.com
    127.0.0.1 www.wow-europe.com
    127.0.0.1 wow-europe.com/de
    127.0.0.1 wow-europe.com/en
    127.0.0.1 wow-europe.com/es
    127.0.0.1 wow-europe.com/fr
    127.0.0.1 wow-europe.com/ru
    127.0.0.1 www.worldofwarcraft.co.kr
    127.0.0.1 www.wowtaiwan.com.tw
    ```

4. The launcher should now load properly by fetching the required resources.
