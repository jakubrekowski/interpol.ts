import { InterpolService } from "./InterpolService";

describe("InterpolService", () => {
  let noticeID: string;

  it("should get red notices", async () => {
    const result = await InterpolService.getRedNotices();
    expect(result).toBeDefined();
    noticeID = result._embedded.notices.pop().entity_id.replace("/", "-");
  });

  it("should get red notice details", async () => {
    const result = await InterpolService.getRedNoticeDetails(noticeID);
    expect(result).toBeDefined();
  });

  it("should get red notice detail images", async () => {
    const result = await InterpolService.getRedNoticeDetailImages(noticeID);
    expect(result).toBeDefined();
  });
});
