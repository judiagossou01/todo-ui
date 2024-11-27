export class Todo {
    id!: number;
    title: string;
    description?: string;
    body: string;
    completed: boolean;
    userUUID: string;
    created_at: Date;

    constructor() {
        this.title = "";
        this.description = "";
        this.body = "";
        this.completed = true || false;
        this.userUUID = "";
        this.created_at = new Date();
    }
}
