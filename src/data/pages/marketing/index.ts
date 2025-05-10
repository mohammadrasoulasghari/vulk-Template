import type { HeroAvatar } from '/@src/components/layout/hero/modules/HeroAvatars.vue'
import type { BaseFeature } from '/@src/types'

export const heroAvatars: HeroAvatar[] = [
  {
    id: 0,
    picture: '/assets/demo/img/avatars/57.jpg',
    orientation: 'left',
    order: 1,
    size: '',
  },
  {
    id: 1,
    picture: '/assets/demo/img/avatars/42.jpg',
    orientation: 'left',
    order: 2,
    size: 'medium',
  },
  {
    id: 2,
    picture: '/assets/demo/img/avatars/41.jpg',
    orientation: 'left',
    order: 3,
    size: 'large',
  },
  {
    id: 3,
    picture: '/assets/demo/img/avatars/15.jpg',
    orientation: 'left',
    order: 4,
    size: 'big',
  },
  {
    id: 4,
    picture: '/assets/demo/img/avatars/47.jpg',
    orientation: 'left',
    order: 5,
    size: '',
  },
  {
    id: 5,
    picture: '/assets/demo/img/avatars/21.jpg',
    orientation: 'left',
    order: 6,
    size: 'medium',
  },
  {
    id: 6,
    picture: '/assets/demo/img/avatars/58.jpg',
    orientation: 'right',
    order: 1,
    size: '',
  },
  {
    id: 7,
    picture: '/assets/demo/img/avatars/31.jpg',
    orientation: 'right',
    order: 2,
    size: 'medium',
  },
  {
    id: 8,
    picture: '/assets/demo/img/avatars/45.jpg',
    orientation: 'right',
    order: 3,
    size: 'large',
  },
  {
    id: 9,
    picture: '/assets/demo/img/avatars/30.jpg',
    orientation: 'right',
    order: 4,
    size: 'big',
  },
  {
    id: 10,
    picture: '/assets/demo/img/avatars/55.jpg',
    orientation: 'right',
    order: 5,
    size: '',
  },
  {
    id: 11,
    picture: '/assets/demo/img/avatars/56.jpg',
    orientation: 'right',
    order: 6,
    size: 'medium',
  },
]

export const appFeatures: BaseFeature[] = [
  {
    title: 'مجهز به هوش مصنوعی',
    text: 'هوش مصنوعی ما هر عملیات پیچیده را انجام می‌دهد و به شما امکان می‌دهد تمرکز کنید.',
  },
  {
    title: 'داده های زمان واقعی',
    text: 'تمام داده های شما برای عملکرد بهتر در زمان واقعی پردازش می‌شوند.',
  },
  {
    title: 'سریع و ایمن',
    text: 'داده های شما در مقایسه با شبکه های سنتی عملا غیرقابل هک هستند.',
  },
]

