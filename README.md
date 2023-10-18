## Effectus Software Base

### What is the purpose of this project?

The main goal of this project is to standarize the development process of Effectus Software for React Native projects.

This boilerplate includes:

    - A scalable and maintainable folder architecture.
    - Typescript support.
    - Absolute path imports.
    - A set of common components.
        - Avatar
        - Modal
        - Button
    - React navigation
    - React Native Config
    - Redux
    - Splash screen
    - Useful customHooks
        - useScreenDimensions
    - App icon
    - React query
    - Translation
    - Useful scripts
        - Create a component
        - Create a screen
        - Create a slice
    - Linking to browser

### Development Environment

#### Requirements

1. [Node](https://nodejs.org/en/)
2. [React Native](http://facebook.github.io/react-native/docs/getting-started.html)
3. [Yarn](https://yarnpkg.com/en/docs/install)
4. (Optional) [NVM](https://github.com/creationix/nvm)

#### Setup

1. Clone the repo.
2. [Install the requirements](https://reactnative.dev/docs/environment-setup) (for React Native follow the instructions to set-up xCode and Android Studio)
3. Install the dependencies by executing `yarn` 
4. Install [`rvm`](https://rvm.io/) and install the ruby version specified in the `.ruby-version` file
5. Install [bundler](https://bundler.io/)
6. Run `bundle install` 

##### iOS

- Go to the iOS folder and run `pod install`.
- On a new tab, run `yarn start --reset-cache` to start the Metro Bundler.
- If installing the app for the first time (or it your change requires a full build), run `yarn ios`.
- Please validate the project runs successfully on iOS.

##### Android

- On a new tab, run `yarn start --reset-cache` to start the Metro Bundler.
- If installing the app for the first time (or it your change requires a full build), run `yarn android`.
- Please validate the project runs successfully on Android.

### Testing

- Install flipper desktop app, you can find info [here!](https://fbflipper.com/docs/getting-started/)
- Open Flipper and run your application, you will see it connects properly to your device

For this project is higly recommended you install `Redux Debugger` plugin, you can find it on the Flipper plugins section

### Rename Project

Follow the steps in the [React Native Rename library](https://github.com/junedomingo/react-native-rename)

### First Steps

- Put the colors of your project in the `styles/theme.ts` file

#### Environments

- This project is configured to support different environments. Right now, we support 3 environments (development, staging and production) but it's possible to add more. In the `package.json` you can see different scripts to run the app with the mentioned configurations. Also, you can run the iOS app from XCode selecting the scheme you want.

- To set environment vars, go to any of the `.env` files in the root folder.

#### Component generator

- This project includes [plop](https://plopjs.com/) which let us generate components fast. So when you want to create a reusable component just run from your terminal: `yarn run generate component` and see how it works.

#### React Query

- This project includes [react-query](https://react-query.tanstack.com/) which let us fetch, cache and update data, all without touching any "global state". Read the [first steps](https://react-query.tanstack.com/quick-start) to know how to use it.

##### App Icon (optional)

- For iOS we already have 3 app icon files that you can set through XCode.
- For Android you have to create folders 3 folders into the `android/src`: `production`, `staging` and `development`. Once you have these folders you can add the specific resources in each folder. To understand why this works in this way go to this [link](https://medium.com/@amallick_83138/how-to-manage-multiple-environments-in-a-react-native-app-for-android-6d0e852c10de)
