module.exports = {
  PORT: process.env.PORT || 9000,
  FRONTEND: process.env.FRONTEND || 'http://localhost:8000',
  LOGGING: process.env.LOGGING === 'true',
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  LOG_FILE_LOCATION: process.env.LOG_FILE_LOCATION || '',
  KEYS: [process.env.SECRET],
  SECRET: process.env.SECRET || 'demosecret',
  DEFAULT_LIMIT: 100,
  DATABASE_URL: process.env.DATABASE_URL || 'postgres://demo:demo@localhost/demo',
  GOOGLE_OAUTH_ID: process.env.GOOGLE_OAUTH_ID || '',
  GOOGLE_OAUTH_SECRET: process.env.GOOGLE_OAUTH_SECRET || '',
  FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID || '',
  FACEBOOK_APP_SECRET: process.env.FACEBOOK_APP_SECRET || '',
  ACCESS_TOKEN_TTL: 12 * 60 * 60,
  REFRESH_TOKEN_TTL: 60 * 60,
  ENDPOINT: process.env.ENDPOINT || 'http://127.0.0.1:9000/api',
  NODEMAILER_SMTP_HOST: process.env.NODEMAILER_SMTP_HOST || '',
  NODEMAILER_USER: process.env.NODEMAILER_USER || '',
  NODEMAILER_PASS: process.env.NODEMAILER_PASS || '',
  DEFAULT_LOCALE: process.env.DEFAULT_LOCALE || null,
};
