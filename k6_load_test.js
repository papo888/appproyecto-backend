import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 10,
  duration: "15s",
};

const BASE = "http://localhost:3000";

export default function () {
  // Registro (ignorar si ya existe)
  http.post(`${BASE}/auth/register`, JSON.stringify({
    email: "loadtest@example.com",
    password: "123456",
  }), {
    headers: { "Content-Type": "application/json" }
  });

  // Login
  const loginRes = http.post(`${BASE}/auth/login`, JSON.stringify({
    email: "loadtest@example.com",
    password: "123456",
  }), {
    headers: { "Content-Type": "application/json" }
  });

  const token = loginRes.json("token");

  check(loginRes, {
    "login status 200": (res) => res.status === 200,
    "login devuelve token": () => token !== undefined,
  });

  // Progress
  const progRes = http.get(`${BASE}/progress/weekly`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  check(progRes, {
    "progress status 200": (res) => res.status === 200,
  });

  sleep(1);
}

