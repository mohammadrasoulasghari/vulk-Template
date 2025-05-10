import { type Nft } from '/@src/types'

export const popularNfts: Nft[] = [
  {
    id: 20,
    name: 'سگ فرشته',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/dog-5.png',
    slug: 'the-angel-dog',
    likes: 6479,
    initialBid: {
      dollar: 1123.06,
      eth: 0.45,
    },
    currentBid: {
      dollar: 1871.77,
      eth: 0.75,
    },
    collection: {
      id: 3,
      name: 'سگ‌های کریپتو',
      items: 8,
      picture: 'https://dummyimage.com/400x300',
      thumbnails: [
        {
          picture: '/assets/demo/img/nft/dog-3.png',
        },
        {
          picture: '/assets/demo/img/nft/dog-4.png',
        },
        {
          picture: '/assets/demo/img/nft/dog-6.png',
        },
      ],
      url: '/',
    },
    seller: {
      id: 3,
      name: 'دونی دارکو',
      picture: '/assets/nft/avatars/reaper.svg',
      url: '/',
    },
    biders: [
      {
        id: 3,
        name: 'روبوتیکز',
        bid: 0.75,
        time: '2 ساعت پیش',
        picture: '/assets/nft/avatars/robot.svg',
        url: '/',
      },
      {
        id: 4,
        name: 'کابوی',
        bid: 0.72,
        time: '5 ساعت پیش',
        picture: '/assets/nft/avatars/cow.svg',
        url: '/',
      },
      {
        id: 5,
        name: 'رزول',
        bid: 0.68,
        time: '9 ساعت پیش',
        picture: '/assets/nft/avatars/alien.svg',
        url: '/',
      },
      {
        id: 6,
        name: 'هامی',
        bid: 0.65,
        time: '10 ساعت پیش',
        picture: '/assets/nft/avatars/hammy.svg',
        url: '/',
      },
      {
        id: 7,
        name: 'موگ وی',
        bid: 0.62,
        time: '11 ساعت پیش',
        picture: '/assets/nft/avatars/mogwai.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Apr 10, 2022',
    favorite: false,
  },
  {
    id: 4,
    name: 'میمون متمدن',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/monkey-5.png',
    slug: 'the-urban-monkey',
    likes: 8824,
    initialBid: {
      dollar: 873.49,
      eth: 0.35,
    },
    currentBid: {
      dollar: 1372.63,
      eth: 0.55,
    },
    collection: {
      id: 0,
      name: 'میمون‌های کریپتو',
      items: 8,
      picture: 'https://dummyimage.com/400x300',
      thumbnails: [
        {
          picture: '/assets/demo/img/nft/monkey-1.jpg',
        },
        {
          picture: '/assets/demo/img/nft/monkey-2.png',
        },
        {
          picture: '/assets/demo/img/nft/monkey-6.png',
        },
      ],
      url: '/',
    },
    seller: {
      id: 0,
      name: 'مردم تخم مرغی',
      picture: '/assets/nft/avatars/egg.svg',
      url: '/',
    },
    biders: [
      {
        id: 2,
        name: 'کان هاز',
        bid: 0.55,
        time: '10 دقیقه پیش',
        picture: '/assets/nft/avatars/cat.svg',
        url: '/',
      },
      {
        id: 1,
        name: 'چامپی',
        bid: 0.52,
        time: '30 دقیقه پیش',
        picture: '/assets/nft/avatars/chomp.svg',
        url: '/',
      },
      {
        id: 6,
        name: 'هامی',
        bid: 0.49,
        time: '2 ساعت پیش',
        picture: '/assets/nft/avatars/hammy.svg',
        url: '/',
      },
      {
        id: 7,
        name: 'موگ وی',
        bid: 0.41,
        time: '4 ساعت پیش',
        picture: '/assets/nft/avatars/mogwai.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 16, 2022',
    favorite: false,
  },
  {
    id: 12,
    name: 'گربه ملوس',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/kitten-5.png',
    slug: 'the-winged-kitty',
    likes: 7423,
    initialBid: {
      dollar: 1372.63,
      eth: 0.55,
    },
    currentBid: {
      dollar: 2370.91,
      eth: 0.95,
    },
    collection: {
      id: 1,
      name: 'گربه‌های کریپتو',
      items: 8,
      picture: 'https://dummyimage.com/400x300',
      thumbnails: [
        {
          picture: '/assets/demo/img/nft/kitten-2.png',
        },
        {
          picture: '/assets/demo/img/nft/kitten-5.png',
        },
        {
          picture: '/assets/demo/img/nft/kitten-8.png',
        },
      ],
      url: '/',
    },
    seller: {
      id: 0,
      name: 'چامپی',
      picture: '/assets/nft/avatars/chomp.svg',
      url: '/',
    },
    biders: [
      {
        id: 0,
        name: 'مردم تخم مرغی',
        bid: 0.95,
        time: '30 دقیقه پیش',
        picture: '/assets/nft/avatars/egg.svg',
        url: '/',
      },
      {
        id: 3,
        name: 'دونی دارکو',
        bid: 0.75,
        time: '2 ساعت پیش',
        picture: '/assets/nft/avatars/reaper.svg',
        url: '/',
      },
      {
        id: 4,
        name: 'کن آی هز',
        bid: 0.68,
        time: '9 ساعت پیش',
        picture: '/assets/nft/avatars/cat.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Apr 28, 2022',
    favorite: false,
  },
  {
    id: 34,
    name: 'مومیایی متمدن',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/mummy-3.png',
    slug: 'the-urban-mummy',
    likes: 3222,
    initialBid: {
      dollar: 873.49,
      eth: 0.35,
    },
    currentBid: {
      dollar: 2121.34,
      eth: 0.85,
    },
    collection: {
      id: 5,
      name: 'مومیایی‌های کریپتو',
      items: 8,
      picture: 'https://dummyimage.com/400x300',
      thumbnails: [
        {
          picture: '/assets/demo/img/nft/mummy-2.png',
        },
        {
          picture: '/assets/demo/img/nft/mummy-5.png',
        },
        {
          picture: '/assets/demo/img/nft/mummy-6.png',
        },
      ],
      url: '/',
    },
    seller: {
      id: 3,
      name: 'کان هاز',
      picture: '/assets/nft/avatars/cat.svg',
      url: '/',
    },
    biders: [
      {
        id: 1,
        name: 'چامپی',
        bid: 0.85,
        time: '2 دقیقه پیش',
        picture: '/assets/nft/avatars/chomp.svg',
        url: '/',
      },
      {
        id: 2,
        name: 'روبوتیکز',
        bid: 0.62,
        time: '3 ساعت پیش',
        picture: '/assets/nft/avatars/robot.svg',
        url: '/',
      },
      {
        id: 4,
        name: 'کن آی هز',
        bid: 0.44,
        time: '9 ساعت پیش',
        picture: '/assets/nft/avatars/cat.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 29, 2022',
    favorite: false,
  },
  {
    id: 41,
    name: 'عقاب متمدن',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/eagle-2.png',
    slug: 'the-urban-eagle',
    likes: 23273,
    initialBid: {
      dollar: 873.49,
      eth: 0.35,
    },
    currentBid: {
      dollar: 2121.34,
      eth: 0.85,
    },
    collection: {
      id: 0,
      name: 'عقاب‌های کریپتو',
      items: 8,
      picture: 'https://dummyimage.com/400x300',
      thumbnails: [
        {
          picture: '/assets/demo/img/nft/eagle-1.png',
        },
        {
          picture: '/assets/demo/img/nft/eagle-2.png',
        },
        {
          picture: '/assets/demo/img/nft/eagle-6.png',
        },
      ],
      url: '/',
    },
    seller: {
      id: 2,
      name: 'کان هاز',
      picture: '/assets/nft/avatars/cat.svg',
      url: '/',
    },
    biders: [
      {
        id: 1,
        name: 'چامپی',
        bid: 0.85,
        time: '2 دقیقه پیش',
        picture: '/assets/nft/avatars/chomp.svg',
        url: '/',
      },
      {
        id: 5,
        name: 'رزول',
        bid: 0.45,
        time: '2 ساعت پیش',
        picture: '/assets/nft/avatars/alien.svg',
        url: '/',
      },
      {
        id: 6,
        name: 'هامی',
        bid: 0.39,
        time: '4 ساعت پیش',
        picture: '/assets/nft/avatars/hammy.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Feb 28, 2022',
    favorite: false,
  },
  {
    id: 42,
    name: 'عقاب واقعیت افزوده',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/eagle-3.png',
    slug: 'the-vr-eagle',
    likes: 41689,
    initialBid: {
      dollar: 873.49,
      eth: 0.35,
    },
    currentBid: {
      dollar: 1622.22,
      eth: 0.65,
    },
    collection: {
      id: 0,
      name: 'عقاب‌های کریپتو',
      items: 8,
      picture: 'https://dummyimage.com/400x300',
      thumbnails: [
        {
          picture: '/assets/demo/img/nft/eagle-1.jpg',
        },
        {
          picture: '/assets/demo/img/nft/eagle-2.png',
        },
        {
          picture: '/assets/demo/img/nft/eagle-6.png',
        },
      ],
      url: '/',
    },
    seller: {
      id: 2,
      name: 'کان هاز',
      picture: '/assets/nft/avatars/cat.svg',
      url: '/',
    },
    biders: [
      {
        id: 6,
        name: 'هامی',
        bid: 0.65,
        time: '2 ساعت پیش',
        picture: '/assets/nft/avatars/hammy.svg',
        url: '/',
      },
      {
        id: 3,
        name: 'دونی دارکو',
        bid: 0.57,
        time: '7 ساعت پیش',
        picture: '/assets/nft/avatars/reaper.svg',
        url: '/',
      },
      {
        id: 4,
        name: 'کابوی',
        bid: 0.42,
        time: 'Yesterday',
        picture: '/assets/nft/avatars/cow.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 11, 2022',
    favorite: false,
  },
  {
    id: 28,
    name: 'نکو سایفر شگفت انگیز',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/neko-5.png',
    slug: 'the-wounded-cypher-neko',
    likes: 7894,
    initialBid: {
      dollar: 1871.77,
      eth: 0.75,
    },
    currentBid: {
      dollar: 2370.91,
      eth: 0.95,
    },
    collection: {
      id: 4,
      name: 'نکوهای سایفر',
      items: 8,
      picture: 'https://dummyimage.com/400x300',
      thumbnails: [
        {
          picture: '/assets/demo/img/nft/neko-1.png',
        },
        {
          picture: '/assets/demo/img/nft/neko-2.png',
        },
        {
          picture: '/assets/demo/img/nft/neko-3.png',
        },
      ],
      url: '/',
    },
    seller: {
      id: 3,
      name: 'روبوتیکز',
      picture: '/assets/nft/avatars/robot.svg',
      url: '/',
    },
    biders: [
      {
        id: 4,
        name: 'کابوی',
        bid: 0.95,
        time: '2 ساعت پیش',
        picture: '/assets/nft/avatars/cow.svg',
        url: '/',
      },
      {
        id: 5,
        name: 'رزول',
        bid: 0.85,
        time: '5 ساعت پیش',
        picture: '/assets/nft/avatars/alien.svg',
        url: '/',
      },
      {
        id: 6,
        name: 'هامی',
        bid: 0.78,
        time: '6 ساعت پیش',
        picture: '/assets/nft/avatars/hammy.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Apr 23, 2022',
    favorite: false,
  },
  {
    id: 30,
    name: 'نکو سایفر مافیا',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/neko-7.png',
    slug: 'the-mafia-cypher-neko',
    likes: 11665,
    initialBid: {
      dollar: 1871.77,
      eth: 0.75,
    },
    currentBid: {
      dollar: 2370.91,
      eth: 0.95,
    },
    collection: {
      id: 4,
      name: 'نکوهای سایفر',
      items: 8,
      picture: 'https://dummyimage.com/400x300',
      thumbnails: [
        {
          picture: '/assets/demo/img/nft/neko-1.png',
        },
        {
          picture: '/assets/demo/img/nft/neko-2.png',
        },
        {
          picture: '/assets/demo/img/nft/neko-3.png',
        },
      ],
      url: '/',
    },
    seller: {
      id: 3,
      name: 'روبوتیکز',
      picture: '/assets/nft/avatars/robot.svg',
      url: '/',
    },
    biders: [
      {
        id: 1,
        name: 'چامپی',
        bid: 0.95,
        time: '2 دقیقه پیش',
        picture: '/assets/nft/avatars/chomp.svg',
        url: '/',
      },
      {
        id: 0,
        name: 'مردم تخم مرغی',
        bid: 0.82,
        time: '45 دقیقه پیش',
        picture: '/assets/nft/avatars/egg.svg',
        url: '/',
      },
      {
        id: 4,
        name: 'کن آی هز',
        bid: 0.78,
        time: '5 ساعت پیش',
        picture: '/assets/nft/avatars/cat.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Apr 3, 2022',
    favorite: false,
  },
  {
    id: 1,
    name: 'میمون سه بعدی',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/monkey-2.png',
    slug: 'the-3d-monkey',
    likes: 23273,
    initialBid: {
      dollar: 873.49,
      eth: 0.35,
    },
    currentBid: {
      dollar: 2121.34,
      eth: 0.85,
    },
    collection: {
      id: 0,
      name: 'میمون‌های کریپتو',
      items: 8,
      picture: 'https://dummyimage.com/400x300',
      thumbnails: [
        {
          picture: '/assets/demo/img/nft/monkey-1.jpg',
        },
        {
          picture: '/assets/demo/img/nft/monkey-2.png',
        },
        {
          picture: '/assets/demo/img/nft/monkey-6.png',
        },
      ],
      url: '/',
    },
    seller: {
      id: 0,
      name: 'مردم تخم مرغی',
      picture: '/assets/nft/avatars/egg.svg',
      url: '/',
    },
    biders: [
      {
        id: 1,
        name: 'چامپی',
        bid: 0.85,
        time: '2 دقیقه پیش',
        picture: '/assets/nft/avatars/chomp.svg',
        url: '/',
      },
      {
        id: 5,
        name: 'رزول',
        bid: 0.45,
        time: '2 ساعت پیش',
        picture: '/assets/nft/avatars/alien.svg',
        url: '/',
      },
      {
        id: 6,
        name: 'هامی',
        bid: 0.39,
        time: '4 ساعت پیش',
        picture: '/assets/nft/avatars/hammy.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Feb 28, 2022',
    favorite: false,
  },
  {
    id: 5,
    name: 'میمون خسته',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/monkey-6.png',
    slug: 'the-bored-monkey',
    likes: 31674,
    initialBid: {
      dollar: 873.49,
      eth: 0.35,
    },
    currentBid: {
      dollar: 2121.34,
      eth: 0.85,
    },
    collection: {
      id: 0,
      name: 'میمون‌های کریپتو',
      items: 8,
      picture: 'https://dummyimage.com/400x300',
      thumbnails: [
        {
          picture: '/assets/demo/img/nft/monkey-1.jpg',
        },
        {
          picture: '/assets/demo/img/nft/monkey-2.png',
        },
        {
          picture: '/assets/demo/img/nft/monkey-6.png',
        },
      ],
      url: '/',
    },
    seller: {
      id: 0,
      name: 'مردم تخم مرغی',
      picture: '/assets/nft/avatars/egg.svg',
      url: '/',
    },
    biders: [
      {
        id: 4,
        name: 'کابوی',
        bid: 0.85,
        time: '2 ساعت پیش',
        picture: '/assets/nft/avatars/cow.svg',
        url: '/',
      },
      {
        id: 5,
        name: 'رزول',
        bid: 0.81,
        time: '3 ساعت پیش',
        picture: '/assets/nft/avatars/alien.svg',
        url: '/',
      },
      {
        id: 6,
        name: 'هامی',
        bid: 0.76,
        time: '7 ساعت پیش',
        picture: '/assets/nft/avatars/hammy.svg',
        url: '/',
      },
      {
        id: 7,
        name: 'موگ وی',
        bid: 0.61,
        time: '9 ساعت پیش',
        picture: '/assets/nft/avatars/mogwai.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 26, 2022',
    favorite: false,
  },
  {
    id: 49,
    name: 'جمجمه اراذل',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/skull-2.png',
    slug: 'the-thug-skull',
    likes: 9487,
    initialBid: {
      dollar: 1372.63,
      eth: 0.55,
    },
    currentBid: {
      dollar: 1871.77,
      eth: 0.75,
    },
    collection: {
      id: 1,
      name: 'جمجمه‌های بامزه',
      items: 8,
      picture: 'https://dummyimage.com/400x300',
      thumbnails: [
        {
          picture: '/assets/demo/img/nft/skull-2.png',
        },
        {
          picture: '/assets/demo/img/nft/skull-5.png',
        },
        {
          picture: '/assets/demo/img/nft/skull-8.png',
        },
      ],
      url: '/',
    },
    seller: {
      id: 4,
      name: 'کابوی',
      picture: '/assets/nft/avatars/cow.svg',
      url: '/',
    },
    biders: [
      {
        id: 2,
        name: 'کان هاز',
        bid: 0.75,
        time: '10 دقیقه پیش',
        picture: '/assets/nft/avatars/cat.svg',
        url: '/',
      },
      {
        id: 3,
        name: 'روبوتیکز',
        bid: 0.65,
        time: '4 ساعت پیش',
        picture: '/assets/nft/avatars/robot.svg',
        url: '/',
      },
      {
        id: 4,
        name: 'کابوی',
        bid: 0.62,
        time: '5 ساعت پیش',
        picture: '/assets/nft/avatars/cow.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 13, 2022',
    favorite: false,
  },
  {
    id: 36,
    name: 'مومیایی‌های شوک زده',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/mummy-5.png',
    slug: 'the-shocked-mummy',
    likes: 2833,
    initialBid: {
      dollar: 873.49,
      eth: 0.35,
    },
    currentBid: {
      dollar: 2121.34,
      eth: 0.85,
    },
    collection: {
      id: 5,
      name: 'مومیایی‌های کریپتو',
      items: 8,
      picture: 'https://dummyimage.com/400x300',
      thumbnails: [
        {
          picture: '/assets/demo/img/nft/mummy-2.png',
        },
        {
          picture: '/assets/demo/img/nft/mummy-5.png',
        },
        {
          picture: '/assets/demo/img/nft/mummy-6.png',
        },
      ],
      url: '/',
    },
    seller: {
      id: 3,
      name: 'کان هاز',
      picture: '/assets/nft/avatars/cat.svg',
      url: '/',
    },
    biders: [
      {
        id: 5,
        name: 'کابوی',
        bid: 0.85,
        time: '9 ساعت پیش',
        picture: '/assets/nft/avatars/cow.svg',
        url: '/',
      },
      {
        id: 1,
        name: 'چامپی',
        bid: 0.75,
        time: 'Yesterday',
        picture: '/assets/nft/avatars/chomp.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Apr 5, 2022',
    favorite: false,
  },
  {
    id: 44,
    name: 'عقاب معتاد',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/eagle-5.png',
    slug: 'the-smoking-eagle',
    likes: 8824,
    initialBid: {
      dollar: 873.49,
      eth: 0.35,
    },
    currentBid: {
      dollar: 1372.63,
      eth: 0.55,
    },
    collection: {
      id: 0,
      name: 'عقاب‌های کریپتو',
      items: 8,
      picture: 'https://dummyimage.com/400x300',
      thumbnails: [
        {
          picture: '/assets/demo/img/nft/eagle-1.jpg',
        },
        {
          picture: '/assets/demo/img/nft/eagle-2.png',
        },
        {
          picture: '/assets/demo/img/nft/eagle-6.png',
        },
      ],
      url: '/',
    },
    seller: {
      id: 2,
      name: 'کان هاز',
      picture: '/assets/nft/avatars/cat.svg',
      url: '/',
    },
    biders: [
      {
        id: 2,
        name: 'کان هاز',
        bid: 0.55,
        time: '10 دقیقه پیش',
        picture: '/assets/nft/avatars/cat.svg',
        url: '/',
      },
      {
        id: 1,
        name: 'چامپی',
        bid: 0.52,
        time: '30 دقیقه پیش',
        picture: '/assets/nft/avatars/chomp.svg',
        url: '/',
      },
      {
        id: 6,
        name: 'هامی',
        bid: 0.49,
        time: '2 ساعت پیش',
        picture: '/assets/nft/avatars/hammy.svg',
        url: '/',
      },
      {
        id: 7,
        name: 'موگ وی',
        bid: 0.41,
        time: '4 ساعت پیش',
        picture: '/assets/nft/avatars/mogwai.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 16, 2022',
    favorite: false,
  },
  {
    id: 18,
    name: 'سگ فروشنده',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/dog-3.png',
    slug: 'the-sailor-dog',
    likes: 8276,
    initialBid: {
      dollar: 1123.06,
      eth: 0.45,
    },
    currentBid: {
      dollar: 2121.34,
      eth: 0.85,
    },
    collection: {
      id: 3,
      name: 'سگ‌های کریپتو',
      items: 8,
      picture: 'https://dummyimage.com/400x300',
      thumbnails: [
        {
          picture: '/assets/demo/img/nft/dog-3.png',
        },
        {
          picture: '/assets/demo/img/nft/dog-4.png',
        },
        {
          picture: '/assets/demo/img/nft/dog-6.png',
        },
      ],
      url: '/',
    },
    seller: {
      id: 3,
      name: 'دونی دارکو',
      picture: '/assets/nft/avatars/reaper.svg',
      url: '/',
    },
    biders: [
      {
        id: 4,
        name: 'کابوی',
        bid: 0.85,
        time: '7 ساعت پیش',
        picture: '/assets/nft/avatars/cow.svg',
        url: '/',
      },
      {
        id: 5,
        name: 'رزول',
        bid: 0.75,
        time: '9 ساعت پیش',
        picture: '/assets/nft/avatars/alien.svg',
        url: '/',
      },
      {
        id: 6,
        name: 'هامی',
        bid: 0.68,
        time: '10 ساعت پیش',
        picture: '/assets/nft/avatars/hammy.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 14, 2022',
    favorite: false,
  },
  {
    id: 53,
    name: 'جمجمه نقاش',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/skull-6.png',
    slug: 'the-painter-skull',
    likes: 8447,
    initialBid: {
      dollar: 1372.63,
      eth: 0.55,
    },
    currentBid: {
      dollar: 1871.77,
      eth: 0.75,
    },
    collection: {
      id: 1,
      name: 'جمجمه‌های بامزه',
      items: 8,
      picture: 'https://dummyimage.com/400x300',
      thumbnails: [
        {
          picture: '/assets/demo/img/nft/skull-2.png',
        },
        {
          picture: '/assets/demo/img/nft/skull-5.png',
        },
        {
          picture: '/assets/demo/img/nft/skull-8.png',
        },
      ],
      url: '/',
    },
    seller: {
      id: 4,
      name: 'کابوی',
      picture: '/assets/nft/avatars/cow.svg',
      url: '/',
    },
    biders: [
      {
        id: 0,
        name: 'مردم تخم مرغی',
        bid: 0.75,
        time: '3 ساعت پیش',
        picture: '/assets/nft/avatars/egg.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 19, 2022',
    favorite: false,
  },
  {
    id: 11,
    name: 'گربه شکلات',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/kitten-4.png',
    slug: 'the-candy-kitty',
    likes: 11644,
    initialBid: {
      dollar: 1372.63,
      eth: 0.55,
    },
    currentBid: {
      dollar: 2370.91,
      eth: 0.95,
    },
    collection: {
      id: 1,
      name: 'گربه‌های کریپتو',
      items: 8,
      picture: 'https://dummyimage.com/400x300',
      thumbnails: [
        {
          picture: '/assets/demo/img/nft/kitten-2.png',
        },
        {
          picture: '/assets/demo/img/nft/kitten-5.png',
        },
        {
          picture: '/assets/demo/img/nft/kitten-8.png',
        },
      ],
      url: '/',
    },
    seller: {
      id: 0,
      name: 'چامپی',
      picture: '/assets/nft/avatars/chomp.svg',
      url: '/',
    },
    biders: [
      {
        id: 2,
        name: 'روبوتیکز',
        bid: 0.95,
        time: '3 ساعت پیش',
        picture: '/assets/nft/avatars/robot.svg',
        url: '/',
      },
      {
        id: 3,
        name: 'دونی دارکو',
        bid: 0.84,
        time: '7 ساعت پیش',
        picture: '/assets/nft/avatars/reaper.svg',
        url: '/',
      },
      {
        id: 4,
        name: 'کن آی هز',
        bid: 0.65,
        time: '9 ساعت پیش',
        picture: '/assets/nft/avatars/cat.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Apr 12, 2022',
    favorite: false,
  },
]
