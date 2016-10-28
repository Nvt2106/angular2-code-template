export class User {
	id: number;
    username: string;
    first_name: string;
    last_name: string;
    token: string;
    full_name: string;

    getFullName(): string {
    	return this.first_name + ' ' + this.last_name;
    }
}