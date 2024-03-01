import { FC } from 'react';
import { OfferGalleryProps, OfferImageWrapperProps } from '../../types/offers';
import { Nullable } from 'vitest';

const OfferImageWrapper: FC<OfferImageWrapperProps> = ({image}) => (
  <div className="offer__image-wrapper">
    <img className="offer__image" src={image} alt="Photo studio"/>
  </div>
);

export const OfferGallery: FC<OfferGalleryProps> = ({images}) => {
  const imagesList: Nullable<string[]> = images.toString().split(',') || null;

  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {imagesList.map((image) => <OfferImageWrapper image={image} key={image}/>)}
      </div>
    </div>
  );
};
