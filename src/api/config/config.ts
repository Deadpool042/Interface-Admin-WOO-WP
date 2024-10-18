const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  woocommerce: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL,
    consumerKey: process.env.NEXT_PUBLIC_CONSUMER_KEY,
    consumerSecret: process.env.NEXT_PUBLIC_CONSUMER_SECRET
  },
  wordpress: {
    apiUrl: process.env.NEXT_PUBLIC_WP_BASE_URL,
    username: process.env.NEXT_PUBLIC_WP_USERNAME,
    applicationPassword: process.env.WP_APPLICATION_PASSWORD // variable privée
  },
  auth: {
    baseUrl: process.env.NEXT_PUBLIC_AUTH_BASE_URL
  },
  session: {
    secret: process.env.SESSION_SECRET // variable privée
  }
};

export default config;
