/**
 * Represents a query for Yellow Notices.
 */
export interface YellowNoticesQuery {
  /**
   * The first name of the individual.
   */
  forename?: string;
  /**
   * The last name of the individual.
   */
  name?: string;
  /**
   * The nationality of the individual. Two digit country code.
   */
  nationality?: string;
  /**
   * The maximum age of the individual.
   */
  ageMax?: number;
  /**
   * The minimum age of the individual.
   */
  ageMin?: number;
  /**
   * Free text for the query.
   */
  freeText?: string;
  /**
   * The sex ID of the individual.
   */
  sexId?: "F" | "M" | "U";
  /**
   * The country ID of the arrest warrant. Two digit country code.
   */
  arrestWarrantCountryId?: string;
  /**
   * The page number for pagination.
   */
  page?: number;
  /**
   * The number of results per page.
   */
  resultPerPage?: number;
}

/**
 * Represents a collection of Yellow Notices.
 */
export type YellowNoticesEntity = {
  /**
   * The total number of Yellow Notices.
   */
  total: number;
  /**
   * The query used to retrieve the Yellow Notices.
   */
  query: YellowNoticesQuery;
  /**
   * The embedded Yellow Notices.
   */
  _embedded: {
    /**
     * An array of Yellow Notices.
     */
    notices: {
      /**
       * The date of birth of the subject of the Red Notice. YYYY/MM/DD.
       */
      date_of_birth: string;
      /**
       * The nationalities of the subject of the Red Notice. Two digit country code.
       */
      nationalities: string[];
      /**
       * The unique identifier for the entity.
       */
      entity_id: string;
      /**
       * The first name of the subject of the Red Notice.
       */
      forename: string;
      /**
       * The last name of the subject of the Red Notice.
       */
      name: string;
      /**
       * Links to related resources.
       */
      _links: {
        /**
         * Link to the Red Notice itself.
         */
        self: {
          /**
           * The URL of the Red Notice.
           */
          href: string;
        };
        /**
         * Link to images of the subject of the Red Notice.
         */
        images: {
          /**
           * The URL of the images.
           */
          href: string;
        };
        /**
         * Link to a thumbnail image of the subject of the Red Notice.
         */
        thumbnail: {
          /**
           * The URL of the thumbnail image.
           */
          href: string;
        };
      };
    }[];
  };
  /**
   * Links to related resources.
   */
  _links: {
    /**
     * Link to the current page of Yellow Notices.
     */
    self: {
      /**
       * The URL of the current page.
       */
      href: string;
    };
    /**
     * Link to the first page of Yellow Notices.
     */
    first: {
      /**
       * The URL of the first page.
       */
      href: string;
    };
    /**
     * Link to the previous page of Yellow Notices.
     */
    previous?: {
      /**
       * The URL of the previous page.
       */
      href: string;
    };
    /**
     * Link to the next page of Yellow Notices.
     */
    next?: {
      /**
       * The URL of the next page.
       */
      href: string;
    };
    /**
     * Link to the last page of Yellow Notices.
     */
    last: {
      /**
       * The URL of the last page.
       */
      href: string;
    };
  };
};