export const tabbedProcess = {
  steps: [
    {
      id: 0,
      icon: '/assets/icons/abstract/1.svg',
      title: 'ایجاد کمپین مبتنی بر هدف',
      content:
        'پایه ای برای موفقیت بلندمدت بسازید. اتوماسیون ما از اهداف فردی شما در سطح محصول برای ایجاد کمپین های تبلیغاتی بهینه در چهار مرحله ساده استفاده می‌کند.',
    },
    {
      id: 1,
      icon: '/assets/icons/abstract/2.svg',
      title: 'مناقصه کلمه کلیدی الگوریتمی',
      content:
        'هرگز دوباره پیشنهاد قیمت کلمه کلیدی را تنظیم نکنید. بهینه‌سازی مبتنی بر هوش مصنوعی ما از اهداف شما برای یافتن ارزش پیشنهادی ایده‌آل خود استفاده می‌کند، بنابراین همیشه فروش را با قیمتی که برای شما مناسب است به دست می‌آورید.',
    },
    {
      id: 2,
      icon: '/assets/icons/abstract/3.svg',
      title: 'هدف گذاری خودکار کلمات کلیدی',
      content:
        'کلمات کلیدی خود را برای رشد فروش و سودآوری بهینه کنید. به طور خودکار کلیدواژه های تبدیل کننده جدید را ضبط کنید و در عین حال کلمات کلیدی را که به عملکرد آسیب می‌زند نفی کنید.',
    },
    {
      id: 3,
      icon: '/assets/icons/abstract/4.svg',
      title: 'تجزیه و تحلیل سفارشی',
      content:
        'پیشرفت در رسیدن به اهداف خود را دنبال کنید. عملکرد کل کسب و کار خود را با معیارهای محصول، کمپین و سودآوری فردی و ترکیبی درک کنید.',
    },
  ],
  images: [
    {
      id: 0,
      url: '/assets/illustrations/placeholder/placeholder-process-1.png',
      darkUrl:
        '/assets/illustrations/placeholder/placeholder-process-1-dark.png',
    },
    {
      id: 2,
      url: '/assets/illustrations/placeholder/placeholder-process-2.png',
      darkUrl:
        '/assets/illustrations/placeholder/placeholder-process-2-dark.png',
    },
    {
      id: 3,
      url: '/assets/illustrations/placeholder/placeholder-process-3.png',
      darkUrl:
        '/assets/illustrations/placeholder/placeholder-process-3-dark.png',
    },
    {
      id: 4,
      url: '/assets/illustrations/placeholder/placeholder-process-4.png',
      darkUrl:
        '/assets/illustrations/placeholder/placeholder-process-4-dark.png',
    },
  ],
}

export const marketingProcess = {
  steps: [
    {
      id: 0,
      icon: '/assets/icons/abstract/1.svg',
      title: 'ایجاد کمپین مبتنی بر هدف',
      content:
        'پایه ای برای موفقیت بلندمدت بسازید. اتوماسیون ما از اهداف فردی شما در سطح محصول برای ایجاد کمپین های تبلیغاتی بهینه در چهار مرحله ساده استفاده می‌کند.',
      image: '/assets/illustrations/workflow/workflow-1.png',
      imageDark: '/assets/illustrations/workflow/workflow-1-dark.png',
    },
    {
      id: 1,
      icon: '/assets/icons/abstract/2.svg',
      title: 'مناقصه کلمه کلیدی الگوریتمی',
      content:
        'هرگز دوباره پیشنهاد قیمت کلمه کلیدی را تنظیم نکنید. بهینه‌سازی مبتنی بر هوش مصنوعی ما از اهداف شما برای یافتن ارزش پیشنهادی ایده‌آل خود استفاده می‌کند، بنابراین همیشه فروش را با قیمتی که برای شما مناسب است به دست می‌آورید.',
      image: '/assets/illustrations/workflow/workflow-2.png',
      imageDark: '/assets/illustrations/workflow/workflow-2-dark.png',
    },
    {
      id: 2,
      icon: '/assets/icons/abstract/3.svg',
      title: 'هدف گذاری خودکار کلمات کلیدی',
      content:
        'کلمات کلیدی خود را برای رشد فروش و سودآوری بهینه کنید. به طور خودکار کلیدواژه های تبدیل کننده جدید را ضبط کنید و در عین حال کلمات کلیدی را که به عملکرد آسیب می‌زند نفی کنید.',
      image: '/assets/illustrations/workflow/workflow-3.png',
      imageDark: '/assets/illustrations/workflow/workflow-3-dark.png',
    },
    {
      id: 3,
      icon: '/assets/icons/abstract/4.svg',
      title: 'تجزیه و تحلیل سفارشی',
      content:
        'پیشرفت در رسیدن به اهداف خود را دنبال کنید. عملکرد کل کسب و کار خود را با معیارهای محصول، کمپین و سودآوری فردی و ترکیبی درک کنید.',
      image: '/assets/illustrations/workflow/workflow-4.png',
      imageDark: '/assets/illustrations/workflow/workflow-4-dark.png',
    },
  ],
}

