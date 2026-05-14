import axios from "axios"

const rawBaseURL = import.meta.env.VITE_API_URL ?? "http://localhost:5000"
const baseURL = rawBaseURL.endsWith("/api")
  ? rawBaseURL
  : `${rawBaseURL.replace(/\/$/, "")}/api`

export default axios.create({
  baseURL,
  withCredentials: true,
})