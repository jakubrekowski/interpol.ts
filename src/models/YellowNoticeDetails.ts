/**
 * Represents the details of a Yellow Notice entity.
 */
export type YellowNoticeDetailsEntitiy = {
  /**
   * The country associated with the entity. Two digit country code.
   */
  country: string;
  /**
   * The date of birth of the entity.
   */
  date_of_birth?: string;
  /**
   * The name of the entity's mother.
   */
  mother_name?: string;
  /**
   * List of countries likely to be visited by the entity. Two digit country code.
   */
  countries_likely_to_be_visited: string[];
  /**
   * The forename of the entity's mother.
   */
  mother_forename?: string;
  /**
   * The nationalities of the entity. Two digit country code.
   */
  nationalities: string[];
  /**
   * The ID representing the eye color of the entity.
   */
  eye_colors_id?: string;
  /**
   * The sex of the entity.
   */
  sex_id?: "F" | "M" | "U";
  /**
   * The ID representing the hair type of the entity.
   */
  hairs_id?: string;
  /**
   * The place associated with the entity.
   */
  place: string;
  /**
   * List of IDs representing languages spoken by the entity. Three digit language code.
   */
  language_spoken_ids: string[];
  /**
   * The date of the event related to the entity.
   */
  date_of_event?: string;
  /**
   * The height of the entity.
   */
  height?: number;
  /**
   * The forename of the entity's father.
   */
  father_forename?: string;
  /**
   * Distinguishing marks of the entity.
   */
  distinguishing_marks?: string;
  /**
   * The birth name of the entity.
   */
  birth_name?: string;
  /**
   * The weight of the entity.
   */
  weight?: number;
  /**
   * The unique identifier for the entity.
   */
  entity_id: string;
  /**
   * The place of birth of the entity.
   */
  place_of_birth?: string;
  /**
   * The name of the entity's father.
   */
  father_name?: string;
  /**
   * The name of the entity.
   */
  name: string;
  _embedded: {
    /**
     * Array of link URLs.
     */
    links: string[];
  };
  /**
   * Hyperlinks related to the entity.
   */
  _links: {
    /**
     * The self-reference hyperlink.
     */
    self: {
      href: string;
    };
    /**
     * Link to images associated with the entity.
     */
    images: {
      href: string;
    };
    /**
     * Link to the thumbnail image associated with the entity.
     */
    thumbnail: {
      href: string;
    };
  };
};