export const marketingStats = [
  {
    id: 0,
    prefix: '',
    suffix: ' ترابایت',
    value: 40,
    text: 'از داده‌های سالانه پردازش شده',
  },
  {
    id: 1,
    prefix: '',
    suffix: ' م. تومان',
    value: 7,
    text: 'فروش آمازون و والمارت سالانه',
  },
  {
    id: 2,
    prefix: '',
    suffix: ' میلیون',
    value: 750,
    text: 'تارگت‌های مشخص و محقق شده',
  },
  {
    id: 3,
    prefix: '',
    suffix: ' م. تومان',
    value: 450,
    text: 'تبلیغات مدیریت شده در کمپین‌های هوشمند',
  },
]

export const testimonials = [
  {
    id: 0,
    customer: {
      name: 'مایک ویلیامز',
      photo: '/assets/demo/img/avatars/1.jpg',
      position: 'مؤسس @Covenant',
    },
    logo: '/assets/brands/covenant.svg',
    content:
      'نرم افزار وولک به طور قابل توجهی قوی است و تحلیلگران آنها به ما کمک کرده اند تا سودآوری خود را به حداکثر برسانیم و واقعاً ارزش افزایشی تبلیغات وب خود را درک کنیم.',
  },
  {
    id: 1,
    customer: {
      name: 'تارا رید',
      photo: '/assets/demo/img/avatars/2.jpg',
      position: 'مدیر مالی @Kromo',
    },
    logo: '/assets/brands/kromo.svg',
    content:
      'نه تنها معیارها و عملکرد ما بالاتر و فراتر از انتظارات است، بلکه من واقعاً تحت تأثیر روشی که آنها کسب و کار ما را مدیریت می‌کنند، شده ام.',
  },
  {
    id: 2,
    customer: {
      name: 'نلی اولسن',
      photo: '/assets/demo/img/avatars/21.jpg',
      position: 'مؤسس @Infinite',
    },
    logo: '/assets/brands/infinite.svg',
    content:
      'وولک قطعا مدیریت تبلیغات اینترنتی ما را بهتر کرده است. با ترکیب راحتی مدیریت کلمات کلیدی و پیشنهادات، همراه با توانایی.',
  },
  {
    id: 3,
    customer: {
      name: 'آدریان فلکس',
      photo: '/assets/demo/img/avatars/19.jpg',
      position: 'مؤسس @Grubspot',
    },
    logo: '/assets/brands/grubspot.svg',
    content:
      'آوردن وولک یک دارایی فوق العاده برای تجارت وب ما بوده است. سرعت فروش NatureWise به طور قابل توجهی افزایش یافته است و ما هیجان زده هستیم.',
  },
  {
    id: 4,
    customer: {
      name: 'بری ویلکز',
      photo: '/assets/demo/img/avatars/24.jpg',
      position: 'مدیر عامل @Phasekit',
    },
    logo: '/assets/brands/phasekit.svg',
    content:
      'در عرض سه ماه از شروع کار با وولک، ما بهترین ماه خود را از نظر سود و فروش داشتیم. ما قطعاً ابزارها را تغییر نمی‌دهیم زیرا این معامله واقعی است!',
  },
  {
    id: 5,
    customer: {
      name: 'اما اسپنسر',
      photo: '/assets/demo/img/avatars/17.jpg',
      position: 'همکار بازاریابی @Tribe',
    },
    logo: '/assets/brands/tribe.svg',
    content:
      'نه تنها معیارها و عملکرد ما بالاتر و فراتر از انتظارات است، بلکه من واقعاً تحت تأثیر روشی که آنها کسب و کار ما را مدیریت می‌کنند، شده ام.',
  },
  {
    id: 6,
    customer: {
      name: 'آلن اسمیت',
      photo: '/assets/demo/img/avatars/23.jpg',
      position: 'مدیریت @Proactive',
    },
    logo: '/assets/brands/proactive.svg',
    content:
      'هنگامی که الگوریتم را در عمل مشاهده کردید، متوجه خواهید شد که وولک و فناوری آنها واقعاً چقدر عالی هستند! من نمی‌توانم صبر کنم تا دوباره روی پروژه ام کار کنم!',
  },
  {
    id: 7,
    customer: {
      name: 'لانا هنریکس',
      photo: '/assets/demo/img/avatars/14.jpg',
      position: 'مؤسس @Live Talk',
    },
    logo: '/assets/brands/livetalk.svg',
    content:
      'وولک قطعا مدیریت تبلیغات اینترنتی ما را بهتر کرده است. با ترکیب راحتی مدیریت کلمات کلیدی و پیشنهادات، همراه با توانایی.',
  },
  {
    id: 8,
    customer: {
      name: 'هلن واتس',
      photo: '/assets/demo/img/avatars/12.jpg',
      position: 'مؤسس @Gutwork',
    },
    logo: '/assets/brands/gutwork.svg',
    content:
      'وولک با دیدگاه بسیار روشنی در مورد چگونگی هدایت رشد برند در وب، سیستم‌های هوش مصنوعی قدرتمند و تیم خدمات مدیریت شده قوی وارد بازار شد.',
  },
]

