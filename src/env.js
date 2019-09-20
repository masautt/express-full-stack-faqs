const isPROD = process.env.NODE_ENV === "production"
const PORT = isPROD ? 443 : 8080;
const URL = isPROD ? `https://fullstackfaqs.com/api` : `http://localhost:${PORT}`

module.exports = {
    PORT : PORT,
    URL: URL,
    isPROD : isPROD
}