import { amiraHassan, jamesChen, lisaRodriguez, type UserData } from "./users";

export interface PostData {
  author: UserData;
  image: string;
  date: string;
}

export const posts: PostData[] = [
  {
    author: amiraHassan,
    image:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=500&h=400&fit=crop",
    date: "3 Mei",
  },
  {
    author: jamesChen,
    image:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=500&h=400&fit=crop",
    date: "28 Feb",
  },
  {
    author: lisaRodriguez,
    image:
      "https://images.unsplash.com/photo-1558979158-65a1eaa08691?w=500&h=400&fit=crop",
    date: "29 Apr 2024",
  },
];