export const testimonialsMarquee = [
  {
    id: 0,
    customer: {
      name: 'مایک ویلیامز',
      photo: '/assets/demo/img/avatars/1.jpg',
      position: 'مؤسس @Covenant',
    },
    logo: '/assets/brands/covenant.svg',
    content:
      'نرم افزار وولک به طور قابل توجهی قوی است و تحلیلگران آنها به ما کمک کرده اند تا سودآوری خود را به حداکثر برسانیم و واقعاً ارزش افزایشی تبلیغات وب خود را درک کنیم.',
  },
  {
    id: 1,
    customer: {
      name: 'تارا رید',
      photo: '/assets/demo/img/avatars/2.jpg',
      position: 'مدیر مالی @Kromo',
    },
    logo: '/assets/brands/kromo.svg',
    content:
      'نه تنها معیارها و عملکرد ما بالاتر و فراتر از انتظارات است، بلکه من واقعاً تحت تأثیر روشی که آنها کسب و کار ما را مدیریت می‌کنند، شده ام.',
  },
  {
    id: 2,
    customer: {
      name: 'نلی اولسن',
      photo: '/assets/demo/img/avatars/21.jpg',
      position: 'مؤسس @Infinite',
    },
    logo: '/assets/brands/infinite.svg',
    content:
      'وولک قطعا مدیریت تبلیغات وب ما را بهتر کرده است. وولک با ترکیب راحتی مدیریت کلمات کلیدی و پیشنهادات، همراه با توانایی ردیابی نتایج مداوم، به ما کنترل بیشتری نسبت به قبل بر تبلیغات وب خود داده است.',
  },
  {
    id: 3,
    customer: {
      name: 'آدریان فلکس',
      photo: '/assets/demo/img/avatars/19.jpg',
      position: 'مؤسس @Grubspot',
    },
    logo: '/assets/brands/grubspot.svg',
    content:
      'آوردن وولک یک دارایی فوق العاده برای تجارت وب ما بوده است. سرعت فروش NatureWise به طور قابل توجهی افزایش یافته است، و ما هیجان زده هستیم که در این مسیر با وب DSP ادامه دهیم.',
  },
  {
    id: 4,
    customer: {
      name: 'بری ویلکز',
      photo: '/assets/demo/img/avatars/24.jpg',
      position: 'مدیر عامل @Phasekit',
    },
    logo: '/assets/brands/phasekit.svg',
    content:
      'در عرض سه ماه از شروع کار با وولک، ما بهترین ماه خود را از نظر سود و فروش داشتیم.',
  },
  {
    id: 5,
    customer: {
      name: 'اما اسپنسر',
      photo: '/assets/demo/img/avatars/17.jpg',
      position: 'همکار بازاریابی @Tribe',
    },
    logo: '/assets/brands/tribe.svg',
    content:
      'نه تنها معیارها و عملکرد ما بالاتر و فراتر از انتظارات است، بلکه من واقعاً تحت تأثیر روشی که آنها کسب و کار ما را مدیریت می‌کنند، شده ام.',
  },
  {
    id: 6,
    customer: {
      name: 'آلن اسمیت',
      photo: '/assets/demo/img/avatars/23.jpg',
      position: 'مدیریت @Proactive',
    },
    logo: '/assets/brands/proactive.svg',
    content:
      'هنگامی که الگوریتم را در عمل مشاهده کردید، متوجه خواهید شد که وولک و فناوری آنها واقعاً چقدر عالی هستند!',
  },
  {
    id: 7,
    customer: {
      name: 'لانا هنریکس',
      photo: '/assets/demo/img/avatars/14.jpg',
      position: 'مؤسس @Live Talk',
    },
    logo: '/assets/brands/livetalk.svg',
    content:
      'وولک قطعا مدیریت تبلیغات وب ما را بهتر کرده است. وولک با ترکیب راحتی مدیریت کلمات کلیدی و پیشنهادات، همراه با توانایی ردیابی نتایج مداوم، به ما کنترل بیشتری نسبت به قبل بر تبلیغات وب خود داده است.',
  },
  {
    id: 8,
    customer: {
      name: 'هلن واتس',
      photo: '/assets/demo/img/avatars/12.jpg',
      position: 'مؤسس @Gutwork',
    },
    logo: '/assets/brands/gutwork.svg',
    content:
      'وولک با دیدگاه بسیار روشنی در مورد چگونگی هدایت رشد برند در وب، سیستم‌های هوش مصنوعی قدرتمند و تیم خدمات مدیریت شده قوی وارد بازار شد.',
  },
  {
    id: 9,
    customer: {
      name: 'جان بیگزبی',
      photo: '/assets/demo/img/avatars/22.jpg',
      position: 'مؤسس @Bitbreaker',
    },
    logo: '/assets/brands/bitbreaker.svg',
    content:
      'در عرض سه ماه از شروع کار با وولک، ما بهترین ماه خود را از نظر سود و فروش داشتیم.',
  },
]

