import {
  amiraHassan,
  budiSantoso,
  ranggaPratama,
  sitiNurhaliza,
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
    author: amiraHassan,
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/book.png",
    reactions: 3,
    date: "15 Jun",
  },
  {
    author: budiSantoso,
    caption: "Selamat pagi dunia!",
    date: "2 Mar 2024",
  },
  {
    author: sitiNurhaliza,
    image:
      "https://images.unsplash.com/photo-1558979158-65a1eaa08691?w=500&h=400&fit=crop",
    date: "29 Apr 2024",
  },
  {
    author: ranggaPratama,
    caption:
      "Akhirnya bisa liburan juga setelah sekian lama nggak ke luar kota. Suasana pegunungan memang nggak pernah gagal bikin hati tenang dan pikiran fresh.",
    image:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=500&h=400&fit=crop",
    reactions: 1,
    date: "10 Des 2023",
  },
  {
    author: amiraHassan,
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&h=400&fit=crop",
    reactions: 20,
    date: "7 Mei",
  },
  {
    author: budiSantoso,
    caption: "Ngopi dulu biar waras ☕️",
    reactions: 2,
    date: "30 Jan 2023",
  },
  {
    author: sitiNurhaliza,
    caption:
      "Terima kasih atas semua dukungan teman-teman selama ini. Hari ini aku resmi lulus! 🎓",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=400&fit=crop",
    date: "21 Jul 2024",
  },
  {
    author: ranggaPratama,
    image:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=500&h=400&fit=crop",
    reactions: 5,
    date: "28 Feb",
  },
  {
    author: amiraHassan,
    caption: "Baca buku sambil hujan itu combo terbaik. 📖🌧️",
    date: "13 Okt 2023",
  },
  {
    author: budiSantoso,
    caption:
      "Senja di pantai selalu memberikan rasa damai. Nggak perlu kata-kata, cukup duduk dan menikmati setiap detiknya.",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&h=400&fit=crop",
    reactions: 50,
    date: "5 Sep 2024",
  },
  {
    author: sitiNurhaliza,
    caption: "Masakan rumah memang selalu juara! 🍲",
    reactions: 12,
    date: "18 Agu",
  },
  {
    author: ranggaPratama,
    caption:
      "Proyek baru, tantangan baru! Semoga semua berjalan lancar sampai akhir.",
    reactions: 1,
    date: "12 Nov 2023",
  },
  {
    author: amiraHassan,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=400&fit=crop",
    date: "1 Jan 2025",
  },
  {
    author: budiSantoso,
    caption: "Ayo semangat mulai minggu baru! 💪",
    reactions: 2,
    date: "4 Mar",
  },
  {
    author: sitiNurhaliza,
    caption: "Pelangi setelah hujan 🌈",
    image:
      "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?w=500&h=400&fit=crop",
    date: "22 Feb 2025",
  },
];
