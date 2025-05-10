import type { Nft } from '/@src/types'

export const allNfts: Nft[] = [
  {
    id: 0,
    name: 'میمون بامزه',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/monkey-1.jpg',
    slug: 'the-cool-monkey',
    likes: 39187,
    initialBid: {
      dollar: 873.49,
      eth: 0.35,
    },
    currentBid: {
      dollar: 1871.77,
      eth: 0.75,
    },
    collection: {
      id: 0,
      name: 'میمون‌های کریپتو',
      items: 8,
      picture: '/assets/demo/img/nft/monkey-collection.png',
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
        bid: 0.75,
        time: '2 دقیقه پیش',
        picture: '/assets/nft/avatars/chomp.svg',
        url: '/',
      },
      {
        id: 3,
        name: 'دونی دارکو',
        bid: 0.57,
        time: '3 ساعت پیش',
        picture: '/assets/nft/avatars/reaper.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 28, 2022',
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
      picture: '/assets/demo/img/nft/monkey-collection.png',
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
    id: 2,
    name: 'میمون شوگان',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/monkey-3.png',
    slug: 'the-shogun-monkey',
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
      name: 'میمون‌های کریپتو',
      items: 8,
      picture: '/assets/demo/img/nft/monkey-collection.png',
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
    id: 3,
    name: 'میمون فرشته',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/monkey-4.png',
    slug: 'the-angel-monkey',
    likes: 16189,
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
      picture: '/assets/demo/img/nft/monkey-collection.png',
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
        id: 3,
        name: 'دونی دارکو',
        bid: 0.55,
        time: '2 دقیقه پیش',
        picture: '/assets/nft/avatars/reaper.svg',
        url: '/',
      },
      {
        id: 1,
        name: 'چامپی',
        bid: 0.52,
        time: '10 دقیقه پیش',
        picture: '/assets/nft/avatars/chomp.svg',
        url: '/',
      },
      {
        id: 5,
        name: 'رزول',
        bid: 0.49,
        time: '2 ساعت پیش',
        picture: '/assets/nft/avatars/alien.svg',
        url: '/',
      },
      {
        id: 6,
        name: 'هامی',
        bid: 0.41,
        time: '4 ساعت پیش',
        picture: '/assets/nft/avatars/hammy.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 19, 2022',
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
      picture: '/assets/demo/img/nft/monkey-collection.png',
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
      picture: '/assets/demo/img/nft/monkey-collection.png',
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
    id: 6,
    name: 'میمون باکلاس',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/monkey-7.png',
    slug: 'the-classy-monkey',
    likes: 31516,
    initialBid: {
      dollar: 873.49,
      eth: 0.35,
    },
    currentBid: {
      dollar: 1123.06,
      eth: 0.45,
    },
    collection: {
      id: 0,
      name: 'میمون‌های کریپتو',
      items: 8,
      picture: '/assets/demo/img/nft/monkey-collection.png',
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
        bid: 0.45,
        time: '55 دقیقه پیش',
        picture: '/assets/nft/avatars/chomp.svg',
        url: '/',
      },
      {
        id: 2,
        name: 'کان هاز',
        bid: 0.39,
        time: '3 ساعت پیش',
        picture: '/assets/nft/avatars/cat.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 14, 2022',
    favorite: false,
  },
  {
    id: 7,
    name: 'میمون خوش چهره',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/monkey-8.png',
    slug: 'the-visionary-monkey',
    likes: 14581,
    initialBid: {
      dollar: 873.49,
      eth: 0.35,
    },
    currentBid: {
      dollar: 2370.91,
      eth: 0.95,
    },
    collection: {
      id: 0,
      name: 'میمون‌های کریپتو',
      items: 8,
      picture: '/assets/demo/img/nft/monkey-collection.png',
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
        bid: 0.95,
        time: '30 دقیقه پیش',
        picture: '/assets/nft/avatars/chomp.svg',
        url: '/',
      },
      {
        id: 2,
        name: 'کان هاز',
        bid: 0.75,
        time: '45 دقیقه پیش',
        picture: '/assets/nft/avatars/cat.svg',
        url: '/',
      },
      {
        id: 6,
        name: 'هامی',
        bid: 0.65,
        time: '2 ساعت پیش',
        picture: '/assets/nft/avatars/hammy.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 25, 2022',
    favorite: false,
  },
  {
    id: 8,
    name: 'گربه‌ی متفاوت',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/kitten-1.jpg',
    slug: 'the-wise-kitty',
    likes: 13278,
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
      picture: '/assets/demo/img/nft/kitten-collection.png',
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
        bid: 0.62,
        time: '3 ساعت پیش',
        picture: '/assets/nft/avatars/robot.svg',
        url: '/',
      },
      {
        id: 5,
        name: 'رزول',
        bid: 0.59,
        time: '7 ساعت پیش',
        picture: '/assets/nft/avatars/alien.svg',
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
    auctionEnd: 'Feb 29, 2022',
    favorite: false,
  },
  {
    id: 9,
    name: 'گربه‌ی ستاره',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/kitten-2.png',
    slug: 'the-star-kitty',
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
      name: 'گربه‌های کریپتو',
      items: 8,
      picture: '/assets/demo/img/nft/kitten-collection.png',
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
    id: 10,
    name: 'گربه‌ی بدنساز',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/kitten-3.png',
    slug: 'the-scaled-kitty',
    likes: 4598,
    initialBid: {
      dollar: 1372.63,
      eth: 0.55,
    },
    currentBid: {
      dollar: 1622.21,
      eth: 0.65,
    },
    collection: {
      id: 1,
      name: 'گربه‌های کریپتو',
      items: 8,
      picture: '/assets/demo/img/nft/kitten-collection.png',
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
        id: 6,
        name: 'هامی',
        bid: 0.65,
        time: '2 ساعت پیش',
        picture: '/assets/nft/avatars/hammy.svg',
        url: '/',
      },
      {
        id: 7,
        name: 'موگ وی',
        bid: 0.59,
        time: '5 ساعت پیش',
        picture: '/assets/nft/avatars/mogwai.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Apr 15, 2022',
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
      picture: '/assets/demo/img/nft/kitten-collection.png',
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
      picture: '/assets/demo/img/nft/kitten-collection.png',
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
    id: 13,
    name: 'گربه یخی',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/kitten-6.png',
    slug: 'the-ice-kitty',
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
      name: 'گربه‌های کریپتو',
      items: 8,
      picture: '/assets/demo/img/nft/kitten-collection.png',
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
    id: 14,
    name: 'گربه خال‌خالی',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/kitten-7.png',
    slug: 'the-spot-kitty',
    likes: 977,
    initialBid: {
      dollar: 1372.63,
      eth: 0.55,
    },
    currentBid: {
      dollar: 2121.34,
      eth: 0.85,
    },
    collection: {
      id: 1,
      name: 'گربه‌های کریپتو',
      items: 8,
      picture: '/assets/demo/img/nft/kitten-collection.png',
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
        id: 5,
        name: 'رزول',
        bid: 0.85,
        time: '3 ساعت پیش',
        picture: '/assets/nft/avatars/alien.svg',
        url: '/',
      },
      {
        id: 6,
        name: 'هامی',
        bid: 0.82,
        time: '4 ساعت پیش',
        picture: '/assets/nft/avatars/hammy.svg',
        url: '/',
      },
      {
        id: 7,
        name: 'موگ وی',
        bid: 0.77,
        time: '5 ساعت پیش',
        picture: '/assets/nft/avatars/mogwai.svg',
        url: '/',
      },
      {
        id: 2,
        name: 'روبوتیکز',
        bid: 0.71,
        time: '8 ساعت پیش',
        picture: '/assets/nft/avatars/robot.svg',
        url: '/',
      },
      {
        id: 3,
        name: 'دونی دارکو',
        bid: 0.68,
        time: '9 ساعت پیش',
        picture: '/assets/nft/avatars/reaper.svg',
        url: '/',
      },
      {
        id: 4,
        name: 'کن آی هز',
        bid: 0.62,
        time: 'Yesterday',
        picture: '/assets/nft/avatars/cat.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 22, 2022',
    favorite: false,
  },
  {
    id: 15,
    name: 'گربه عاشق',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/kitten-8.png',
    slug: 'the-cupidon-kitty',
    likes: 10044,
    initialBid: {
      dollar: 1372.63,
      eth: 0.55,
    },
    currentBid: {
      dollar: 2121.34,
      eth: 0.85,
    },
    collection: {
      id: 1,
      name: 'گربه‌های کریپتو',
      items: 8,
      picture: '/assets/demo/img/nft/kitten-collection.png',
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
        id: 4,
        name: 'کن آی هز',
        bid: 0.85,
        time: '6 ساعت پیش',
        picture: '/assets/nft/avatars/cat.svg',
        url: '/',
      },
      {
        id: 3,
        name: 'دونی دارکو',
        bid: 0.75,
        time: '8 ساعت پیش',
        picture: '/assets/nft/avatars/reaper.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Apr 28, 2022',
    favorite: false,
  },
  {
    id: 16,
    name: 'سگ دوچرخه‌سوار',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/dog-1.png',
    slug: 'the-biker-dog',
    likes: 26581,
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
      picture: '/assets/demo/img/nft/dog-collection.png',
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
        id: 1,
        name: 'چامپی',
        bid: 0.85,
        time: '2 دقیقه پیش',
        picture: '/assets/nft/avatars/chomp.svg',
        url: '/',
      },
      {
        id: 5,
        name: 'کابوی',
        bid: 0.65,
        time: '2 ساعت پیش',
        picture: '/assets/nft/avatars/cow.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 26, 2022',
    favorite: false,
  },
  {
    id: 17,
    name: 'سگ پانک',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/dog-2.png',
    slug: 'the-punk-dog',
    likes: 11523,
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
      picture: '/assets/demo/img/nft/dog-collection.png',
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
        id: 1,
        name: 'چامپی',
        bid: 0.75,
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
      {
        id: 5,
        name: 'کابوی',
        bid: 0.39,
        time: 'Yesterday',
        picture: '/assets/nft/avatars/cow.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 28, 2022',
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
      picture: '/assets/demo/img/nft/dog-collection.png',
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
    id: 19,
    name: 'سگ خوشتیپ',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/dog-4.png',
    slug: 'the-styled-dog',
    likes: 25989,
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
      picture: '/assets/demo/img/nft/dog-collection.png',
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
        id: 5,
        name: 'کابوی',
        bid: 0.85,
        time: '45 minutes ago',
        picture: '/assets/nft/avatars/cow.svg',
        url: '/',
      },
      {
        id: 2,
        name: 'روبوتیکز',
        bid: 0.75,
        time: '3 ساعت پیش',
        picture: '/assets/nft/avatars/robot.svg',
        url: '/',
      },
      {
        id: 1,
        name: 'چامپی',
        bid: 0.65,
        time: '5 ساعت پیش',
        picture: '/assets/nft/avatars/chomp.svg',
        url: '/',
      },

      {
        id: 4,
        name: 'کن آی هز',
        bid: 0.55,
        time: 'Yesterday',
        picture: '/assets/nft/avatars/cat.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Apr 28, 2022',
    favorite: false,
  },
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
      picture: '/assets/demo/img/nft/dog-collection.png',
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
    id: 21,
    name: 'سگ آلوده',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/dog-6.png',
    slug: 'the-infected-dog',
    likes: 47812,
    initialBid: {
      dollar: 1123.06,
      eth: 0.45,
    },
    currentBid: {
      dollar: 4866.62,
      eth: 1.95,
    },
    collection: {
      id: 3,
      name: 'سگ‌های کریپتو',
      items: 8,
      picture: '/assets/demo/img/nft/dog-collection.png',
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
        id: 0,
        name: 'مردم تخم مرغی',
        bid: 1.95,
        time: '30 دقیقه پیش',
        picture: '/assets/nft/avatars/egg.svg',
        url: '/',
      },
      {
        id: 1,
        name: 'چامپی',
        bid: 1.85,
        time: '55 دقیقه پیش',
        picture: '/assets/nft/avatars/chomp.svg',
        url: '/',
      },
      {
        id: 2,
        name: 'کان هاز',
        bid: 1.75,
        time: '2 ساعت پیش',
        picture: '/assets/nft/avatars/cat.svg',
        url: '/',
      },
      {
        id: 3,
        name: 'روبوتیکز',
        bid: 1.65,
        time: '7 ساعت پیش',
        picture: '/assets/nft/avatars/robot.svg',
        url: '/',
      },
      {
        id: 4,
        name: 'کابوی',
        bid: 1.45,
        time: '7 ساعت پیش',
        picture: '/assets/nft/avatars/cow.svg',
        url: '/',
      },
      {
        id: 5,
        name: 'رزول',
        bid: 1.35,
        time: '7 ساعت پیش',
        picture: '/assets/nft/avatars/alien.svg',
        url: '/',
      },
      {
        id: 6,
        name: 'هامی',
        bid: 0.95,
        time: '7 ساعت پیش',
        picture: '/assets/nft/avatars/hammy.svg',
        url: '/',
      },
      {
        id: 7,
        name: 'موگ وی',
        bid: 0.75,
        time: '7 ساعت پیش',
        picture: '/assets/nft/avatars/mogwai.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 19, 2022',
    favorite: false,
  },
  {
    id: 23,
    name: 'سگ سیبیلو',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/dog-8.png',
    slug: 'the-mustache-dog',
    likes: 8977,
    initialBid: {
      dollar: 1123.06,
      eth: 0.45,
    },
    currentBid: {
      dollar: 2121.34,
      eth: 0.85,
    },
    collection: {
      id: 2,
      name: 'سگ‌های کریپتو',
      items: 8,
      picture: '/assets/demo/img/nft/dog-collection.png',
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
        id: 1,
        name: 'چامپی',
        bid: 0.85,
        time: '2 دقیقه پیش',
        picture: '/assets/nft/avatars/chomp.svg',
        url: '/',
      },
      {
        id: 0,
        name: 'مردم تخم مرغی',
        bid: 0.75,
        time: '55 دقیقه پیش',
        picture: '/assets/nft/avatars/egg.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 16, 2022',
    favorite: false,
  },
  {
    id: 24,
    name: 'نکو سیابر ماجراجو',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/neko-1.png',
    slug: 'the-adventure-cypher-neko',
    likes: 68579,
    initialBid: {
      dollar: 3119.61,
      eth: 1.25,
    },
    currentBid: {
      dollar: 5615.31,
      eth: 2.25,
    },
    collection: {
      id: 4,
      name: 'نکوهای سایفر',
      items: 8,
      picture: '/assets/demo/img/nft/neko-collection.png',
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
        id: 0,
        name: 'مردم تخم مرغی',
        bid: 2.25,
        time: '30 دقیقه پیش',
        picture: '/assets/nft/avatars/egg.svg',
        url: '/',
      },
      {
        id: 1,
        name: 'چامپی',
        bid: 1.95,
        time: '55 دقیقه پیش',
        picture: '/assets/nft/avatars/chomp.svg',
        url: '/',
      },
      {
        id: 2,
        name: 'روبوتیکز',
        bid: 1.65,
        time: '3 ساعت پیش',
        picture: '/assets/nft/avatars/robot.svg',
        url: '/',
      },
      {
        id: 4,
        name: 'کن آی هز',
        bid: 1.45,
        time: '9 ساعت پیش',
        picture: '/assets/nft/avatars/cat.svg',
        url: '/',
      },
      {
        id: 5,
        name: 'کابوی',
        bid: 1.35,
        time: 'Yesterday',
        picture: '/assets/nft/avatars/cow.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Apr 11, 2022',
    favorite: false,
  },
  {
    id: 25,
    name: 'نکو سایبر جهانگرد',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/neko-2.png',
    slug: 'the-explorer-cypher-neko',
    likes: 12544,
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
      picture: '/assets/demo/img/nft/neko-collection.png',
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
        id: 2,
        name: 'روبوتیکز',
        bid: 0.95,
        time: '3 ساعت پیش',
        picture: '/assets/nft/avatars/robot.svg',
        url: '/',
      },
      {
        id: 4,
        name: 'کن آی هز',
        bid: 0.85,
        time: '9 ساعت پیش',
        picture: '/assets/nft/avatars/cat.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 18, 2022',
    favorite: false,
  },
  {
    id: 26,
    name: 'نکو سایبر خلاف‌کار',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/neko-3.png',
    slug: 'the-pirate-cypher-neko',
    likes: 7858,
    initialBid: {
      dollar: 1871.77,
      eth: 0.75,
    },
    currentBid: {
      dollar: 2121.34,
      eth: 0.85,
    },
    collection: {
      id: 4,
      name: 'نکوهای سایفر',
      items: 8,
      picture: '/assets/demo/img/nft/neko-collection.png',
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
        bid: 0.85,
        time: '2 دقیقه پیش',
        picture: '/assets/nft/avatars/chomp.svg',
        url: '/',
      },
      {
        id: 0,
        name: 'مردم تخم مرغی',
        bid: 0.78,
        time: '30 دقیقه پیش',
        picture: '/assets/nft/avatars/egg.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'May 12, 2022',
    favorite: false,
  },
  {
    id: 27,
    name: 'نکو سایبر قاتل',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/neko-4.png',
    slug: 'the-ronin-cypher-neko',
    likes: 12659,
    initialBid: {
      dollar: 1871.77,
      eth: 0.75,
    },
    currentBid: {
      dollar: 2121.34,
      eth: 0.85,
    },
    collection: {
      id: 4,
      name: 'نکوهای سایفر',
      items: 8,
      picture: '/assets/demo/img/nft/neko-collection.png',
      thumbnails: [
        {
          picture: '/assets/demo/img/nft/monkey-2.jpg',
        },
        {
          picture: '/assets/demo/img/nft/monkey-2.jpg',
        },
        {
          picture: '/assets/demo/img/nft/monkey-2.jpg',
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
        name: 'کن آی هز',
        bid: 0.85,
        time: '9 ساعت پیش',
        picture: '/assets/nft/avatars/cat.svg',
        url: '/',
      },
      {
        id: 5,
        name: 'کابوی',
        bid: 0.78,
        time: 'Yesterday',
        picture: '/assets/nft/avatars/cow.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 28, 2022',
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
      picture: '/assets/demo/img/nft/neko-collection.png',
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
    id: 29,
    name: 'نکو سایبر فضایی',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/neko-6.png',
    slug: 'the-marine-cypher-neko',
    likes: 4984,
    initialBid: {
      dollar: 1871.77,
      eth: 0.75,
    },
    currentBid: {
      dollar: 2121.34,
      eth: 0.85,
    },
    collection: {
      id: 4,
      name: 'نکوهای سایفر',
      items: 8,
      picture: '/assets/demo/img/nft/neko-collection.png',
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
        id: 0,
        name: 'مردم تخم مرغی',
        bid: 0.85,
        time: '15 دقیقه پیش',
        picture: '/assets/nft/avatars/egg.svg',
        url: '/',
      },
      {
        id: 1,
        name: 'چامپی',
        bid: 0.78,
        time: '30 دقیقه پیش',
        picture: '/assets/nft/avatars/chomp.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 15, 2022',
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
      picture: '/assets/demo/img/nft/neko-collection.png',
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
    id: 31,
    name: 'نکو سایبر شوگان',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/neko-7.png',
    slug: 'the-shogun-cypher-neko',
    likes: 25665,
    initialBid: {
      dollar: 1871.77,
      eth: 0.75,
    },
    currentBid: {
      dollar: 2121.34,
      eth: 0.85,
    },
    collection: {
      id: 4,
      name: 'نکوهای سایفر',
      items: 8,
      picture: '/assets/demo/img/nft/neko-collection.png',
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
        name: 'کن آی هز',
        bid: 0.85,
        time: '9 ساعت پیش',
        picture: '/assets/nft/avatars/cat.svg',
        url: '/',
      },
      {
        id: 5,
        name: 'کابوی',
        bid: 0.78,
        time: 'Yesterday',
        picture: '/assets/nft/avatars/cow.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 27, 2022',
    favorite: false,
  },
  {
    id: 32,
    name: 'مومیایی فرعون',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/mummy-1.png',
    slug: 'the-pharaoh-mummy',
    likes: 3879,
    initialBid: {
      dollar: 873.49,
      eth: 0.35,
    },
    currentBid: {
      dollar: 2121.34,
      eth: 0.65,
    },
    collection: {
      id: 5,
      name: 'مومیایی‌های کریپتو',
      items: 8,
      picture: '/assets/demo/img/nft/mummy-collection.png',
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
        id: 4,
        name: 'کن آی هز',
        bid: 0.65,
        time: '9 ساعت پیش',
        picture: '/assets/nft/avatars/cat.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 28, 2022',
    favorite: false,
  },
  {
    id: 33,
    name: 'مومیایی باکلاس',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/mummy-2.png',
    slug: 'the-classy-mummy',
    likes: 3777,
    initialBid: {
      dollar: 873.49,
      eth: 0.35,
    },
    currentBid: {
      dollar: 2121.34,
      eth: 0.55,
    },
    collection: {
      id: 5,
      name: 'مومیایی‌های کریپتو',
      items: 8,
      picture: '/assets/demo/img/nft/mummy-collection.png',
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
        name: 'رزول',
        bid: 0.55,
        time: '4 ساعت پیش',
        picture: '/assets/nft/avatars/alien.svg',
        url: '/',
      },
      {
        id: 6,
        name: 'هامی',
        bid: 0.45,
        time: '7 ساعت پیش',
        picture: '/assets/nft/avatars/hammy.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 28, 2022',
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
      picture: '/assets/demo/img/nft/mummy-collection.png',
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
    id: 35,
    name: 'مومیایی هنرمند',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/mummy-4.png',
    slug: 'the-artist-mummy',
    likes: 2544,
    initialBid: {
      dollar: 873.49,
      eth: 0.35,
    },
    currentBid: {
      dollar: 1871.77,
      eth: 0.75,
    },
    collection: {
      id: 5,
      name: 'مومیایی‌های کریپتو',
      items: 8,
      picture: '/assets/demo/img/nft/mummy-collection.png',
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
        id: 4,
        name: 'کن آی هز',
        bid: 0.75,
        time: '5 ساعت پیش',
        picture: '/assets/nft/avatars/cat.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 16, 2022',
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
      picture: '/assets/demo/img/nft/mummy-collection.png',
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
    id: 37,
    name: 'مومیایی ۳ بعدی',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/mummy-6.png',
    slug: 'the-3d-mummy',
    likes: 4221,
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
      picture: '/assets/demo/img/nft/mummy-collection.png',
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
        time: '20 دقیقه پیش',
        picture: '/assets/nft/avatars/chomp.svg',
        url: '/',
      },
      {
        id: 4,
        name: 'کن آی هز',
        bid: 0.75,
        time: '2 ساعت پیش',
        picture: '/assets/nft/avatars/cat.svg',
        url: '/',
      },
      {
        id: 0,
        name: 'مردم تخم مرغی',
        bid: 0.65,
        time: '3 ساعت پیش',
        picture: '/assets/nft/avatars/egg.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 30, 2022',
    favorite: false,
  },
  {
    id: 38,
    name: 'مومیایی امپراطور',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/mummy-7.png',
    slug: 'the-emperor-mummy',
    likes: 5631,
    initialBid: {
      dollar: 873.49,
      eth: 0.35,
    },
    currentBid: {
      dollar: 2370.91,
      eth: 0.95,
    },
    collection: {
      id: 5,
      name: 'مومیایی‌های کریپتو',
      items: 8,
      picture: '/assets/demo/img/nft/mummy-collection.png',
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
        id: 0,
        name: 'مردم تخم مرغی',
        bid: 0.95,
        time: '30 دقیقه پیش',
        picture: '/assets/nft/avatars/egg.svg',
        url: '/',
      },
      {
        id: 2,
        name: 'روبوتیکز',
        bid: 0.75,
        time: '3 ساعت پیش',
        picture: '/assets/nft/avatars/robot.svg',
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
      {
        id: 5,
        name: 'کابوی',
        bid: 0.55,
        time: 'Yesterday',
        picture: '/assets/nft/avatars/cow.svg',
        url: '/',
      },
      {
        id: 1,
        name: 'چامپی',
        bid: 0.45,
        time: 'Yesterday',
        picture: '/assets/nft/avatars/chomp.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 30, 2022',
    favorite: false,
  },
  {
    id: 39,
    name: 'آنخ آتون',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/mummy-8.png',
    slug: 'the-ankh-mummy',
    likes: 11000,
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
      picture: '/assets/demo/img/nft/mummy-collection.png',
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
        name: 'رزول',
        bid: 0.85,
        time: '2 ساعت پیش',
        picture: '/assets/nft/avatars/alien.svg',
        url: '/',
      },
      {
        id: 6,
        name: 'هامی',
        bid: 0.75,
        time: '7 ساعت پیش',
        picture: '/assets/nft/avatars/hammy.svg',
        url: '/',
      },
      {
        id: 7,
        name: 'موگ وی',
        bid: 0.65,
        time: '11 ساعت پیش',
        picture: '/assets/nft/avatars/mogwai.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 28, 2022',
    favorite: false,
  },
  {
    id: 40,
    name: 'عقاب کاسب',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/eagle-1.png',
    slug: 'the-business-eagle',
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
      picture: '/assets/demo/img/nft/eagle-collection.png',
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
      picture: '/assets/demo/img/nft/eagle-collection.png',
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
      picture: '/assets/demo/img/nft/eagle-collection.png',
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
    id: 43,
    name: 'عقاب قانونمند',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/eagle-4.png',
    slug: 'the-law-eagle',
    likes: 16189,
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
      picture: '/assets/demo/img/nft/eagle-collection.png',
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
        id: 3,
        name: 'دونی دارکو',
        bid: 0.55,
        time: '2 دقیقه پیش',
        picture: '/assets/nft/avatars/reaper.svg',
        url: '/',
      },
      {
        id: 1,
        name: 'چامپی',
        bid: 0.52,
        time: '10 دقیقه پیش',
        picture: '/assets/nft/avatars/chomp.svg',
        url: '/',
      },
      {
        id: 5,
        name: 'رزول',
        bid: 0.49,
        time: '2 ساعت پیش',
        picture: '/assets/nft/avatars/alien.svg',
        url: '/',
      },
      {
        id: 6,
        name: 'هامی',
        bid: 0.41,
        time: '4 ساعت پیش',
        picture: '/assets/nft/avatars/hammy.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 19, 2022',
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
      picture: '/assets/demo/img/nft/eagle-collection.png',
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
    id: 45,
    name: 'عقاب پانکی',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/monkey-6.png',
    slug: 'the-punky-eagle',
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
      name: 'عقاب‌های کریپتو',
      items: 8,
      picture: '/assets/demo/img/nft/eagle-collection.png',
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
    id: 46,
    name: 'عقاب خلبان',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/eagle-7.png',
    slug: 'the-aviator-eagle',
    likes: 31516,
    initialBid: {
      dollar: 873.49,
      eth: 0.35,
    },
    currentBid: {
      dollar: 1123.06,
      eth: 0.45,
    },
    collection: {
      id: 0,
      name: 'عقاب‌های کریپتو',
      items: 8,
      picture: '/assets/demo/img/nft/eagle-collection.png',
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
        id: 1,
        name: 'چامپی',
        bid: 0.45,
        time: '55 دقیقه پیش',
        picture: '/assets/nft/avatars/chomp.svg',
        url: '/',
      },
      {
        id: 2,
        name: 'کان هاز',
        bid: 0.39,
        time: '3 ساعت پیش',
        picture: '/assets/nft/avatars/cat.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 14, 2022',
    favorite: false,
  },
  {
    id: 47,
    name: 'عقاب ورزشکار',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/eagle-8.png',
    slug: 'the-sports-eagle',
    likes: 14581,
    initialBid: {
      dollar: 873.49,
      eth: 0.35,
    },
    currentBid: {
      dollar: 2370.91,
      eth: 0.95,
    },
    collection: {
      id: 0,
      name: 'عقاب‌های کریپتو',
      items: 8,
      picture: '/assets/demo/img/nft/eagle-collection.png',
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
        id: 1,
        name: 'چامپی',
        bid: 0.95,
        time: '30 دقیقه پیش',
        picture: '/assets/nft/avatars/chomp.svg',
        url: '/',
      },
      {
        id: 2,
        name: 'کان هاز',
        bid: 0.75,
        time: '45 دقیقه پیش',
        picture: '/assets/nft/avatars/cat.svg',
        url: '/',
      },
      {
        id: 6,
        name: 'هامی',
        bid: 0.65,
        time: '2 ساعت پیش',
        picture: '/assets/nft/avatars/hammy.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 25, 2022',
    favorite: false,
  },
  {
    id: 48,
    name: 'جمجمه آفرو',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/skull-1.png',
    slug: 'the-afro-skull',
    likes: 13278,
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
      name: 'جمجمه‌های بامزه',
      items: 8,
      picture: '/assets/demo/img/nft/skull-collection.png',
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
        name: 'روبوتیکز',
        bid: 0.62,
        time: '3 ساعت پیش',
        picture: '/assets/nft/avatars/robot.svg',
        url: '/',
      },
      {
        id: 5,
        name: 'رزول',
        bid: 0.59,
        time: '7 ساعت پیش',
        picture: '/assets/nft/avatars/alien.svg',
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
    auctionEnd: 'Feb 29, 2022',
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
      picture: '/assets/demo/img/nft/skull-collection.png',
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
    id: 50,
    name: 'کینگ جمجمه',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/skull-3.png',
    slug: 'the-king-skull',
    likes: 4598,
    initialBid: {
      dollar: 1372.63,
      eth: 0.55,
    },
    currentBid: {
      dollar: 1622.21,
      eth: 0.65,
    },
    collection: {
      id: 1,
      name: 'جمجمه‌های بامزه',
      items: 8,
      picture: '/assets/demo/img/nft/skull-collection.png',
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
        id: 6,
        name: 'هامی',
        bid: 0.65,
        time: '2 ساعت پیش',
        picture: '/assets/nft/avatars/hammy.svg',
        url: '/',
      },
      {
        id: 7,
        name: 'موگ وی',
        bid: 0.59,
        time: '5 ساعت پیش',
        picture: '/assets/nft/avatars/mogwai.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Apr 15, 2022',
    favorite: false,
  },
  {
    id: 51,
    name: 'جمجمه دیسکو',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/skull-4.png',
    slug: 'the-disco-skull',
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
      name: 'جمجمه‌های بامزه',
      items: 8,
      picture: '/assets/demo/img/nft/skull-collection.png',
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
  {
    id: 52,
    name: 'جمجمه گنگستر',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/skull-5.png',
    slug: 'the-gangsta-skull',
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
      name: 'جمجمه‌های بامزه',
      items: 8,
      picture: '/assets/demo/img/nft/skull-collection.png',
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
      picture: '/assets/demo/img/nft/skull-collection.png',
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
    id: 54,
    name: 'جمجمه متفکر',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/skull-7.png',
    slug: 'the-thinking-skull',
    likes: 977,
    initialBid: {
      dollar: 1372.63,
      eth: 0.55,
    },
    currentBid: {
      dollar: 2121.34,
      eth: 0.85,
    },
    collection: {
      id: 1,
      name: 'جمجمه‌های بامزه',
      items: 8,
      picture: '/assets/demo/img/nft/skull-collection.png',
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
        id: 5,
        name: 'رزول',
        bid: 0.85,
        time: '3 ساعت پیش',
        picture: '/assets/nft/avatars/alien.svg',
        url: '/',
      },
      {
        id: 6,
        name: 'هامی',
        bid: 0.82,
        time: '4 ساعت پیش',
        picture: '/assets/nft/avatars/hammy.svg',
        url: '/',
      },
      {
        id: 7,
        name: 'موگ وی',
        bid: 0.77,
        time: '5 ساعت پیش',
        picture: '/assets/nft/avatars/mogwai.svg',
        url: '/',
      },
      {
        id: 2,
        name: 'روبوتیکز',
        bid: 0.71,
        time: '8 ساعت پیش',
        picture: '/assets/nft/avatars/robot.svg',
        url: '/',
      },
      {
        id: 3,
        name: 'دونی دارکو',
        bid: 0.68,
        time: '9 ساعت پیش',
        picture: '/assets/nft/avatars/reaper.svg',
        url: '/',
      },
      {
        id: 4,
        name: 'کن آی هز',
        bid: 0.62,
        time: 'Yesterday',
        picture: '/assets/nft/avatars/cat.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Mar 22, 2022',
    favorite: false,
  },
  {
    id: 55,
    name: 'هایزن‌جمجمه',
    description:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است ',
    preview: '/assets/demo/img/nft/skull-8.png',
    slug: 'the-heisen-skull',
    likes: 10044,
    initialBid: {
      dollar: 1372.63,
      eth: 0.55,
    },
    currentBid: {
      dollar: 2121.34,
      eth: 0.85,
    },
    collection: {
      id: 1,
      name: 'جمجمه‌های بامزه',
      items: 8,
      picture: '/assets/demo/img/nft/skull-collection.png',
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
        id: 4,
        name: 'کن آی هز',
        bid: 0.85,
        time: '6 ساعت پیش',
        picture: '/assets/nft/avatars/cat.svg',
        url: '/',
      },
      {
        id: 3,
        name: 'دونی دارکو',
        bid: 0.75,
        time: '8 ساعت پیش',
        picture: '/assets/nft/avatars/reaper.svg',
        url: '/',
      },
    ],
    comments: [],
    auctionEnd: 'Apr 28, 2022',
    favorite: false,
  },
]
