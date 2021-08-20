# Add OAuth to an OpenShift React App w IBM App ID

Create an IBM Cloud Pay-As-You-Go Account


## Create an Instance of App ID

Create an App ID Instance; Choose the Lite Tier Plan

From the menu on the right, select **Applications**.

Click **Add Application**.

Add a **Name**, and select **Single-page application** from the **Type** dropdown menu.

Expand and view the app credentials. Note the **cliendID** and the **discoveryEndpoint**. We'll need these later.


## Create a React App

Create a React app or use the [sample app](https://github.com/IBM-Developer-Austin/appid-sample-code-snippets).

**Note:** If it's been a while since you've used the `create-react-app` command, it has been depricated. You will need to uninstall and re-rerun the command.

Uninstall `create-react-app` command globally from both npm and yarn:
uninstall from npm
`npm uninstall -g create-react-app`
uninstall from yarn
`yarn global remove create-react-app`

Re-run the `create-react-app` command to setup a frontend build pipeline; give your app a name:
`npx create-react-app <APP_NAME>`
`npx create-react-app ce-app-id `

Move into your project directory:
`cd  <APP_NAME>`
`cd ce-app-id`


## Add App ID to the App

Install the IBM Cloud App ID SDK:
`npm install ibmcloud-appid-js`

In the `/src` folder of the app, open `App.js` in your text editor.
Import App ID by adding the following code:
```
import AppID from `ibmcloud-appid-js`;
```

In the main App() function, declare a new App ID instance.

Initialize App ID, and add error-handling. Add your **cliendID** and **discoveryEndpoint**, which can be found in the **Applications** tab, on the left of the App ID dashboard.

Create a login function that will execute after the login button is clicked.
After successfull authentication, the `welcomeDisplayState` will be set to true, and the userName will be set to the `name` value returned with the App ID token.

Add a welcome `<div>`, a login `<button>` that calls the login function(), and an error `<div>`.

Start the application, and run it locally:
`npm start`

Update the **redirect_uri** in the App ID dashboard in the **Authentication Settings** under the **Manage Authentication** tab on the left.


## View the Live Application

View your locally deployed application!
`http://localhost:3000` or `http://localhost:3000`


## Push Your Code to GitHub

Create a new GitHub repository; add a **Repository name**, and click **Create repository**.

**Note:** Do NOT initialize the repo with anything other than a name.

Add the remote origin to the local initialized project and set it upstream.
Push your code from the CLI to the new repository.
```
git remote add origin https://github.com/<PROFILE_NAME>/<REPO_NAME>.git
git branch -M main
git push -u origin main
```

Now you're good to go!

**<ADD_HOW_TO_DOCKERFILE_HERE>**

<!-- FOR CLOUD NATIVE BUILDPACKS -->
## Build a Container Image with Docker Hub with the Code Engine CLI

Set up registry access to your Docker Hub account.
```
ibmcloud ce registry create --name dockerhub --server https://index.docker.io/v1/ --username <DOCKER_USERNAME> --password <DOCKER_PASSWORD>
```

Create a build with buildpacks.
```
ibmcloud ce build create --name <NAME>-build --source https://github.com/<PROFILE_NAME>/<REPO_NAME> --commit main --context-dir /<DIR_NAME> --registry-secret dockerhub --image docker.io/<DOCKER_ID>/<IMAGE_NAME> --size small --strategy buildpacks
```

**Note:** `--context-dir /<DIR_NAME>` is optional; this is only required if the source code for your application lives within a context directory folder in your repository.

Submit a build run.
```
ibmcloud ce buildrun submit --build <NAME>-build
```

Check the status of the build run.
```
ibmcloud ce buildrun get --name <NAME>-build-run-851026-090000000
```

If there's a problem with the build run, display the logs.
```ibmcloud ce buildrun logs --buildrun <NAME>-build-run-851026-090000000
```


## Build a Container Image with IBM Container Registry with the Code Engine CLI


## Deploy the App to OpenShift Cluster

Deploy the image to OpenShift.
```
<ADD_CMD_HERE>
```


## Update the Port to 3001


## View the Deployed Application


##Login to the App w App ID OAuth!







# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start` or `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

