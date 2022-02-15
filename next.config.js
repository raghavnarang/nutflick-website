/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["@shopify/hydrogen"]);

const nextConfig = withTM({
  reactStrictMode: true,
});

module.exports = nextConfig
