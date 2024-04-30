import type { Schema, Attribute } from '@strapi/strapi';

export interface GalleriesGallery extends Schema.Component {
  collectionName: 'components_galleries_galleries';
  info: {
    displayName: 'gallery';
    icon: 'apps';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    image: Attribute.Media;
  };
}

export interface PlacesPoi extends Schema.Component {
  collectionName: 'components_places_pois';
  info: {
    displayName: 'poi';
    icon: 'earth';
    description: '';
  };
  attributes: {
    latitude: Attribute.String;
    longitude: Attribute.String;
    images: Attribute.Component<'galleries.gallery', true>;
    cover: Attribute.Media;
    title: Attribute.String;
    description: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'galleries.gallery': GalleriesGallery;
      'places.poi': PlacesPoi;
    }
  }
}
