export const blogPostsBlockAProps = {
  props: [
    {
      name: 'posts',
      type: 'array',
      required: 'true',
      default: '( ) => [ ]',
      values: ['برای مشاهده ساختار داده نمونه، به زبانه نمونه مراجعه کنید'],
    },
    {
      name: 'limit',
      type: 'number',
      required: 'false',
      default: '20',
      values: ['number'],
    },
    {
      name: 'upsideDown',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}

export const blogPostsBlockA = `
<script setup lang="ts">
import { posts } from '/@src/data/pages/blog'
</script>

<template>
  <BlogGrid :posts="posts" :limit="3" upside-down />
</template>
`

export const blogPostsBlockASample = `
export const posts = [
  {
    id: 0,
    image: '/assets/demo/img/posts/1.jpg',
    title: 'نحوه انجام تجزیه و تحلیل رقبای آمازون',
    abstract:
      'فروش در آمازون نبردی است که دائماً در حال جنگیدن آن هستید، چه در مورد مدیریت عملیات خود...',
    views: '۱،۱ هزار',
    category: 'تجارت',
    date: '17 مرداد ۱۴۰۳',
    duration: 2,
    author: {
      photo: '/assets/demo/img/avatars/45.jpg',
      role: 'Author',
      name: 'جان دو',
    },
    content:
      '<p> امروزه، سرمایه‌گذاری در تبلیغات بخشی جدایی‌ناپذیر از هزینه‌های کسب‌وکار است، اما اگر نتایج تبلیغات زمان زیادی برای ظهور نیاز داشته باشد، می‌تواند شما را در چالشی قرار دهد که رهایی از آن دشوار است. بسیاری از کسب‌وکارهای کوچک برای حل این مشکل دقیقاً به وولک مراجعه می‌کنند - برای بهبود عملکرد تبلیغات خود در هنگام افزایش هزینه تبلیغات آمازون.. </p>',
  },
  {
    id: 1,
    image: '/assets/demo/img/posts/2.jpg',
    title: 'نحوه درخواست بررسی در آمازون (ایمن)',
    abstract:
      'بررسی ها برای موفقیت تجارت الکترونیک شما ضروری است، به خصوص اگر در آمازون بفروشید. برخط...',
    views: '۱،۱ هزار',
    category: 'تجارت',
    date: '17 مرداد ۱۴۰۳',
    duration: 2,
    author: {
      photo: '/assets/demo/img/avatars/42.jpg',
      role: 'Author',
      name: 'جان دو',
    },
    content:
      '<p> امروزه، سرمایه‌گذاری در تبلیغات بخشی جدایی‌ناپذیر از هزینه‌های کسب‌وکار است، اما اگر نتایج تبلیغات زمان زیادی برای ظهور نیاز داشته باشد، می‌تواند شما را در چالشی قرار دهد که رهایی از آن دشوار است. بسیاری از کسب‌وکارهای کوچک برای حل این مشکل دقیقاً به وولک مراجعه می‌کنند - برای بهبود عملکرد تبلیغات خود در هنگام افزایش هزینه تبلیغات آمازون.. </p>',
  },
  {
    id: 2,
    image: '/assets/demo/img/posts/3.jpg',
    title: 'زنجیره تامین آمازون چگونه کار می‌کند',
    abstract:
      'چه یک شرکت بزرگتر یا کوچکتر باشید که به دنبال گسترش عملیات آنلاین خود هستید، آمازون یک ...',
    views: '۱،۲ هزار',
    category: 'تجارت',
    date: '17 مرداد ۱۴۰۳',
    duration: 2,
    author: {
      photo: '/assets/demo/img/avatars/30.jpg',
      role: 'Author',
      name: 'جان دو',
    },
    content:
      '<p> امروزه، سرمایه‌گذاری در تبلیغات بخشی جدایی‌ناپذیر از هزینه‌های کسب‌وکار است، اما اگر نتایج تبلیغات زمان زیادی برای ظهور نیاز داشته باشد، می‌تواند شما را در چالشی قرار دهد که رهایی از آن دشوار است. بسیاری از کسب‌وکارهای کوچک برای حل این مشکل دقیقاً به وولک مراجعه می‌کنند - برای بهبود عملکرد تبلیغات خود در هنگام افزایش هزینه تبلیغات آمازون.. </p>',
  },
  {
    id: 3,
    image: '/assets/demo/img/posts/4.jpg',
    title: 'Amazon Sponsored Display Ads: A Full-Funnel Approach',
    abstract:
      'A full-funnel of self-service ads for Amazon sellers and brands is made up of Sponsored  Products...',
    views: '۱،۴ هزار',
    category: 'تجارت',
    date: '17 مرداد ۱۴۰۳',
    duration: 2,
    author: {
      photo: '/assets/demo/img/avatars/17.jpg',
      role: 'Author',
      name: 'جان دو',
    },
    content:
      '<p> امروزه، سرمایه‌گذاری در تبلیغات بخشی جدایی‌ناپذیر از هزینه‌های کسب‌وکار است، اما اگر نتایج تبلیغات زمان زیادی برای ظهور نیاز داشته باشد، می‌تواند شما را در چالشی قرار دهد که رهایی از آن دشوار است. بسیاری از کسب‌وکارهای کوچک برای حل این مشکل دقیقاً به وولک مراجعه می‌کنند - برای بهبود عملکرد تبلیغات خود در هنگام افزایش هزینه تبلیغات آمازون.. </p>',
  },
  {
    id: 4,
    image: '/assets/demo/img/posts/5.jpg',
    title: 'Expanding Your Ecommerce Business Internationally',
    abstract:
      'I had a great talk with Ryan Cramer, fellow-of-all trades at PingPong. PingPong offers solutions for...',
    views: '۱،۶ هزار',
    category: 'تجارت',
    date: '17 مرداد ۱۴۰۳',
    duration: 2,
    author: {
      photo: '/assets/demo/img/avatars/15.jpg',
      role: 'Author',
      name: 'جان دو',
    },
    content:
      '<p> امروزه، سرمایه‌گذاری در تبلیغات بخشی جدایی‌ناپذیر از هزینه‌های کسب‌وکار است، اما اگر نتایج تبلیغات زمان زیادی برای ظهور نیاز داشته باشد، می‌تواند شما را در چالشی قرار دهد که رهایی از آن دشوار است. بسیاری از کسب‌وکارهای کوچک برای حل این مشکل دقیقاً به وولک مراجعه می‌کنند - برای بهبود عملکرد تبلیغات خود در هنگام افزایش هزینه تبلیغات آمازون.. </p>',
  },
  {
    id: 5,
    image: '/assets/demo/img/posts/6.jpg',
    title: 'Advanced Accounting Tips to Grow Profits For Your Brand',
    abstract:
      'Cyndi Thomason, founder of bookskeep and best-selling author of Profit First For Ecommerce Sellers, joined...',
    views: '۲،۱ هزار',
    category: 'تجارت',
    date: '17 مرداد ۱۴۰۳',
    duration: 2,
    author: {
      photo: '/assets/demo/img/avatars/58.jpg',
      role: 'Author',
      name: 'جان دو',
    },
    content:
      '<p> امروزه، سرمایه‌گذاری در تبلیغات بخشی جدایی‌ناپذیر از هزینه‌های کسب‌وکار است، اما اگر نتایج تبلیغات زمان زیادی برای ظهور نیاز داشته باشد، می‌تواند شما را در چالشی قرار دهد که رهایی از آن دشوار است. بسیاری از کسب‌وکارهای کوچک برای حل این مشکل دقیقاً به وولک مراجعه می‌کنند - برای بهبود عملکرد تبلیغات خود در هنگام افزایش هزینه تبلیغات آمازون.. </p>',
  },
  {
    id: 6,
    image: '/assets/demo/img/posts/7.jpg',
    title: 'Are My Walmart Listings Ready for Advertising?',
    abstract:
      'My team and I have the privilege of working with many sellers who are new to advertising on Walmart or...',
    views: '۲،۱ هزار',
    category: 'تجارت',
    date: '17 مرداد ۱۴۰۳',
    duration: 2,
    author: {
      photo: '/assets/demo/img/avatars/55.jpg',
      role: 'Author',
      name: 'جان دو',
    },
    content:
      '<p> امروزه، سرمایه‌گذاری در تبلیغات بخشی جدایی‌ناپذیر از هزینه‌های کسب‌وکار است، اما اگر نتایج تبلیغات زمان زیادی برای ظهور نیاز داشته باشد، می‌تواند شما را در چالشی قرار دهد که رهایی از آن دشوار است. بسیاری از کسب‌وکارهای کوچک برای حل این مشکل دقیقاً به وولک مراجعه می‌کنند - برای بهبود عملکرد تبلیغات خود در هنگام افزایش هزینه تبلیغات آمازون.. </p>',
  },
  {
    id: 7,
    image: '/assets/demo/img/posts/8.jpg',
    title: 'Seven Ways To Increase Your Amazon Sales In 2022',
    abstract:
      'In 2022, ecommerce is thriving like never before, and Amazon is the leading marketplace. If you’re...',
    views: '۲،۴ هزار',
    category: 'تجارت',
    date: '17 مرداد ۱۴۰۳',
    duration: 2,
    author: {
      photo: '/assets/demo/img/avatars/53.jpg',
      role: 'Author',
      name: 'جان دو',
    },
    content:
      '<p> امروزه، سرمایه‌گذاری در تبلیغات بخشی جدایی‌ناپذیر از هزینه‌های کسب‌وکار است، اما اگر نتایج تبلیغات زمان زیادی برای ظهور نیاز داشته باشد، می‌تواند شما را در چالشی قرار دهد که رهایی از آن دشوار است. بسیاری از کسب‌وکارهای کوچک برای حل این مشکل دقیقاً به وولک مراجعه می‌کنند - برای بهبود عملکرد تبلیغات خود در هنگام افزایش هزینه تبلیغات آمازون.. </p>',
  },
  {
    id: 8,
    image: '/assets/demo/img/posts/9.jpg',
    title: 'Walmart Advertising: The Definitive Guide',
    abstract:
      'Prefer to save or print this information and take it with you? Download the ebook version. 1. What is...',
    views: '۳،۲ هزار',
    category: 'تجارت',
    date: '17 مرداد ۱۴۰۳',
    duration: 2,
    author: {
      photo: '/assets/demo/img/avatars/35.jpg',
      role: 'Author',
      name: 'جان دو',
    },
    content:
      '<p> امروزه، سرمایه‌گذاری در تبلیغات بخشی جدایی‌ناپذیر از هزینه‌های کسب‌وکار است، اما اگر نتایج تبلیغات زمان زیادی برای ظهور نیاز داشته باشد، می‌تواند شما را در چالشی قرار دهد که رهایی از آن دشوار است. بسیاری از کسب‌وکارهای کوچک برای حل این مشکل دقیقاً به وولک مراجعه می‌کنند - برای بهبود عملکرد تبلیغات خود در هنگام افزایش هزینه تبلیغات آمازون.. </p>',
  },
  {
    id: 9,
    image: '/assets/demo/img/posts/10.jpg',
    title: 'Seven Ways To Increase Your Amazon Sales In 2022',
    abstract:
      'In 2022, ecommerce is thriving like never before, and Amazon is the leading marketplace. If you’re...',
    views: '۳،۷ هزار',
    category: 'تجارت',
    date: '17 مرداد ۱۴۰۳',
    duration: 2,
    author: {
      photo: '/assets/demo/img/avatars/36.jpg',
      role: 'Author',
      name: 'جان دو',
    },
    content:
      '<p> امروزه، سرمایه‌گذاری در تبلیغات بخشی جدایی‌ناپذیر از هزینه‌های کسب‌وکار است، اما اگر نتایج تبلیغات زمان زیادی برای ظهور نیاز داشته باشد، می‌تواند شما را در چالشی قرار دهد که رهایی از آن دشوار است. بسیاری از کسب‌وکارهای کوچک برای حل این مشکل دقیقاً به وولک مراجعه می‌کنند - برای بهبود عملکرد تبلیغات خود در هنگام افزایش هزینه تبلیغات آمازون.. </p>',
  },
  {
    id: 10,
    image: '/assets/demo/img/posts/11.jpg',
    title: 'Walmart Advertising: The Definitive Guide',
    abstract:
      'Prefer to save or print this information and take it with you? Download the ebook version. 1. What is...',
    views: '۴،۱ هزار',
    category: 'تجارت',
    date: '17 مرداد ۱۴۰۳',
    duration: 2,
    author: {
      photo: '/assets/demo/img/avatars/31.jpg',
      role: 'Author',
      name: 'جان دو',
    },
    content:
      '<p> امروزه، سرمایه‌گذاری در تبلیغات بخشی جدایی‌ناپذیر از هزینه‌های کسب‌وکار است، اما اگر نتایج تبلیغات زمان زیادی برای ظهور نیاز داشته باشد، می‌تواند شما را در چالشی قرار دهد که رهایی از آن دشوار است. بسیاری از کسب‌وکارهای کوچک برای حل این مشکل دقیقاً به وولک مراجعه می‌کنند - برای بهبود عملکرد تبلیغات خود در هنگام افزایش هزینه تبلیغات آمازون.. </p>',
  },
  {
    id: 11,
    image: '/assets/demo/img/posts/12.jpg',
    title: '5 Key Levers to Drive Profits—Levers 3, 4 and 5',
    abstract:
      'Note: This is part 4 in a 4 part series on profitability. Read part 1 here, part 2 here, and part 3 here. ...',
    views: '۵،۶ هزار',
    category: 'تجارت',
    date: '17 مرداد ۱۴۰۳',
    duration: 2,
    author: {
      photo: '/assets/demo/img/avatars/39.jpg',
      role: 'Author',
      name: 'جان دو',
    },
    content:
      '<p> امروزه، سرمایه‌گذاری در تبلیغات بخشی جدایی‌ناپذیر از هزینه‌های کسب‌وکار است، اما اگر نتایج تبلیغات زمان زیادی برای ظهور نیاز داشته باشد، می‌تواند شما را در چالشی قرار دهد که رهایی از آن دشوار است. بسیاری از کسب‌وکارهای کوچک برای حل این مشکل دقیقاً به وولک مراجعه می‌کنند - برای بهبود عملکرد تبلیغات خود در هنگام افزایش هزینه تبلیغات آمازون.. </p>',
  },
]
`
