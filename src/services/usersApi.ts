import { apiRequest } from "./apiClient";
import { User } from '../types/User';

export const getUsers = async(): Promise<User[]> => {
    return apiRequest('/users', 'get')
}

export const getUserById = async(id: number): Promise<User[]> => {
    return apiRequest(`/users/${id}`, 'get')
}

export const createUser = async(user: Omit<User, 'id'>): Promise<User> => {
    return apiRequest('/users', 'post', user)
}

export const updateUser = async (id: number, post: Omit<User, 'id'>): Promise<User> => {
    return apiRequest(`/users/${id}`, 'put', post);
};
  
export const deleteUser = async (id: number): Promise<void> => {
    return apiRequest(`/users/${id}`, 'delete');
};