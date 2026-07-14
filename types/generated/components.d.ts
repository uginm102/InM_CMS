import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_banners';
  info: {
    displayName: 'hero-banner';
  };
  attributes: {
    searchButtonText: Schema.Attribute.String & Schema.Attribute.Required;
    searchPlaceholder: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'sections.hero-banner': SectionsHeroBanner;
    }
  }
}
