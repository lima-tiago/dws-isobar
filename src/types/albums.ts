import { Bands } from "./bands";

export type Albums = {
  id: string;
  image: string;
  name: string;
  releasedDate: string;
  band: Bands;
};
