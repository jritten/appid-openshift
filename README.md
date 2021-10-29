# [[HACKTOBERFEST] Add Google/Facebook OAuth to a React App & Deploy to OpenShift](https://www.crowdcast.io/e/appid-openshift)

### Create an [**IBM Cloud Account**](https://ibm.biz/appid-openshift).

You will only be using the Free Lite Tier services.

#### 1. [Add Facebook/Google OAuth to a React App w IBM App ID](./README.md#add-facebookgoogle-oauth-to-a-react-app-w-ibm-app-id)

#### 2. [Push Your Code to GitHub](./README.md#push-your-code-to-github)

#### 3. [Build a Container Image and Push to Docker Hub](./README.md#build-a-container-image-and-push-to-docker-hub)

#### 4. [Deploy a React App to Red Hat OpenShift](./README.md#deploy-a-react-app-to-red-hat-openshift)

#### 5. [Login to the App w App ID OAuth](./README.md#login-to-the-app-w-app-id-oauth)


## [Add Facebook/Google OAuth to a React App w IBM App ID](https://docs.google.com/presentation/d/1L9JfBOWnQzKl9bYDkZ6lWRrij530Vg3pVBL2BZ-Gwgs/edit?usp=sharing)

### Create an Instance of App ID

Create an App ID Instance; Choose the Lite Tier Plan

From the menu on the right, select **Applications**.

Click **Add Application**.

Add a **Name**, and select **Single-page application** from the **Type** dropdown menu.

Expand and view the app credentials. Note the **cliendID** and the **discoveryEndpoint**. We'll need these later.


### [Create a React App](https://reactjs.org/docs/create-a-new-react-app.html)

