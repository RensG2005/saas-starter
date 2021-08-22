// ENV VARIABLES
export const {
  NODE_ENV = "development",
  APP_ENV = "development",
  APP_SECRET = "AqD#@sdal23a4va2Sdweqs3o!lq1oiue1wrgh34",
  APOLLO_KEY = "APOLLO_KEY",
  APP_AUTH_SECRET = "APP_AUTH_SECRET",
  SENTRY_DSN = "https://0f43770bca5b4cd29f420e2b0ee4e091@o952244.ingest.sentry.io/5901614",
  SENDGRID_API_KEY = "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",
  PORT = 5000,
  DATABASE_URL = "",
  WEB_URL = "localhost:3001",
  REDIS_URL = "localhost:6379",
} = process.env

// IS PRODUCTION
export const IS_PRODUCTION = APP_ENV === "production"

//  JWT AUTH
export const JWT_AUTH = {
  secret: APP_AUTH_SECRET,
  credentialsRequired: false,
  algorithms: ["HS256"],
}

// GRAPHQL PATH
export const GRAPHQL_PATH = "/graphql"

// RESOLVER PATHS
export const RESOLVER_PATHS = "/modules/**/*resolver.{js,ts}"

// HOOK PATHS
export const HOOK_PATHS = "/modules/**/*hooks.{js,ts}"

// WEB URL
export const FULL_WEB_URL = `${IS_PRODUCTION ? "https://" : "http://"}${WEB_URL}`

// DEV EMAIL
export const DEV_EMAIL_OPTIONS: any = {
  host: "localhost",
  port: 1025,
  secure: false,
  debug: true,
  ignoreTLS: true,
}
