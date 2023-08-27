<a name="readme-top"></a>

  <h2 align="center">Online coloring book</h2>

<!-- ADD LATER
  <p align="center">
    <a href="https://github.com/othneildrew/Best-README-Template">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
  </p>
</div>
-->

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


## About The Project

The Online coloring book allows you to fill line drawings with color. You can create, save, modify and delete these colored pictures. This full-stack application uses React on the frontend, ExpressJS on the backend and MongoDB as a database.

[![Product Name Screen Shot][product-screenshot]](https://github.com/csekea/online-coloring-book/blob/main/client/src/Assets/Images/screenshot.jpg)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![React][React.js]][React-url]
* [![Express][Express.js]][Express-url]
* [![Node][Node.js]][Node-url]
* [![Mongo][MongoDB]][Mongo-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Getting Started

Please see the core dependencies and installation steps below:

### Prerequisites

* [Node.js](https://nodejs.org/en/download)
* [MongoDB](https://www.mongodb.com/docs/manual/administration/install-community/)
* Integrated development environment(IDE) - e.g. [Visual Studio Code](https://code.visualstudio.com/Download)
* [MongoDB Compass](https://www.mongodb.com/try/download/compass)

### Installation

1. Clone the repository `git clone https://github.com/csekea/online-coloring-book.git`
2. Install Visual Studio COde
3. Install MongoDB
4. (Optional: Install MongoDB Compass for database visualization)
5. Open the project in Visual Studio Code: `File / Open folder... --> online-coloring-book`
6. Open a terminal in Visual Studio Code: `Terminal / New Terminal`
7. Install npm packages by entering `npm install` into the terminal
8. Navigate to the `server` folder by entering `cd server`
9. Start the Node.js server by entering `npm start`
10. Open another terminal by clicking to the 'plus' sign in the top right corner of the terminal window
11. Navigate to the `client` folder by entering `cd client` into this terminal 
12. Start the React.js server by entering `npm start`
13. This will start the project which you can reach in your browser, on the following URL: `http://localhost:3000/` 

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Usage

1. The `Home` page lists the available line drawing templates for coloring
2. Click on the template you want to color
3. The image creator page opens with a line drawing and a color palette
4. Click on the color and then on the field you wish to fill
5. Save the colored image to the database or cancel the image creation
6. The `My images` page lists all created images
7. Click on an image to open it
8. The image editor page opens with the pre-colored image and a color palette
9. Modify the image and save it, or delete it

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Contact

:woman_technologist: Anna Cseke - :email: anna.cseke[at]gmail[dot]com [![LinkedIn][linkedin-shield]][linkedin-Anna]

Project Link: [https://github.com/csekea/online-coloring-book](https://github.com/csekea/online-coloring-book)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Best-README-Template](https://github.com/othneildrew/Best-README-Template), [MIT Licence](https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/anna-cseke-847b1963/
[linkedin-Anna]: https://www.linkedin.com/in/anna-cseke-847b1963/
[product-screenshot]: https://github.com/csekea/online-coloring-book/blob/main/client/src/Assets/Images/screenshot.jpg
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Express.js]: https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[Node.js]: https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/
[MongoDB]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[Mongo-url]: https://www.mongodb.com/
