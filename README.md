<a name="readme-top"></a>
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/njabulomajozi/retriedge">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Retriedge</h3>
</div>

<!-- TABLE OF CONTENTS -->
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
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]]()

Retriedge

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With
* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![TypeScript][TypeScript]][TypeScript-url]
* [![Tailwind][Tailwind]][Tailwind-url]
* [![ShadUI][ShadUI]][ShadUI-url]
* [![Lodash][Lodash]][Lodash-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* Node.js (>=18)
* yarn
* Cloudflare account
* Wrangler CLI installed

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/njabulomajozi/retriedge.git
   ```
2. Navigate to the project directory
    ```sh
   cd retriedge
   ```
3. Install dependencies
   ```sh
   yarn
   ```
4. Configure wrangler
    You need to configure Wrangler with your Cloudflare account in order to use services such as AI, Vector DB and etc
    ```sh
   wrangler config 
   ```
4. Start the development server
   ```sh
   yarn dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

* On api client, send a post request to http://localhost:8787/generate-data, with body
    ```json
    {
        "schema": "<DATABASE DDLs>"
    }
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap
- MVP
  - 
- 2nd Version
  - 

See the [open issues](https://github.com/njabulomajozi/retriedge/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Njabulo - [LINKEDIN](https://www.linkedin.com/in/njabulomajozi) - hi@njabulomajozi.com

Project Link: [https://github.com/njabulomajozi/retriedge](https://github.com/njabulomajozi/retriedge)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/njabulomajozi/retriedge.svg?style=for-the-badge
[contributors-url]: https://github.com/njabulomajozi/retriedge/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/njabulomajozi/retriedge.svg?style=for-the-badge
[forks-url]: https://github.com/njabulomajozi/retriedge/network/members
[stars-shield]: https://img.shields.io/github/stars/njabulomajozi/retriedge.svg?style=for-the-badge
[stars-url]: https://github.com/njabulomajozi/retriedge/stargazers
[issues-shield]: https://img.shields.io/github/issues/njabulomajozi/retriedge.svg?style=for-the-badge
[issues-url]: https://github.com/njabulomajozi/retriedge/issues
[license-shield]: https://img.shields.io/github/license/njabulomajozi/retriedge.svg?style=for-the-badge
[license-url]: https://github.com/njabulomajozi/retriedge/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

[linkedin-url]: https://linkedin.com/in/njabulomajozi
[product-screenshot]: images/screenshot.png

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript]: https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.pn
[TypeScript-url]: https://www.typescriptlang.org/
[Tailwind]: https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.pn
[Tailwind-url]: https://reactjs.org/
[ShadUI]: https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.pn
[ShadUI-url]: https://reactjs.org/
[Lodash]: https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.pn
[Lodash-url]: https://reactjs.org/
