import { useEffect, useState } from 'react';
import 'isomorphic-fetch';
import { client, RequestOptions } from '../apiClient/client';

const useQuery = <T>(options: RequestOptions): { isLoading: boolean; result: null | T } => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [result, setResult] = useState<T | null>(null);

    useEffect(() => {
        client<T>(options).then((res: T) => {
            setResult(res);
            setIsLoading(false);
        });
    }, []);
    return { isLoading, result };
};

export default useQuery;
