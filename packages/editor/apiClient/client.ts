export type RequestOptions = Omit<RequestInit, 'body'> & { url: string; body?: Record<string, any> };

export const client = async <T>({ url, body, ...options }: RequestOptions): Promise<T> => {
    const res = await fetch(`http://localhost:3001/api${url}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : undefined,
    });
    return res.json();
};
