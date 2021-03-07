import { HttpMethod } from '@rpg/backend/src/constants/constants';
import { CreateMapBody, CreateMapResponse } from '@rpg/backend/src/routes/maps/createMap';
import { DeleteMapParams } from '@rpg/backend/src/routes/maps/deleteMap';
import { GetMapParams, GetMapResponse } from '@rpg/backend/src/routes/maps/getMap';
import { GetMapsResponse } from '@rpg/backend/src/routes/maps/getMaps';
import { CreateEnemyBody, CreateEnemyResult } from '@rpg/backend/src/routes/enemies/createEnemy';
import { GetEnemyParams, GetEnemyResult } from '@rpg/backend/src/routes/enemies/getEnemy';
import { GetEnemiesResponse } from '@rpg/backend/src/routes/enemies/getEnemies';
import { DeleteEnemyParams, DeleteEnemyResponse } from '@rpg/backend/src/routes/enemies/deleteEnemy';

type RequestOptions = Omit<RequestInit, 'body'> & { url: string; body?: Record<string, any> };

const request = async <T>({ url, body, ...options }: RequestOptions): Promise<T> => {
    const res = await fetch(url, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : undefined,
    });
    return res.json();
};

class ApiClient {
    baseUrl: string = 'http://localhost:3001/api';
    mapRoute: string = `${this.baseUrl}/maps`;
    enemyRoute: string = `${this.baseUrl}/enemies`;

    map = {
        create: (payload: CreateMapBody) =>
            request<CreateMapResponse>({ url: this.mapRoute, body: payload, method: HttpMethod.Post }),
        getOne: ({ id }: GetMapParams) =>
            request<GetMapResponse>({ url: `${this.mapRoute}/${id}`, method: HttpMethod.Get }),
        getMany: () => request<GetMapsResponse>({ url: this.mapRoute, method: HttpMethod.Get }),
        deleteOne: ({ id }: DeleteMapParams) => request({ url: `${this.mapRoute}/${id}`, method: HttpMethod.Delete }),
    };

    enemy = {
        create: (payload: CreateEnemyBody) =>
            request<CreateEnemyResult>({ url: this.enemyRoute, body: payload, method: HttpMethod.Post }),
        getOne: ({ id }: GetEnemyParams) =>
            request<GetEnemyResult>({ url: `${this.enemyRoute}/${id}`, method: HttpMethod.Get }),
        getMany: () => request<GetEnemiesResponse>({ url: this.enemyRoute, method: HttpMethod.Get }),
        deleteOne: ({ id }: DeleteEnemyParams) =>
            request<DeleteEnemyResponse>({ url: `${this.enemyRoute}/${id}`, method: HttpMethod.Delete }),
    };
}

export default new ApiClient();
