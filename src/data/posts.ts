import {
  amiraHassan,
  budiSantoso,
  ranggaPratama,
  sitiNurhaliza,
  aniesLutfi,
  type UserData,
} from "./users";

export interface PostData {
  author: UserData;
  caption?: string;
  image?: string;
  reactions?: number;
  date: string;
}

export const posts: PostData[] = [
  {
    author: aniesLutfi,
    caption:
      "masih ga nyangka, kok kamu mau sih Alpiii 925km ke rumahku bawa keluarga, bawa bolu, bawa buah, bawa wingko, bawa dodol, bawa bunga... bawa cincin (?) kamu pengen mengembalikan darah jawa ku kah wkkw.",
    image: "/engagement.jpg",
    reactions: 1810,
    date: "23 Feb 2025",
  },
  {
    author: amiraHassan,
    caption: "hi my fiance 🥹 @Anies Lutfi",
    image: "/cincinalfi.png",
    reactions: 3,
    date: "24 Feb 2025",
  },
  {
    author: aniesLutfi,
    caption: "menerima undangan pertemanan @Alfi Maulana",
    reactions: 10,
    date: "01 Jul 2017",
  },
  {
    author: aniesLutfi,
    caption: "yang main discord, ada?",
    reactions: 19,
    date: "18 Mar 2020",
  },
  {
    author: amiraHassan,
    caption: "🧡 💛 💚 💙 💜",
    image: "/lovely.png",
    reactions: 13,
    date: "07 Jun 2022",
  },
  {
    author: aniesLutfi,
    caption: "malu banget malu, tolong pura2 ga tahu aja 😓",
    reactions: 190,
    date: "09 June 2022",
  },
  {
    author: amiraHassan,
    caption:
      "not wise from this far away, afraid of hurting someone, too hurts to leave. ",
    reactions: 49,
    date: "09 June 2022",
  },
  {
    author: amiraHassan,
    caption: "in relationship @Anies Lutfi",
    reactions: 13,
    date: "11 Jun 2020",
  },
  {
    author: amiraHassan,
    caption: "🌊⛵️",
    image: "/ocean.png",
    reactions: 97,
    date: "20 Aug 2022",
  },
  {
    author: aniesLutfi,
    caption:
      "don't you say, Ginger Island or Calico Dessert -_-  @Alfi Maulana",
    image: "/nikahmeme.png",
    reactions: 85,
    date: "10 Jun 2025",
  },
  {
    author: amiraHassan,
    caption:
      "how to be platinum member on shopee? nikah sayang 🤗 @Anies Lutfi",
    image: "/shopee.png",
    reactions: 85,
    date: "10 Jun 2025",
  },
  {
    author: budiSantoso,
    caption:
      "salam interaksi cantik-cantikku, kegiatan MUA di bulan suro, full smoting 😁 yang mau ngelurusin rambut, mari merapat di salon Nur Cahya. #fbpro #fyp #viral",
    image: "/smoothing.png",
    reactions: 196,
    date: "28 Jun 2025",
  },
];
