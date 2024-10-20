/**
 * Represents the details of a Red Notice entity.
 */
export type RedNoticeDetailsEntity = {
  /**
   * List of arrest warrants associated with the entity.
   */
  arrest_warrants: {
    /**
     * The ID of the country issuing the arrest warrant.
     */
    issuing_country_id: string;
    /**
     * The charge listed in the arrest warrant.
     */
    charge: string;
    /**
     * An optional translation of the charge. Nullable.
     */
    charge_translation?: string;
  }[];
  /**
   * The weight of the individual.
   */
  weight: number;
  /**
   * The forename of the individual.
   */
  forename: string;
  /**
   * The date of birth of the individual.
   */
  date_of_birth: string;
  /**
   * The unique identifier for the entity.
   */
  entity_id: string;
  /**
   * List of language IDs spoken by the individual. Three digit language code.
   */
  languages_spoken_ids: string[];
  /**
   * List of nationality IDs of the individual. Two digit country code.
   */
  nationalities: string[];
  /**
   * The height of the individual.
   */
  height: number;
  /**
   * The sex identifier of the individual (F, M, U).
   */
  sex_id: "F" | "M" | "U";
  /**
   * The ID of the country where the individual was born. Two digit country code.
   */
  country_of_birth_id: string;
  /**
   * The last name of the individual.
   */
  name: string;
  /**
   * Any distinguishing marks of the individual.
   */
  distinguishing_marks: string;
  /**
   * List of eye color IDs.
   */
  eyes_colors_id: string[];
  /**
   * List of hair color/type IDs.
   */
  hairs_id: string[];
  /**
   * The place of birth of the individual.
   */
  place_of_birth: string;
  /**
   * Embedded links associated with the entity.
   */
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
