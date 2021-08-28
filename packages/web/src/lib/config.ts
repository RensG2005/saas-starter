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

//TODO
// export const SENTRY_DSN = env(SENTRY_DSN)

export const API_URL = IS_PRODUCTION ? "https://memorylia.herokuapp.com/graphql" : "http://localhost:5000/graphql"

export const WEB_URL = IS_PRODUCTION ? "https://saas-starter-navy.vercel.app/" : "localhost:3000"

export const SESSION_TOKEN = "boilerplate.session.token"
