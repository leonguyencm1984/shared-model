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
    status: Status
    role: Role;
}

interface Status {
    id: string;
    name: string
}

interface Role {
    id: string;
    name: string;
}

export {
    UserPayload,
    UserPayloadDetail,
    Status,
    Role
}
