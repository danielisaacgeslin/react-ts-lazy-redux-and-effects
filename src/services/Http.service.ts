export interface Request extends RequestInit {
  raw: boolean;
  params: {
    [key: string]: any
  };
}

export default class HttpService {
  public static async request<T>(url: string, config: Request): Promise<T> {
    const params: string = HttpService.parseParams(config.params);
    const res = await fetch(`${url}${params}`, config);
    return config.raw ? res : res.json();
    /** @todo format body */
  }

  public static async get<T>(url: string, config: Request): Promise<T> {
    return HttpService.request<T>(url, { ...config, method: 'GET' });
  }

  public static async post<T>(url: string, config: Request): Promise<T> {
    return HttpService.request<T>(url, { ...config, method: 'POST' });
  }

  public static async put<T>(url: string, config: Request): Promise<T> {
    return HttpService.request<T>(url, { ...config, method: 'PUT' });
  }

  public static async delete<T>(url: string, config: Request): Promise<T> {
    return HttpService.request<T>(url, { ...config, method: 'DELETE' });
  }

  public static async patch<T>(url: string, config: Request): Promise<T> {
    return HttpService.request<T>(url, { ...config, method: 'PATCH' });
  }

  public static async head<T>(url: string, config: Request): Promise<T> {
    return HttpService.request<T>(url, { ...config, method: 'HEAD', raw: true });
  }

  private static parseParams(params: { [key: string]: any }): string {
    if (!params) return '';
    return '?' + Object.keys(params)
      .map(key => `${key}=${JSON.stringify(params[key])}`)
      .join('&');
  }
}
