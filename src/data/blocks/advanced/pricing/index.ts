import type { PricingPlan } from '/@src/components/advanced/pricing/pricing-long/PricingLong.vue'

export const plans = [
  {
    id: 0,
    icon: '/assets/icons/pricing/pricing-1.svg',
    title: 'رشد',
    subtitle: 'کمتر از ۳۰۰ میلیون تومان هزینه تبلیغات ماهانه',
    price: {
      monthly: 7500000,
      yearly: 52500000,
    },
    benefits: [
      {
        id: 0,
        content: 'دسترسی به جامعه اسلک',
      },
      {
        id: 1,
        content: 'دسترسی به تیم پشتیبانی',
      },
      {
        id: 2,
        content: 'مناقصه الگوریتمی',
      },
      {
        id: 3,
        content: 'کلیدواژه و برداشت شماره شناسایی استاندارد آمازون',
      },
    ],
    features: [
      {
        id: 0,
        content: 'جستجوی عبارت جداسازی',
      },
      {
        id: 1,
        content: 'آنالیز محصول',
      },
      {
        id: 2,
        content: 'بهترین رتبه فروشنده',
      },
      {
        id: 3,
        content: 'بهینه سازی مکان',
      },
    ],
  },
  {
    id: 1,
    icon: '/assets/icons/pricing/pricing-2.svg',
    title: 'کسب و کار',
    subtitle: 'بیش از ۳۰۰ میلیون تومان هزینه تبلیغات ماهانه',
    price: {
      monthly: 15000000,
      yearly: 105000000,
    },
    benefits: [
      {
        id: 0,
        content: 'همه ویژگی های موجود در رشد',
      },
      {
        id: 1,
        content: 'برنامه ۳ تماس هفتگی',
      },
      {
        id: 2,
        content: 'برنامه ۶ تماس هفتگی',
      },
      {
        id: 3,
        content: 'ارزیابی حساب سه ماهه',
      },
    ],
    features: [
      {
        id: 0,
        content: 'ادغام تبلیغات گوگل',
      },
      {
        id: 1,
        content: 'قوانین و استراتژی های خودکار',
      },
      {
        id: 2,
        content: 'آنالیز برند',
      },
      {
        id: 3,
        content: 'هوش رقیب',
      },
    ],
  },
  {
    id: 2,
    icon: '/assets/icons/pricing/pricing-3.svg',
    title: 'شرکت',
    subtitle: 'بیش از ۹ میلیارد هزینه تبلیغات ماهانه',
    price: {
      monthly: 37500000,
      yearly: 450000000,
    },
    benefits: [
      {
        id: 0,
        content: 'همه ویژگی های موجود در کسب و کار',
      },
      {
        id: 1,
        content: 'مدیر شریک استراتژیک',
      },
      {
        id: 2,
        content: 'بررسی فصلی کسب و کار',
      },
      {
        id: 3,
        content: 'برنامه ریزی حساب سالانه',
      },
    ],
    features: [
      {
        id: 0,
        content: 'نمونه پردازشگر سیگنال دیجیتال آمازون',
      },
      {
        id: 1,
        content: 'ابر بازاریابی آمازون',
      },
      {
        id: 2,
        content: 'ادغام رخنه اطلاعات',
      },
      {
        id: 3,
        content: 'داشبورد سفارشی',
      },
    ],
  },
]

