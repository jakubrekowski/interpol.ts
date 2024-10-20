import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
import { RedNoticeDetailImagesEntitiy } from "../models/RedNoticeDetailImages";
import { RedNoticeDetailsEntitiy } from "../models/RedNoticeDetails";
import type { RedNoticesEntitiy, RedNoticesQuery } from "../models/RedNotices";
import { YellowNoticeDetailImagesEntitiy } from "../models/YellowNoticeDetailImages";
import { YellowNoticeDetailsEntitiy } from "../models/YellowNoticeDetails";
import { YellowNoticesEntitiy, YellowNoticesQuery } from "../models/YellowNotices";

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

  public static getYellowNotices(
    query?: YellowNoticesQuery,
  ): CancelablePromise<YellowNoticesEntitiy> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/notices/v1/yellow",
      query,
    });
  }

  public static getYellowNoticeDetails(
    noticeID: string,
  ): CancelablePromise<YellowNoticeDetailsEntitiy> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/notices/v1/yellow/{noticeID}",
      path: {
        noticeID,
      },
    });
  }

  public static getYellowNoticeDetailImages(
    noticeID: string,
  ): CancelablePromise<YellowNoticeDetailImagesEntitiy> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/notices/v1/yellow/{noticeID}/images",
      path: {
        noticeID,
      },
    });
  }
}
