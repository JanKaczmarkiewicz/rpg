import { HttpMethod } from '@rpg/backend/src/constants/constants';
import { CreateMapBody, CreateMapResponse } from '@rpg/backend/src/routes/maps/createMap';
import { DeleteMapParams } from '@rpg/backend/src/routes/maps/deleteMap';
import { GetMapParams, GetMapResponse } from '@rpg/backend/src/routes/maps/getMap';
import { GetMapsResponse } from '@rpg/backend/src/routes/maps/getMaps';

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

    map = () => ({
        create: (payload: CreateMapBody) =>
            request<CreateMapResponse>({ url: this.mapRoute, body: payload, method: HttpMethod.Post }),
        getOne: ({ id }: GetMapParams) =>
            request<GetMapResponse>({ url: `${this.mapRoute}/${id}`, method: HttpMethod.Get }),
        getMany: () => request<GetMapsResponse>({ url: this.mapRoute, method: HttpMethod.Get }),
        deleteOne: ({ id }: DeleteMapParams) => request({ url: `${this.mapRoute}/${id}`, method: HttpMethod.Delete }),
    });
}

export default new ApiClient();
