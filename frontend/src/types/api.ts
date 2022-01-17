export type ResponseBase<T> = {
  data: T;
};
export type SinglePlayerGameCreationResponse = ResponseBase<{
  id: number;
}>;
