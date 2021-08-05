interface BasicModel {
  id: number;
}

export interface Post extends BasicModel {
  title: string;
  description: string;
  image: string;
}
