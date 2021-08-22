// don't import files or modules into this file
const { NODE_ENV } = process.env

export const IS_PRODUCTION = NODE_ENV === "production"
export const IS_DEV = NODE_ENV === "development"

export const SENTRY_DSN = "https://0f43770bca5b4cd29f420e2b0ee4e091@o952244.ingest.sentry.io/5901614"
export const API_URL = IS_PRODUCTION
  ? "https://nq-boilerplate.herokuapp.com/graphql"
  : "http://localhost:5000/graphql"

export const WEB_URL = IS_PRODUCTION ? "boilerplate.noquarter.co" : "localhost:3000"

export const SESSION_TOKEN = "boilerplate.session.token"
