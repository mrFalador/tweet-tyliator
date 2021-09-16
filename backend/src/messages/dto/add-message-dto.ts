export class AddMessageDto {
    readonly value: number;
    readonly operation: string;
    readonly masterId: number;
    readonly parentId: number;
}

export interface RenderTree{
    id: string;
    name: string;
    children?: RenderTree[];
}