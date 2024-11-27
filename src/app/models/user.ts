export class User {
    uuid!: string;
    user: string;
    email: string;
    password: string;
    role: 'ADMIN' | 'USER';
    enable: boolean;
    created_at: Date;
    updated_at?: Date;

    constructor() {
        this.user = "";
        this.email = "";
        this.password = "";
        this.role = "USER";
        this.enable = true;
        this.created_at = new Date();
    }
}
