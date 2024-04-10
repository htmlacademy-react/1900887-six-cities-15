import { Dispatch, SetStateAction } from 'react';

const MIN_SIZE: number = 50;
const MAX_SIZE: number = 300;

type TCheckSize = {
  rating: number;
  message: string;
  action: Dispatch<SetStateAction<boolean>>;
}

export const checkSize = ({rating, message, action}: TCheckSize) => {
  if (message.length > MIN_SIZE && message.length < MAX_SIZE && rating > 0) {
    action(false);
  } else {
    action(true);
  }
};
