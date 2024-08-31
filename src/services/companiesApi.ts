import { apiRequest } from "./apiClient";
import { Company } from '../types/Company';

export const getCompany = async(): Promise<Company[]> => {
    return apiRequest('/Companies', 'get')
}

export const getCompanyById = async(id: number): Promise<Company[]> => {
    return apiRequest(`/Companies/${id}`, 'get')
}

export const createCompany = async(company: Omit<Company, 'id'>): Promise<Company> => {
    return apiRequest('/Companies', 'post', company)
}

export const updateCompany = async (id: number, post: Omit<Company, 'id'>): Promise<Company> => {
    return apiRequest(`/Companies/${id}`, 'put', post);
};
  
export const deleteCompany = async (id: number): Promise<void> => {
    return apiRequest(`/Companies/${id}`, 'delete');
};