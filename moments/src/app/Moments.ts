
export interface Moment
{
  title: string;
  id?: number;
  description: string;
  image: string;
  created_at?: string;
  update_at?: string;
  coments?: [{text: string; username: string}];
}
