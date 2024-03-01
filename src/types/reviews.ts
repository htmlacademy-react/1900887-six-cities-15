import { Host } from './offers';

type User = Host;

export type Review = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}

export type ReviewsInfo = {reviews: Review[]};
