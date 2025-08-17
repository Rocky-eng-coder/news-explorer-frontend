const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const fetchNews = async (query) => {
  const today = new Date();
  const lastWeek = new Date(today);
  lastWeek.setDate(today.getDate() - 7);

  const from = lastWeek.toISOString().split("T")[0];
  const to = today.toISOString().split("T")[0];

  const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
    query
  )}&from=${from}&to=${to}&sortBy=publishedAt&language=en&pageSize=30&apiKey=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();
  return data.articles;
};
