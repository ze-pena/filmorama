type RequestOptions = {
  method: string;
  headers: {
    accept: string;
    Authorization: string;
  };
};

export async function fetchRequest<T>(
  url: string,
  options: RequestOptions
): Promise<T> {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const responseJSON = (await response.json()) as T;
  return responseJSON;
}
