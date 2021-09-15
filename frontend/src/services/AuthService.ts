import { AxiosResponse } from 'axios'
import $api from "../http";
import { AuthResponse } from '../models/AuthResponse';

export default class AuthService {
    static async login(name: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/login', { name, password })
    }

    static async registration(name: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/registration', { name, password })
    }
}