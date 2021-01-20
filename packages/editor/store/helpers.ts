export const createAction = <Payload extends object, T extends string>(type: T) => (payload: Payload) => ({
    type,
    payload,
});
