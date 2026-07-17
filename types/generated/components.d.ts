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

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    content: Schema.Attribute.String;
  };
}

export interface SharedHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'header';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'sections.hero-banner': SectionsHeroBanner;
      'shared.footer': SharedFooter;
      'shared.header': SharedHeader;
    }
  }
}
