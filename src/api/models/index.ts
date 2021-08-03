interface BasicModel {
  id: number;
}

export interface Post extends BasicModel {
  userId: number;
  title: string;
  body: string;
}
