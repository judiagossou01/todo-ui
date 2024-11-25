export interface Todo {
    id?: number;
    title: string;
    description?: string;
    body: string;
    completed: boolean;
    userUUID: string;
    created_at: Date;
}
