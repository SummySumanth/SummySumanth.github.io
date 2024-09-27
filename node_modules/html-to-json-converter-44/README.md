<div id="top"></div>

<div align="center">
  <h1>HTML To JSON Converter</h1>
</div>

## 📍 About The Project

- This library converts HTML to JSON.

### Dependencies

- [![TypeScript][typescript]][typescript-url]
- [![NodeJS][nodejs]][node-url]

<div align="right">
  <p>(<a href="#top">back to top</a>)</p>
</div>

## 🚀 Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running, follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- node

  ```sh
  brew install node
  ```

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation locally

1. Clone the repo

```sh
git clone git@github.com:umairfarooq44/html-to-json-converter.git
```

2. Install NPM packages

```sh
npm install
```

### Running

To run the Project locally

```sh
npm run dev
```

To run as CLI:

1. Build the project.

```sh
npm run build
```

2. Run the command with path to HTML file.

```sh
node build index.html (html file path)
```

<div align="right">
  <p>(<a href="#top">back to top</a>)</p>
</div>

## 🕹 Usage

To use it as library please run

```sh
npm install html-to-json-converter-44
```

Then it can be used

```js
import { htmlToJson } from 'html-to-json-converter-44';

const html = '<div>Hello World</div>';
const json = htmlToJson(html); // {tag: 'div', text: 'Hello World'}
```

<div align="right">
  <p>(<a href="#top">back to top</a>)</p>
</div>

[typescript]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[nodejs]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[node-url]: https://nodejs.org/en/
