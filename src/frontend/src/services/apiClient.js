const baseURL = import.meta.env.VITE_API_URL
  ? import.meta.env.VITE_API_URL
  : "http://localhost:3000";

export const apiClient = {
  get: (endpoint, options = {}) => {
    return fetchFromBaseUrl(endpoint, undefined, {
      ...options,
      method: "GET",
    });
  },
  post: (endpoint, requestData, options = {}) => {
    return fetchFromBaseUrl(endpoint, requestData, {
      ...options,
      method: "POST",
    });
  },
  put: (endpoint, requestData, options = {}) => {
    return fetchFromBaseUrl(endpoint, requestData, {
      ...options,
      method: "PUT",
    });
  },
  delete: (endpoint, options = {}) => {
    return fetchFromBaseUrl(endpoint, undefined, {
      ...options,
      method: "DELETE",
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

  try {
    const data = await response.json();
    return {
      status,
      data,
    };
  } catch {
    return { status };
  }
};
