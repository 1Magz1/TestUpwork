/* eslint-disable  @typescript-eslint/no-explicit-any */

export interface IHTTPClient {
  $get: (url: string, config?: any) => any;
  $post: (url: string, data?: any, config?: any) => any;
}

let axios: any;

const setHTTPClientInstance = (instance: any): void => {
  axios = instance;
};

const $get = (url: string, config?: any): any => axios.get(url, config || null);

const $post = (url: string, data?: any, config?: any): any =>
  axios.post(url, data, config);

export default {
  $get,
  $post,
} as IHTTPClient;

export { setHTTPClientInstance };

/* eslint-enable  @typescript-eslint/no-explicit-any */
