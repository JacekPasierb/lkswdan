const attempts = new Map();

export function rateLimit(ip: string) {
  const now = Date.now();

  const data = attempts.get(ip) || {
    count: 0,
    time: now,
  };

  if (now - data.time > 60000) {
    data.count = 0;
    data.time = now;
  }

  data.count++;

  attempts.set(ip, data);

  if (data.count > 5) {
    throw new Error("Za dużo prób logowania");
  }
}
