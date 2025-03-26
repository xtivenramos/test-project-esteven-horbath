export interface IBaseModel {
    id?: number;
    createdBy?: number;
    createdAt?: Date;
    updatedBy?: number;
    updatedAt?: Date;
    deletedBy?: number;
    deletedAt?: Date;
    status?: boolean;
}
