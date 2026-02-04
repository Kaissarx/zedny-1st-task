import api from "./api";

export const loginRequest = async (email, password) => {
  // Example real implementation (requires backend):
  // const response = await api.post("/auth/login", { email, password });
  // return response.data;

  // For now we keep this unused and rely on mocked login in AuthContext.
  // This shows how we would structure real API calls.
  const response = await api.post("/auth/login", { email, password });
  return response.data;
};

