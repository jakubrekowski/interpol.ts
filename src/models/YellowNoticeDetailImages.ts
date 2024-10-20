/**
 * Represents the Yellow Notice Detail Images.
 */
export type YellowNoticeDetailImagesEntity = {
  /**
   * Contains embedded images.
   */
  _embedded: {
    /**
     * Array of image objects.
     */
    images: {
      /**
       * The ID of the picture.
       */
      picture_id: string;
      /**
       * Links related to the image.
       */
      _links: {
        /**
         * Link to the image itself.
         */
        self: {
          href: string;
        };
      };
    }[];
  };
  /**
   * Links related to the yellow notice.
   */
  _links: {
    /**
     * Link to the yellow notice detail images.
     */
    self: {
      href: string;
    };
    /**
     * Link to the notice.
     */
    notice: {
      href: string;
    };
    /**
     * Link to the thumbnail image.
     */
    thumbnail: {
      href: string;
    };
  };
};
