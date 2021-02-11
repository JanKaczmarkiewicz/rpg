export type RequestOptions = { url: string } & RequestInit;

export const client = <T>({ url, body, ...options }: RequestOptions): Promise<T> =>
    fetch(`http://localhost:3001/api${url}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : undefined,
    }).then((res) => res.json());
