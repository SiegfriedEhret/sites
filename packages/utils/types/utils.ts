export interface Res<T> {
  error?: Error;
  status: number;
  body: T;
}

export type ResponseError = {
  error?: string;
};

export interface Items<T> {
  items: T;
}
