import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
import { RedNoticeDetailImagesEntitiy } from "../models/RedNoticeDetailImages";
import { RedNoticeDetailsEntitiy } from "../models/RedNoticeDetails";
import type { RedNoticesEntitiy, RedNoticesQuery } from "../models/RedNotices";

export class InterpolService {
  public static getRedNotices(query?: RedNoticesQuery): CancelablePromise<RedNoticesEntitiy> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/notices/v1/red",
      query,
    });
  }

  public static getRedNoticeDetails(noticeID: string): CancelablePromise<RedNoticeDetailsEntitiy> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/notices/v1/red/{noticeID}",
      path: {
        noticeID,
      },
    });
  }

  public static getRedNoticeDetailImages(
    noticeID: string,
  ): CancelablePromise<RedNoticeDetailImagesEntitiy> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/notices/v1/red/{noticeID}/images",
      path: {
        noticeID,
      },
    });
  }
}
