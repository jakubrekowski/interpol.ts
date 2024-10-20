import { InterpolService } from "./InterpolService";

describe("InterpolService", () => {
  let noticeID: string;

  describe("getRedNotices", () => {
    it("should return red notices when API call is successful", async () => {
      const redNotices = await InterpolService.getRedNotices();
      expect(redNotices).toBeDefined();
      expect(Array.isArray(redNotices._embedded.notices)).toBe(true);
      expect(redNotices._embedded.notices.length).toBeGreaterThan(0);

      if (redNotices._embedded.notices.length > 0) {
        noticeID = redNotices._embedded.notices[0].entity_id.replace("/", "-");
        expect(noticeID).toBeTruthy();
      } else {
        console.warn("No red notices found. Subsequent tests may fail.");
      }
    });

    it("should handle empty result", async () => {
      const redNotices = await InterpolService.getRedNotices({
        name: "imposibble-name",
      });
      expect(redNotices).toBeDefined();
      expect(Array.isArray(redNotices._embedded.notices)).toBe(true);
      expect(redNotices._embedded.notices.length).toBe(0);
    });
  });

  describe("getRedNoticeDetails", () => {
    it("should return red notice details when API call is successful", async () => {
      expect(noticeID).toBeTruthy();

      const noticeDetails = await InterpolService.getRedNoticeDetails(noticeID);
      expect(noticeDetails).toBeDefined();
      expect(noticeDetails.entity_id).toBe(noticeID.replace("-", "/"));
    });

    it("should throw an error when API call fails by providing an invalid notice ID", async () => {
      await expect(InterpolService.getRedNoticeDetails("invalid-notice-id")).rejects.toThrow();
    });
  });

  describe("getRedNoticeDetailImages", () => {
    it("should return red notice detail images when API call is successful", async () => {
      expect(noticeID).toBeTruthy();

      const images = await InterpolService.getRedNoticeDetailImages(noticeID);
      expect(images).toBeDefined();
      expect(Array.isArray(images._embedded.images)).toBe(true);
    });

    it("should throw an error when API call fails by providing an invalid notice ID", async () => {
      await expect(InterpolService.getRedNoticeDetails("invalid-notice-id")).rejects.toThrow();
    });
  });
});