export const comparePlans = [
  {
    logo: '/assets/brands/tribe.svg',
    featured: true,
    popular: false,
    features: [
      {
        value: 'رایگان یا ۱۲ تومان',
        label: 'تریدها',
      },
      {
        value: 'رایگان',
        label: 'اکانت پایه',
      },
      {
        value: 'رایگان',
        label: 'پرداخت ماهانه',
      },
    ],
  },
  {
    logo: '/assets/brands/vonmo.svg',
    featured: false,
    popular: true,
    features: [
      {
        value: '۲۴ تومان',
        label: 'تریدها',
      },
      {
        value: 'رایگان',
        label: 'اکانت پایه',
      },
      {
        value: 'رایگان',
        label: 'پرداخت ماهانه',
      },
    ],
  },
  {
    logo: '/assets/brands/infinite.svg',
    featured: false,
    popular: false,
    features: [
      {
        value: '16 تومان',
        label: 'تریدها',
      },
      {
        value: '15 تومان در ماه',
        label: 'اکانت پایه',
      },
      {
        value: 'رایگان',
        label: 'پرداخت ماهانه',
      },
    ],
  },
  {
    logo: '/assets/brands/kromo.svg',
    featured: false,
    popular: false,
    features: [
      {
        value: '8 تومان',
        label: 'تریدها',
      },
      {
        value: '25 تومان در ماه',
        label: 'اکانت پایه',
      },
      {
        value: '4.95 تومان',
        label: 'پرداخت ماهانه',
      },
    ],
  },
]

export const longPlans: PricingPlan[] = [
  {
    name: 'پایه',
    logo: '/assets/brands/tribe.svg',
    price: 15,
    color: 'primary',
    featured: true,
    popular: false,
    features: [
      {
        value: 'رایگان یا ۱۲ تومان',
        label: 'تریدها',
      },
      {
        value: 'رایگان',
        label: 'اکانت پایه',
      },
      {
        value: 'رایگان',
        label: 'پرداخت ماهانه',
      },
      {
        value: '3 تومان در ماه',
        label: 'استوک‌ها و اشتراکات',
      },
      {
        value: '5 تومان در ماه',
        label: 'داده‌های لایو',
      },
      {
        value: 'نرخ لحظه ای + 0.65%',
        label: 'نرخ مالیات',
      },
      {
        value: '0.75 تومان',
        label: 'انتقال بانکی',
      },
      {
        value: '5 تومان',
        label: 'انتقال بانکی (سریع)',
      },
    ],
  },
  {
    name: 'کسب و کار',
    logo: '/assets/brands/tribe.svg',
    price: 25,
    color: 'secondary',
    featured: false,
    popular: true,
    features: [
      {
        value: 'رایگان',
        label: 'تریدها',
      },
      {
        value: 'رایگان',
        label: 'اکانت پایه',
      },
      {
        value: 'رایگان',
        label: 'پرداخت ماهانه',
      },
      {
        value: '10 تومان در ماه',
        label: 'استوک‌ها و اشتراکات',
      },
      {
        value: '2 تومان در ماه',
        label: 'داده‌های لایو',
      },
      {
        value: 'نرخ لحظه ای + 0.55%',
        label: 'نرخ مالیات',
      },
      {
        value: '0.5 تومان',
        label: 'انتقال بانکی',
      },
      {
        value: '3 تومان',
        label: 'انتقال بانکی (سریع)',
      },
    ],
  },
  {
    name: 'شرکتی',
    logo: '/assets/brands/tribe.svg',
    price: 45,
    color: 'yellow',
    featured: false,
    popular: false,
    features: [
      {
        value: 'رایگان',
        label: 'تریدها',
      },
      {
        value: 'رایگان',
        label: 'اکانت پایه',
      },
      {
        value: 'رایگان',
        label: 'پرداخت ماهانه',
      },
      {
        value: '15 تومان در ماه',
        label: 'استوک‌ها و اشتراکات',
      },
      {
        value: 'رایگان',
        label: 'داده‌های لایو',
      },
      {
        value: 'نرخ لحظه ای + 0.25%',
        label: 'نرخ مالیات',
      },
      {
        value: 'رایگان',
        label: 'انتقال بانکی',
      },
      {
        value: '2 تومان',
        label: 'انتقال بانکی (سریع)',
      },
    ],
  },
  {
    name: 'شخصی',
    logo: '/assets/brands/tribe.svg',
    price: 24,
    color: 'info',
    featured: false,
    popular: false,
    features: [
      {
        value: '8 تومان',
        label: 'تریدها',
      },
      {
        value: '25 تومان در ماه',
        label: 'اکانت پایه',
      },
      {
        value: '4.95 تومان',
        label: 'پرداخت ماهانه',
      },
      {
        value: 'رایگان یا ۱۲ تومان',
        label: 'تریدها',
      },
      {
        value: 'رایگان',
        label: 'اکانت پایه',
      },
      {
        value: 'رایگان',
        label: 'پرداخت ماهانه',
      },
      {
        value: 'رایگان',
        label: 'اکانت پایه',
      },
      {
        value: 'رایگان',
        label: 'پرداخت ماهانه',
      },
    ],
  },
]

