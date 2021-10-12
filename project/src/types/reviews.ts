export type UserType = {
  id: number,
  name: string,
}

export type ReviewType = {
  id: number,
  user: UserType,
  rating: number,
  comment: string,
  date: string | Date,
}

export type ReviewsType = ReviewType[];
