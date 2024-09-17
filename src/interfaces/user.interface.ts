interface UserPayload {
    token: string,
    user: UserPayloadDetail;
}

interface UserPayloadDetail {
    createdAt: Date;
    email: string;
    deletedAt: Date;
    firstName: string;
    id: number;
    lastName: string;
    updatedAt: Date;
    photo: string;
    provider: string;
    socialId: string;
    status: IUserStatus
    role: IRole;
}

interface IUserStatus {
    id: string;
    name: string
}

interface IRole {
    id: string;
    name: string;
}

export {
    UserPayload,
    UserPayloadDetail,
    IUserStatus,
    IRole
}