export const pricingSplit = {
  regularPlans: [
    {
      name: 'کامیونیتی',
      logo: '/assets/icons/pricing/pricing-icon-1.svg',
      price: 'رایگان',
      priceLabel: 'برای همیشه',
      features: [
        'ظرفیت اضافی موجود نیست',
        'رایگان برای پروژه‌های شخصی/غیر تجاری',
      ],
    },
    {
      name: 'پایه',
      logo: '/assets/icons/pricing/pricing-icon-2.svg',
      price: '29 تومان در ماه',
      priceLabel: 'شروع از',
      features: [
        'ظرفیت اضافی از ماهانه 10 تومان شروع می‌شود',
        'طرح سطح پایه برای اجرای تست‌ها و پروژه‌ها',
      ],
    },
    {
      name: 'پرو',
      logo: '/assets/icons/pricing/pricing-icon-3.svg',
      price: '299 تومان در ماه',
      priceLabel: 'شروع از',
      features: [
        'ظرفیت اضافی از ماهانه 5 تومان شروع می‌شود',
        'شامل پشتیبانی آنلاین و ادغام‌های برنامه',
      ],
    },
  ],
  premiumPlan: {
    name: 'شرکتی',
    logo: '/assets/icons/pricing/pricing-icon-4.svg',
    features: [
      {
        title: 'شخصی سازی',
        text: 'لورم ایپسوم دلار سیت آمیت، کنسکتاتور آدیپیسینگ الیت. ایام استابیلم اپللاس. کنفرم تکم، کوام کوئیکوئه ورسو رم سوبیسیاس.',
      },
      {
        title: 'آنالیز و تحلیل',
        text: 'لورم ایپسوم دلار سیت آمیت، کنسکتاتور آدیپیسینگ الیت. ایام استابیلم اپللاس. کنفرم تکم، کوام کوئیکوئه ورسو رم سوبیسیاس.',
      },
      {
        title: 'امنیت',
        text: 'لورم ایپسوم دلار سیت آمیت، کنسکتاتور آدیپیسینگ الیت. ایام استابیلم اپللاس. کنفرم تکم، کوام کوئیکوئه ورسو رم سوبیسیاس.',
      },
      {
        title: 'خدمات سطح بالا',
        text: 'لورم ایپسوم دلار سیت آمیت، کنسکتاتور آدیپیسینگ الیت. ایام استابیلم اپللاس. کنفرم تکم، کوام کوئیکوئه ورسو رم سوبیسیاس.',
      },
    ],
  },
}

