import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
import { RedNoticeDetailImagesEntity } from "../models/RedNoticeDetailImages";
import { RedNoticeDetailsEntity } from "../models/RedNoticeDetails";
import type { RedNoticesEntity, RedNoticesQuery } from "../models/RedNotices";
import { YellowNoticeDetailImagesEntity } from "../models/YellowNoticeDetailImages";
import { YellowNoticeDetailsEntity } from "../models/YellowNoticeDetails";
import { YellowNoticesEntity, YellowNoticesQuery } from "../models/YellowNotices";

export class InterpolService {
  public static getRedNotices(query?: RedNoticesQuery): CancelablePromise<RedNoticesEntity> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/notices/v1/red",
      query,
    });
  }

  public static getRedNoticeDetails(noticeID: string): CancelablePromise<RedNoticeDetailsEntity> {
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
  ): CancelablePromise<RedNoticeDetailImagesEntity> {
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
  ): CancelablePromise<YellowNoticesEntity> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/notices/v1/yellow",
      query,
    });
  }

  public static getYellowNoticeDetails(
    noticeID: string,
  ): CancelablePromise<YellowNoticeDetailsEntity> {
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
  ): CancelablePromise<YellowNoticeDetailImagesEntity> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/notices/v1/yellow/{noticeID}/images",
      path: {
        noticeID,
      },
    });
  }
}
