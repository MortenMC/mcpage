export type Action = { type: string, payload: any }
export const actionFactory = (type: string) => (payload: any): Action => ({ type, payload });

export const SET_COLOR = 'SET_COLOR';
export const setColor = actionFactory(SET_COLOR)