import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsGuide extends Struct.ComponentSchema {
  collectionName: 'components_sections_guides';
  info: {
    displayName: 'guide';
  };
  attributes: {
    description: Schema.Attribute.Text;
    iconClass: Schema.Attribute.String;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

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

export interface SectionsIconLink extends Struct.ComponentSchema {
  collectionName: 'components_sections_icon_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    iconClass: Schema.Attribute.String;
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
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
      'sections.guide': SectionsGuide;
      'sections.hero-banner': SectionsHeroBanner;
      'sections.icon-link': SectionsIconLink;
      'shared.footer': SharedFooter;
      'shared.header': SharedHeader;
    }
  }
}
