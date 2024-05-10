# Data Extraction Plugin

This project consists of a plugin for extracting usage data from a static web page. The collected data is sent to the Firebase Realtime Database through an API that connects with this service. The collected data can be consumed through this API.

The project was divided into three subprojects: the static web page, the plugin for data extraction and the API for communicating with Firebase. Therefore, we have a monorepo containing three projects, which are:

page: project for creating the static page. This project was created using React.js + Vite + TypeScript.
api: project for developing the Rest API that provides endpoints for communicating with Firebase. This project was developed using Node.js + TypeScript + Express.
plugin: project for developing the plugin to be integrated into the static page. This project was developed using Node.js + TypeScript.

![Screenshot da página estática desenvolvida.](./static-page.png)
