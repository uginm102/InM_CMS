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
    slug: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SectionsMobileAppDownload extends Struct.ComponentSchema {
  collectionName: 'components_sections_mobile_app_downloads';
  info: {
    displayName: 'Mobile App Download';
  };
  attributes: {
    appStoreLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'App Store'>;
    appStorePrefix: Schema.Attribute.String;
    appStoreUrl: Schema.Attribute.String;
    infoText: Schema.Attribute.String;
    playStoreLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Google Play'>;
    playStorePrefix: Schema.Attribute.String;
    playStoreUrl: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ServicesService extends Struct.ComponentSchema {
  collectionName: 'components_services_services';
  info: {
    displayName: 'Service';
  };
  attributes: {
    description: Schema.Attribute.Text;
    iconClass: Schema.Attribute.String;
    services: Schema.Attribute.Component<'sections.icon-link', true>;
    title: Schema.Attribute.String;
  };
}

export interface ServicesStep extends Struct.ComponentSchema {
  collectionName: 'components_services_steps';
  info: {
    displayName: 'Step';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    order: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    screenshot: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    > &
      Schema.Attribute.Required;
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
      'sections.guide': SectionsGuide;
      'sections.hero-banner': SectionsHeroBanner;
      'sections.icon-link': SectionsIconLink;
      'sections.mobile-app-download': SectionsMobileAppDownload;
      'services.service': ServicesService;
      'services.step': ServicesStep;
      'shared.footer': SharedFooter;
      'shared.header': SharedHeader;
    }
  }
}
