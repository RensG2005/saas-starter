// don't import files or modules into this file
const { APP_ENV } = process.env
let env: "production" | "development"

if (APP_ENV) {
  env = APP_ENV as "production" | "development"
} else {
  const hostname = typeof window !== "undefined" && window?.location?.hostname
  if (hostname) {
    if (hostname.includes("boilerplate")) {
      env = "production"
    } else {
      env = "development"
    }
  } else {
    env = "development"
  }
}

export const IS_PRODUCTION = env === "production"
export const IS_DEV = !IS_PRODUCTION
export const REDIRECT_PATH = "redirect"

export const SENTRY_DSN = "https://0f43770bca5b4cd29f420e2b0ee4e091@o952244.ingest.sentry.io/5901614"

export const API_URL = IS_PRODUCTION ? "https://boilerplate.graphcdn.app" : "http://localhost:5000/graphql"
// export const API_URL = IS_PRODUCTION
//   ? "https://nq-boilerplate.herokuapp.com/graphql"
//   : "http://localhost:5000/graphql"

export const WEB_URL = IS_PRODUCTION ? "boilerplate.noquarter.co" : "localhost:3000"

export const SESSION_TOKEN = "boilerplate.session.token"
