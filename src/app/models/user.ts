export interface User {
    uuid?: string;
    username: string;
    email: string;
    password: string;
    role: 'ADMIN' | 'USER';
    enable: boolean;
    created_at: Date;
    updated_at?: Date;
}