Create a React app below, clone this repo, or use the [sample app](https://github.com/IBM-Developer-Austin/appid-sample-code-snippets).

**Note:** If it's been a while since you've used the `create-react-app` command, it has been depricated. You will need to uninstall and re-rerun the command.

Uninstall `create-react-app` command globally from both npm and yarn:

uninstall from npm
```
npm uninstall -g create-react-app
```
uninstall from yarn
```
yarn global remove create-react-app
```

Re-run the `create-react-app` command to setup a frontend build pipeline; give your app a name:
```
npx create-react-app <APP_NAME>
```
```
npx create-react-app appid-openshift
```

Move into your project directory:
```
cd  <APP_NAME>
```
```
cd appid-openshift
```

[See Documentation](https://reactjs.org/docs/create-a-new-react-app.html)


### [Add **react-dotenv** to the App](https://www.npmjs.com/package/react-dotenv)

Load environment variables dynamically for your React applications created with CRA (Create-React-App).

Install the react-dotenv package:
```
npm install react-dotenv
```

Open your project's package.json file and: (already updated in the package.json)
- Add an .env file to your project root (or just load from the system environment variables).
```
touch .env
```
- Add an appid-openshift.env file to your project root (or just load from the system environment variables).
```
touch appid-openshift.env
```
- Add the react-dotenv NPM command to your start, build (and your serve commands).
- Add the react-dotenv.whitelist property to package.json to specify which variables you need exposed.

[See Documentation](https://www.npmjs.com/package/react-dotenv)


### Add App ID to the App & [Add App ID Credentials to **.env**](https://create-react-app.dev/docs/adding-custom-environment-variables/)

Install the IBM Cloud App ID SDK:
```
npm install ibmcloud-appid-js
```

In the `/src` folder of the app, open `App.js` in your text editor. ([see sample app's App.js](https://github.com/jritten/UF_Hacks_Starter_Kit/blob/main/Starter_Kit_1/ibm-react-app/src/App.js))

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
```
npm start
```

Update the **redirect_uri** in the App ID dashboard in the **Authentication Settings** under the **Manage Authentication** tab on the left.

**DO NOT SKIP: Add web direct URLs**
```
http://localhost:3000
```

[See Documentation](https://create-react-app.dev/docs/adding-custom-environment-variables/)


### View the Live Application

View your locally deployed application!
```
http://localhost:3000
```


## Push Your Code to GitHub

Commit your changes to the local project directory.

```
git add .env
git commit -m "Add .env file for environment variables."
git add appid-openshift.env
git commit -m "Add appid-openshift.env file for openshift environment variables."
git add App.js
git commit -m "Update React app w App ID instance login."
git add .
git commit -m "Update React app w react-dotenv and ibmcloud-appid-js."
```

Create a new GitHub repository; add a **Repository name**, and click **Create repository**.

**Note:** Initialize the repo with a name and an MIT license.

Clone the Starter-Kit repo, copy the ibm-react-app into a new directory, add the remote origin to the local initialized project, and set it upstream.
Push your code from the CLI to the new repository.
```
git remote add origin https://github.com/<PROFILE_NAME>/<REPO_NAME>.git
git branch -M main
git pull -u origin main --allow-unrelated-histories
git push origin main
```

**Now you're good to go!**


## [Build a Container Image and Push to Docker Hub]()

### Add a Dockerfile to the App

Add a Dockerfile to the app from the example in the repo. See below.

```
touch Dockerfile
```

[**<HOW_TO_DOCKERFILE>**](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/) ([see sample app's Dockerfile](https://github.com/jritten/appid-openshift/blob/main/Dockerfile))

Commit your changes, and push your code from the CLI to the repo.
```
git add Dockerfile
git commit -m "Add Dockerfile to the app repo."
git push origin main
```

### Run the App Locally w Docker Desktop

Build a container image w Docker.
```
docker build . --tag appid-openshift
```

Run the image w Docker Desktop.
```
docker run appid-openshift
```

View the app.
```
docker run appid-openshift
```


### Push the Container Image to Docker Hub

 Tag the docker image.
```
docker tag appid-openshift <DOCKERHUB_REPO>/appid-openshift:latest
```

Push the image to Docker Hub.
```
docker push <DOCKERHUB_REPO>/appid-openshift:latest
```

Copy the image location from the output.
```
The push refers to repository [docker.io/<DOCKERHUB_REPO>/appid-openshift]
```


## [Deploy a React App to Red Hat OpenShift](https://ibm.biz/appid-openshift-slides)

### Login to Your IBM Cloud Account w the IBM Cloud CLI

Login to your IBM Cloud account.
```
ibmcloud login
```

View available resource groups.
```
ibmcloud resource groups
```

Assign a target resource group.
```
ibmcloud target -g Default
```

Update the Region to **eu-gb**.
```
ibmcloud target -r eu-gb
```


### Create a Code Engine Project

Create a new Code Engine project and give it a name.
```
ibmcloud ce project create --name <NAME>
```
```
ibmcloud ce project create --name ufhacks
```

Verify you're in the newly created project.
```
ibmcloud ce project current
```

OPTIONAL: View your list of CE projects.
```
ibmcloud ce project list
```

OPTIONAL: Select the CE project you want to use.
```
ibmcloud ce project --name <NAME>
```
```
ibmcloud ce project --name ufhacks
```


### Create a Code Engine Application

Create a new Code Engine application and give it a name.
```
WE WILL DO THIS FROM THE UI
```


### Deploy the App to OpenShift from a Container Image

Deploy the app to CE from a container image. (by default, CE uses Dockerhub registries for repos containtining a Dockerfile unless specified otherwise)
```
ibmcloud ce application create --name ibm-react-app --image ibmcom/ibm-react-app
```

Get the app URL.
```
ibmcloud ce application get -n ibm-react-app -output url
```


### DO NOT SKIP: Add the `<OUTPUT_URL>` to package.json

Update the package.json react-dotenv.whitelist property URL to the Code Engine app URL.
```
    "react-dotenv": {
    "whitelist": ["<OUTPUT_URL>"]
  }
```


### DO NOT SKIP: Add the `<OUTPUT_URL>` to App ID Redirect URIs

Update the **redirect_uri** in the App ID dashboard in the **Authentication Settings** under the **Manage Authentication** tab on the left.

**Add web direct URL**
```
<OUTPUT_URL>
```


### View the Deployed Application

View your serverless app deployed to Code Engine!
```
<OUTPUT_URL>
```


## Login to the App w App ID OAuth!

Login to your app with Facebook OAuth, Google OAuth, and IBM Cloud Directory!
```
<TEST_IT_OUT!>
```




<!-- OPTIONAL: INJECT ENVIRONMENT VARIABLES TO THE APP W OPENSHIFT -->
## [Add App ID Credentials to OpenShift via the CLI or Dashboard](https://cloud.ibm.com/docs/codeengine?topic=codeengine-configmap-secret)

Create a new CE secret reference.
```
ibmcloud ce app update --name ibm-react-app --env-from-secret secrets
```



## [Connect w Me!](https://linktr.ee/jritten)

