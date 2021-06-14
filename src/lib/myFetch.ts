import { resourceLimits } from "worker_threads";

export default async function myFetch(url: string, params?: any) {
  const baseUrl: string = `{process.env.REACT_APP_BASE_URL}`;

  const urlRequest = `${baseUrl}${url}`;

  const result = await fetch(urlRequest, params);

  return result;
}
