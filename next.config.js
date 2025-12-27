const path = require("path")

const imagesDomains = process.env.UPLOAD_DOMAINS
    ? process.env.UPLOAD_DOMAINS.split(",")
    : []

/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "style")],
    },
    images: {
        domains: imagesDomains,
    },
}

module.exports = nextConfig
