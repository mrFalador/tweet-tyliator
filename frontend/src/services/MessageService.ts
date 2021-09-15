import { AxiosResponse } from "axios"
import $api from "../http"
import { MessageResponse } from "../models/MessageResponse"

export default class MessageService {
    static async addMessage(value: number, operation: string, masterId: number, parentId: number): Promise <AxiosResponse<MessageResponse>>{
        return $api.post<MessageResponse>('/messages', {value, operation, masterId, parentId});
    }
    
    static async getMessages(): Promise<AxiosResponse<MessageResponse[]>>{
        return $api.get<MessageResponse[]>('/messages')
    }
}