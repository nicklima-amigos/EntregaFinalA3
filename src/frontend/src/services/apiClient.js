const baseURL = import.meta.env.VITE_API_URL
  ? import.meta.env.VITE_API_URL
  : "http://localhost:3000";

export const apiClient = {
  get: (endpoint, options = {}) => {
    return fetchFromBaseUrl(endpoint, undefined, options);
  },
  post: (endpoint, requestData, options = {}) => {
    return fetchFromBaseUrl(endpoint, requestData, {
      method: "POST",
      ...options,
    });
  },
  put: (endpoint, requestData, options = {}) => {
    return fetchFromBaseUrl(endpoint, requestData, {
      method: "PUT",
      ...options,
    });
  },
  delete: (endpoint, options = {}) => {
    return fetchFromBaseUrl(endpoint, undefined, {
      method: "DELETE",
      ...options,
    });
  },
};

const fetchFromBaseUrl = async (endpoint, requestData, options) => {
  const defaultHeaders = {
    "Content-Type": "application/json",
  };
  const body = JSON.stringify(requestData);
  const response = await fetch(`${baseURL}${endpoint}`, {
    ...options,
    body,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`Error fetching ${endpoint}: ${errorData.message}`);
  }
  const status = response.status;
  const data = await response.json();
  return {
    status,
    data,
  };
};
