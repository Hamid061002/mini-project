// api/apiInstance.js
// این فایل یک instance مشترک برای fetch به API ایجاد می‌کند

const BASE_URL = "http://127.0.0.1:5000/api"; // آدرس backend

export const apiInstance = async (endpoint) => {
  const url = `${BASE_URL}${endpoint}`;

  // const defaultOptions = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };

  // const mergedOptions = { ...options };

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "API Error");
    return data;
  } catch (err) {
    console.error("API Error:", err);
    throw err;
  }
};
