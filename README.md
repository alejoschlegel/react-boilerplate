# react-boilerplate

React project template from scratch.

# steps followed
creating the proyect
npm init -y

react dependencies
npm i react react-dom

babel (compiler to pure javascript)
npm i @babel/core @babel/preset-env @babel/preset-react babel-loader -D

loaders
npm i style-loader css-loader -D

webpack (to pack data)
npm i webpack-cli -D

npm i clean-webpack-plugin html-webpack-plugin -D

To clean up the dist folder and always use a single bundle.
To add the bundle to the index.html file.

polifylls (to provide modern functionality in older browsers that dont natively support it)
npm i core-js

webpack-dev-server (to create a development server that publishes resources constantly.)
npm i webpack-dev-server webpack-merge -D