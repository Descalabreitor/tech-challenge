import { apiRequest } from "./apiClient";
import { Company } from "../types/Company";

export const getAllCompanies = async (): Promise<Company[]> => {
  return apiRequest("/companies", "get");
};

export const getCompanyById = async (id: number): Promise<Company[]> => {
  return apiRequest(`/companies/${id}`, "get");
};

export const createCompanyDB = async (
  company: Omit<Company, "id">
): Promise<Company> => {
  return apiRequest("/companies", "post", company);
};

export const updateCompanyDB = async (
  id: number,
  post: Omit<Company, "id">
): Promise<Company> => {
  return apiRequest(`/companies/${id}`, "put", post);
};

export const deleteCompanyDB = async (id: number): Promise<void> => {
  return apiRequest(`/companies/${id}`, "delete");
};
