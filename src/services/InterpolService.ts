import { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
import { RedNoticesEntitiy, RedNoticesQuery } from "../models/RedNotices";

export class InterpolService {
  public static getNoticesRed(
    query?: RedNoticesQuery
  ): CancelablePromise<RedNoticesEntitiy> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/notices/v1/red",
      query,
    });
  }
}
