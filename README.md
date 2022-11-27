# Redberry Survey

This is a survey created for Redberry(Georgian Tech Company) internship program.

### Prerequisites

- <img src="./readme-assets/node.svg" height="17" style="position: relative; top: 2px"/> _Node JS @12.X and up_

* <img src="./readme-assets/npm.png" height="16" style="position: relative; top: 4px"> _npm @6 and up_

#

### Tech Stack

- <img src="readme-assets/react.png" height="18" style="position: relative; top: 4px" /> [React @17.0.2](https://reactjs.org) - Front-end framework
- <img src="readme-assets/router.webp" height="11" /> [React Router @6.2.2](https://reactrouter.com/) - Client side router

#

### Getting Started

**To run this application locally you need to follow the steps below:**

1\. First of all you need to clone repository from github:

```sh
git clone https://github.com/RedberryInternship/coronatime-otomamatsashvili.git
```

2\. Next step requires installing all the dependencies:

```sh
npm install
```

or

```sh
yarn install
```

3\. Then copy env example file. You can change environment variables inside .env with your preferences:

```sh
cp .env.example .env
```

4\. After that you can run application from terminal:

```sh
npm start
```

or

```
yarn run start
```

#

### Deployment

Follow this steps for deploying:

1\. You need to copy env example file on server. You should update env variables with your needs:

```sh
cp .env.example .env
```

2\. And then just build:

```sh
npm run build
```

#

### Project Structure

```bash
├─── public          # entry folder
    ├─── index.html     # main html file
├─── src             # project source codes
    ├─── images         # project images
    ├─── styles         # css style files
    ├─── components     # reusable components for whole app
        ├─── svgs           # svg components
        ├─── Component.jsx  # component file
        ├─── index.js       # exports components
    ├─── pages          # application pages
        ├─── Page.jsx       # page component file
        ├─── index.js       # exports all pages
    ├─── App.jsx        # main component with routing
    ├─── index.css      # main css file
    ├─── index.js       # root JS file
├─── readme-assets   # readme assets folder
├─── .env            # environment variables
├─── .jsconfig.json  # allows absolute imports
├─── .gitignore      # git ignored file list
├─── package.json    # dependency manager configurations
├─── README.md       # github readme file
```