export const marketingIconFeatures = [
  {
    id: 0,
    icon: '/assets/icons/colored/chat.svg',
    title: 'به مشتریان بیشتری دست پیدا کنید',
    content:
      'جایی باشید که مشتریان شما هستند. با رفتار جستجو، خریداران را هدف قرار دهید، کلمات کلیدی تبدیل کننده جدیدی را کشف کنید، و به طور خودکار قیمت ها را بر اساس اهداف محصول خود تنظیم کنید.',
  },
  {
    id: 1,
    icon: '/assets/icons/colored/clock.svg',
    title: 'ساعت ها در هفته صرفه جویی کنید',
    content:
      'گردش کار تبلیغات خود را با ایجاد کمپین خودکار، اصلاح کلمات کلیدی و پیشنهاد الگوریتمی بهینه کنید. شما کنترل ها را تنظیم می کنید و فناوری هوش مصنوعی ما کارهای سنگین را انجام می‌دهد.',
  },
  {
    id: 2,
    icon: '/assets/icons/colored/certificate.svg',
    title: 'بینش سودآوری را دریافت کنید',
    content:
      'هزینه های PPC خود را به هزینه های هر محصول مرتبط کنید و نمای کلی از سودآوری در سطح محصول خود را مشاهده کنید. با اطمینان خاطر با معیارها و گزارش های ضروری تصمیمات هوشمندانه بگیرید.',
  },
]
