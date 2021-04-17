# GraphQL API + React Example

This repository is an example application that shows how to create a GraphQL API and consume it from React.

Please read [Quickly Consume a GraphQL API from React](https://developer.okta.com/blog/2020/11/23/quick-graphql-react-app) for a tutorial that explains how to build this example.

## Getting Started

**Prerequisites:** [Node 14](https://nodejs.org).

To install this example, run the following commands:

```sh
git clone https://github.com/oktadeveloper/okta-graphql-api-react-example.git graphql-api
cd graphql-api
```

Run `npm install` to install all this project's dependencies.

### Create an OIDC App on Okta

To Begin, install the [Okta CLI](https://cli.okta.com/), open a new terminal window, and run `okta register` to sign up for a new account. If you already have an account, run `okta login`. Then, run `okta apps create`. Select the default app name, or change it as you see fit. Choose **Single-Page App** and press **Enter**.

Use `http://localhost:3000/callback` for the Redirect URI and accept the default Logout Redirect URI of `http://localhost:3000`.

Copy your Okta settings to a `.env` file in the root directory of your cloned app.

```env
REACT_APP_OKTA_CLIENTID={yourOktaClientId}
REACT_APP_OKTA_URL_BASE=https://{yourOktaDomain}
REACT_APP_OKTA_APP_BASE_URL=http://localhost:3000
REACT_APP_EVERBASE_API_KEY={yourEverbaseApiKey}
```

When the installation completes, run `npm start` and marvel at your React app with OIDC authentication!

For the Everbase API key, please read [the blog post](http://localhost:4000/blog/2020/11/23/quick-graphql-react-app). 

## Help

Please post any questions as comments on this repo's [blog post](http://localhost:4000/blog/2020/11/23/quick-graphql-react-app), or visit our [Okta Developer Forums](https://devforum.okta.com/). 

## License

Apache 2.0, see [LICENSE](LICENSE).
 
