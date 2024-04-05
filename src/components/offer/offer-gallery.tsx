import { FC } from 'react';
import { OfferGalleryProps, OfferImageWrapperProps } from '../../types/offers';
import { Nullable } from 'vitest';

type TImageList = {
  images: string[];
}

const OfferImageWrapper: FC<OfferImageWrapperProps> = ({ image }) => (
  <div className="offer__image-wrapper">
    <img className="offer__image" src={image} alt="Photo studio" />
  </div>
);

const ImageList = ({ images }: TImageList) => images.map((image) => <OfferImageWrapper image={image} key={image} />);

export const OfferGallery: FC<OfferGalleryProps> = ({ images }) => {
  const imagesList: Nullable<string[]> = images.toString().split(',') || null;

  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        <ImageList images={imagesList} />
      </div>
    </div>
  );
};