export const comparisonTable = {
  labels: [
    {
      cellType: 'head',
      cellLabel: '',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'شامل مصرف ماهانه',
      helpText: true,
      helpLabel: 'مختصر متنی برای توضیح ویژگی',
    },
    {
      cellType: 'label',
      cellLabel: 'مصرف بیش از قرار',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'حفظ داده‌های تحلیلی',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'row',
      cellLabel: 'ویژگی‌ها',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'API جستجو',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'مشابهات',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'محیط امن',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'آنالیزهای استاندارد',
      helpText: true,
      helpLabel: 'مختصر متنی برای توضیح ویژگی',
    },
    {
      cellType: 'label',
      cellLabel: 'پیشنهادات جستجو',
      helpText: true,
      helpLabel: 'مختصر متنی برای توضیح ویژگی',
    },
    {
      cellType: 'label',
      cellLabel: 'آنالیزهای حرفه‌ای',
      helpText: true,
      helpLabel: 'مختصر متنی برای توضیح ویژگی',
    },
    {
      cellType: 'label',
      cellLabel: 'API حرفه‌ای',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'شخصی سازی',
      helpText: true,
      helpLabel: 'مختصر متنی برای توضیح ویژگی',
    },
    {
      cellType: 'label',
      cellLabel: 'تست A/B',
      helpText: true,
      helpLabel: 'مختصر متنی برای توضیح ویژگی',
    },
    {
      cellType: 'label',
      cellLabel: 'قوانین پرس و جو',
      helpText: true,
      helpLabel: 'مختصر متنی برای توضیح ویژگی',
    },
    {
      cellType: 'label',
      cellLabel: 'سرویس منحصر به کاربر',
      helpText: true,
      helpLabel: 'مختصر متنی برای توضیح ویژگی',
    },
    {
      cellType: 'label',
      cellLabel: 'ورود یکپارچه (SSO)',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'توافقنامه سطح خدمات (SLA)',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'اعضای اضافی تیم',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'مجوز سطح اعضای تیم',
      helpText: true,
      helpLabel: 'مختصر متنی برای توضیح ویژگی',
    },
    {
      cellType: 'row',
      cellLabel: 'پشتیبانی',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'مستندات و انجمن‌ها',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'پشتیبانی ایمیل',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'ادغام در برنامه‌ها',
      helpText: false,
      helpLabel: '',
    },
    {
      cellType: 'label',
      cellLabel: 'راهنمای کدنویسی',
      helpText: true,
      helpLabel: 'مختصر متنی برای توضیح ویژگی',
    },
    {
      cellType: 'label',
      cellLabel: 'چت در لحظه',
      helpText: true,
      helpLabel: 'مختصر متنی برای توضیح ویژگی',
    },
    {
      cellType: 'label',
      cellLabel: 'اعلانات گوشی',
      helpText: true,
      helpLabel: 'مختصر متنی برای توضیح ویژگی',
    },
    {
      cellType: 'label',
      cellLabel: 'تماس اختصاصی',
      helpText: true,
      helpLabel: 'مختصر متنی برای توضیح ویژگی',
    },
    {
      cellType: 'label',
      cellLabel: 'پشتیبانی اختصاصی',
      helpText: true,
      helpLabel: 'مختصر متنی برای توضیح ویژگی',
    },
  ],
  plans: [
    {
      name: 'کامیونیتی',
      logo: '/assets/icons/pricing/pricing-icon-1.svg',
      price: 'رایگان برای استفاده شخصی',
      cells: [
        {
          cellType: 'label',
          cellLabel: ['۵۰ هزار عملیات', '۱۰ هزار رکورد'],
          cellCheck: false,
        },
        {
          cellType: 'label',
          cellLabel: ['در دسترس نیست'],
          cellCheck: false,
        },
        {
          cellType: 'label',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'row',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'label',
          cellLabel: ['0'],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'row',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
      ],
    },
    {
      name: 'پایه',
      logo: '/assets/icons/pricing/pricing-icon-2.svg',
      price: 'شروع از 29 تومان در ماه',
      cells: [
        {
          cellType: 'label',
          cellLabel: ['۲۵۰ هزار عملیات', '۵۰ هزار رکورد'],
          cellCheck: false,
        },
        {
          cellType: 'label',
          cellLabel: ['10 تومان در ماه'],
          cellCheck: false,
        },
        {
          cellType: 'label',
          cellLabel: ['7 روز'],
          cellCheck: false,
        },
        {
          cellType: 'row',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'label',
          cellLabel: ['3'],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'row',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
      ],
    },
    {
      name: 'پرو',
      logo: '/assets/icons/pricing/pricing-icon-3.svg',
      price: 'شروع از 299 تومان در ماه',
      cells: [
        {
          cellType: 'label',
          cellLabel: ['5 میلیون عملیات', '1 میلیون رکورد'],
          cellCheck: false,
        },
        {
          cellType: 'label',
          cellLabel: ['5 تومان در ماه'],
          cellCheck: false,
        },
        {
          cellType: 'label',
          cellLabel: ['30 روز'],
          cellCheck: false,
        },
        {
          cellType: 'row',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'label',
          cellLabel: ['3'],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'row',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: false,
        },
      ],
    },
    {
      name: 'شرکتی',
      logo: '/assets/icons/pricing/pricing-icon-4.svg',
      price: 'تماس با ما',
      cells: [
        {
          cellType: 'label',
          cellLabel: ['', 'تماس با ما', ''],
          cellCheck: false,
        },
        {
          cellType: 'label',
          cellLabel: ['تماس با ما'],
          cellCheck: false,
        },
        {
          cellType: 'label',
          cellLabel: ['بیش از 365 روز'],
          cellCheck: false,
        },
        {
          cellType: 'row',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'label',
          cellLabel: ['بی‌نهایت'],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'row',
          cellLabel: [''],
          cellCheck: false,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
        {
          cellType: 'check',
          cellLabel: [''],
          cellCheck: true,
        },
      ],
    },
  ],
}

export const pricingBlockPlans = [
  {
    name: 'کاوش',
    text: '30 روز ویژگی‌های برتر ما را کاملاً رایگان کشف کنید',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: ['1 کاربر', '1 داشبورد', 'ماژول پروژه', '--', '--', '--'],
  },
  {
    name: 'مدیریت',
    text: '30 روز ویژگی‌های برتر ما را کاملاً رایگان کشف کنید',
    monthlyPrice: 32,
    yearlyPrice: 350,
    features: [
      '5 کاربر',
      '2 داشبورد',
      'ماژول پروژه',
      'ماژول حسابداری',
      'ماژول CRM',
      '--',
    ],
  },
  {
    name: 'اجرایی',
    text: '30 روز ویژگی‌های برتر ما را کاملاً رایگان کشف کنید',
    monthlyPrice: 55,
    yearlyPrice: 490,
    features: [
      '15 کاربر',
      '3 داشبورد',
      'ماژول پروژه',
      'ماژول حسابداری',
      'ماژول CRM',
      'ماژول پشتیبانی',
    ],
  },
  {
    name: 'شرکتی',
    text: '30 روز ویژگی‌های برتر ما را کاملاً رایگان کشف کنید',
    monthlyPrice: 90,
    yearlyPrice: 790,
    features: [
      '30 کاربر',
      'بی‌نهایت داشبورد',
      'دسترسی به همه ماژول‌ها',
      'ادغام ها',
      'پشتیبانی اختصاصی',
      'امکانات بتا',
    ],
  },
]

export const pricingTabbedPlans = {
  allPlans: [
    {
      icon: '/assets/icons/pricing/custom-pricing-icon-5.svg',
      name: 'شخصی',
    },
    {
      icon: '/assets/icons/pricing/custom-pricing-icon-6.svg',
      name: 'تیمی',
    },
    {
      icon: '/assets/icons/pricing/custom-pricing-icon-2.svg',
      name: 'شرکتی',
    },
    {
      icon: '/assets/icons/pricing/custom-pricing-icon-1.svg',
      name: 'دلخواه',
    },
  ],
  personalPlans: [
    {
      icon: '/assets/icons/pricing/custom-pricing-icon-5.svg',
      name: 'شخصی',
      price: 0,
      priceBilling: 'برای همیشه',
      planText: 'با اجرای کمپین‌های بازاریابی کوچک، کسب‌وکارتان را رونق دهید',
      buttonLabel: 'همین حالا شروع کنید',
      features: [
        'ماهانه یک کمپین ارسال کنید',
        'یک لیست مشترکین را حفظ کنید',
        'حداکثر ۲۰ لید جدید در ماه',
      ],
    },
    {
      icon: '/assets/icons/pricing/custom-pricing-icon-3.svg',
      name: 'فریلنسر',
      price: 5,
      priceBilling: 'در ماه',
      planText: 'قدرت بيشتري کسب کنيد و بازاریابی و جذب ليد خود را افزايش دهيد',
      buttonLabel: 'انتخاب فریلنسر',
      features: [
        'ارسال ۳ کمپین در ماه',
        'مدیریت ۳ لیست مشترکین',
        'اجازه ۱۰۰ لید جدید در ماه',
      ],
    },
    {
      icon: '/assets/icons/pricing/custom-pricing-icon-4.svg',
      name: 'فریلنسر+',
      price: 15,
      priceBilling: 'در ماه',
      planText: 'بهترین انتخاب برای تقویت بازاریابی داخلی و جذب لید شما',
      buttonLabel: 'الان ارتقا دهید',
      features: [
        'ارسال بی‌نهایت کمپین',
        'مدیریت بی‌نهایت لیست مشترک',
        'لید جدید بی‌نهایت',
      ],
    },
  ],
  premiumPlans: [
    {
      icon: '/assets/icons/pricing/custom-pricing-icon-6.svg',
      name: 'کسب و کار',
      price: 45,
      priceBilling:
        'قیمت ماهانه و به ازای هر عضو تیم. شامل یک مالک تیم و ۲ عضو تیم.',
      planText:
        'برای شرکت‌های تثبیت‌شده با نیازهای خاص و تیم‌های داخلی. قیمت خود را تخمین بزنید.',
      buttonLabel: 'درخواست دمو',
      features: [
        'شامل همه ویژگی‌های شخصی',
        'مدیریت پروژه و تیم',
        'چت داخلی بیت تیمی',
      ],
      highlight: {
        title: 'به راحتی همکاری کنید',
        subtitle: 'مدیریت و اشتراک گذاری اسناد با تیم و کار خود',
        image: '/assets/illustrations/pricing/pricing-highlight-1.svg',
        darkImage: '/assets/illustrations/pricing/pricing-highlight-1-dark.svg',
      },
    },
    {
      icon: '/assets/icons/pricing/custom-pricing-icon-2.svg',
      name: 'شرکتی',
      price: 75,
      priceBilling:
        'قیمت به ازای هر ماه و هر عضو تیم. شامل یک مالک تیم و ۶ عضو تیم.',
      planText:
        'برای شرکت‌های بزرگ‌تر و پیچیده‌تر با تیم‌ها و بخش‌های متعدد. قیمت خود را تخمین بزنید.',
      buttonLabel: 'درخواست دمو',
      features: [
        'شامل همه‌ی ویژگی‌های کسب و کار',
        'مدیریت سازمان‌های چندمستاجره',
        'گزارش‌های شخصی و حرفه‌ای',
      ],
      highlight: {
        title: 'پرتال شخصی',
        subtitle: 'اشتراک‌گذاری پیشرفت تیم خود در یک پورتال مشتری اختصاصی',
        image: '/assets/illustrations/pricing/pricing-highlight-2.svg',
        darkImage: '/assets/illustrations/pricing/pricing-highlight-2-dark.svg',
      },
    },
    {
      icon: '/assets/icons/pricing/custom-pricing-icon-1.svg',
      name: 'شخصی',
      price: 99,
      priceBilling:
        'برای بحث در مورد برنامه‌ریزی نیازهای کسب‌وکار و دامنه پروژه خود با ما تماس بگیرید.',
      planText:
        'تمام امکانات طرح سازمانی را دریافت کنید و درخواست پیاده‌سازی‌ها و توسعه‌های شخصی‌سازی شده نمایید.',
      buttonLabel: 'درخواست دمو',
      features: [
        'شامل همه‌ی ویژگی‌های شرکتی',
        'ویژگی‌ها و پیاده‌سازی‌های سفارشی',
        'ادغام‌های نرم‌افزاری شخصی‌سازی شده',
      ],
      highlight: {
        title: 'آموزش درخواستی',
        subtitle:
          'کارشناسان راهکارهای ما برای یک جلسه آموزشی به دفتر شما خواهند آمد',
        image: '/assets/illustrations/pricing/pricing-highlight-3.svg',
        darkImage: '/assets/illustrations/pricing/pricing-highlight-3-dark.svg',
      },
    },
  ],
}

export const pricingCompactPlans = [
  {
    name: 'پایه',
    description: 'برای افرادی که فقط نیاز به شروع با ویژگی‌های پایه دارند',
    monthlyPrice: 0,
    yearlyPrice: 0,
    actionLabel: 'رایگان شروع کنید',
    popular: false,
  },
  {
    name: 'تیم',
    description: 'برای تیم‌هایی که فقط نیاز به شروع با ویژگی‌های پایه دارند',
    monthlyPrice: 5,
    yearlyPrice: 49,
    actionLabel: 'شروع دسترسی آزمایشی',
    popular: true,
  },
  {
    name: 'پرو',
    description:
      'برای کسب‌وکارهای متوسطی که به ویژگی‌های پیشرفته برای فعالیت خود نیاز دارند',
    monthlyPrice: 15,
    yearlyPrice: 149,
    actionLabel: 'شروع دسترسی آزمایشی',
    popular: false,
  },
  {
    name: 'شرکتی',
    description:
      'برای کسب‌وکارهای بزرگ که به ویژگی‌های پیشرفته برای فعالیت خود نیاز دارند',
    monthlyPrice: 99,
    yearlyPrice: 899,
    actionLabel: 'تماس با ما',
    popular: false,
  },
]

export const pricingCompareBasic = [
  {
    label: 'تفکیک کاری/شخصی',
    one: true,
    two: true,
    three: true,
    four: true,
  },
  {
    label: 'تخمین پرداخت مالیات',
    one: true,
    two: true,
    three: true,
    four: true,
  },
  {
    label: 'ردیابی مسافت قابل کسر',
    one: true,
    two: true,
    three: true,
    four: true,
  },
  {
    label: 'دانلود بانکداری آنلاین',
    one: true,
    two: true,
    three: true,
    four: true,
  },
  {
    label: 'چند دستگاهی',
    one: true,
    two: true,
    three: true,
    four: true,
  },
  {
    label: 'ایجاد صورتحساب و برآورد',
    one: false,
    two: true,
    three: true,
    four: true,
  },
  {
    label: 'مدیریت مالیات بر ارزش افزوده',
    one: false,
    two: true,
    three: true,
    four: true,
  },
  {
    label: 'پرداخت حقوق',
    one: false,
    two: false,
    three: true,
    four: true,
  },
  {
    label: 'مدیریت صورت‌حساب‌ها و پرداخت‌ها',
    one: false,
    two: false,
    three: true,
    four: true,
  },
  {
    label: 'چند ارزه',
    one: false,
    two: false,
    three: false,
    four: true,
  },
  {
    label: 'بودجه بندی',
    one: false,
    two: false,
    three: false,
    four: true,
  },
  {
    label: 'ردیابی زمان',
    one: false,
    two: false,
    three: false,
    four: true,
  },
]

export const pricingDuoPlans = [
  {
    name: 'تیم',
    icon: 'ph:parachute-duotone',
    price: {
      monthly: 24,
      yearly: 7500000,
    },
    features: [
      'اتصال گیت',
      'ادغام ها',
      'ورود یکپارچه',
      '500GB آپلود در سال',
      'چت زنده',
    ],
    featured: false,
  },
  {
    name: 'شرکتی',
    icon: 'ph:rocket-duotone',
    price: {
      monthly: 49,
      yearly: 499,
    },
    features: [
      'همه‌ی ویژگی‌های تیم',
      'پردازش فایل',
      'آپلود جمعی',
      'پشتیبانی ۲۴ ساعته',
      'API جستجو',
    ],
    featured: false,
  },
]
