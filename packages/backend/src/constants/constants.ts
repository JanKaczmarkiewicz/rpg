export const CONTENT_DISCRIMINATION_KEY = 'kind';

export enum Model {
    Map = 'MapModel',
    Enemy = 'EnemyModel',
    Npc = 'NpcModel',
}

export enum ContentKind {
    Enemy = 'Enemy',
    Npc = 'Npc',
    Wall = 'Wall',
    Empty = 'Empty',
}

export enum ResponseStatus {
    NotFound = 404,
    Success = 200,
    BadRequest = 400,
    Created = 201,
}

export enum HttpMethod {
    Get = 'GET',
    Post = 'POST',
}
