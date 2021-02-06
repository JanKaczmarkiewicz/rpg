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
}

export enum RequestStatus {
    NotFound = 404,
    Success = 200,
}
