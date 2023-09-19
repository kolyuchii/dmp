export type User = {
    userId: string;
    userName?: string;
};

export type UsersMap = {
    [key: string]: User;
};
