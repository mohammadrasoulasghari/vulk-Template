import type { VulkConfig } from '/@src/types'

/**
 * Set your default Navbar by importing a vue component
 * Note: If you rename the import, make sure to update the type definition bellow
 *
 * @example import Navbar from '/@src/components/blocks/navbar-blocks/NavbarA.vue'
 */
import Navbar from '/@src/components/navigation/navbar/Navbar.vue'

// Additonal megamenu components required by the Navbar
import CompanyMegamenu from '/@src/components/navigation/navbar/megamenu/CompanyMegamenu.vue'
import ProductMegamenu from '/@src/components/navigation/navbar/megamenu/ProductMegamenu.vue'
import ResourcesMegamenu from '/@src/components/navigation/navbar/megamenu/ResourcesMegamenu.vue'

/**
 * Set your default Footer by importing a vue component
 * Note: If you rename the import, make sure to update the type definition bellow
 *
 * @example import Footer from '/@src/components/blocks/footer-blocks/FooterA.vue'
 */
import Footer from '/@src/components/layout/footer/Footer.vue'

// Auto detect the type of the imported components
type NavbarType = typeof Navbar
type FooterType = typeof Footer
type AppConfig = VulkConfig<NavbarType, FooterType>

/**
 * This is the main configuration file for the app
 */
export default {
  name: 'Vulk',
  title: 'وولک :: Vulk - قالب لندینگ ویو ۳',
  description:
    'Vulk وولک یک قالب پیشرفته است که به شما امکان می‌دهد وب‌سایت‌های قدرتمند و آماده برای رندر سمت سرور (SSR) را بسازید.',
  url: import.meta.env.VITE_APP_URL || 'http://localhost:3000/',
  image:
    'https://media.cssninja.io/embed/marketplace/product/wide.png?headline=Multipurpose%20Vue%203%20SSR%20SaaS%20Landing%20Pages%20UI%20Kit&url=https%3A%2F%2Fcdn.schema.io%2Fcssninja%2F626717a31bfb2b0019dc414b%2Fcaeea9b43d968b49533ed6f37ed7ad4e&previewUrl=https%3A%2F%2Fcdn.schema.io%2Fcssninja%2F625e9270282b940012bfae2e%2F12a2a61e3baa2df0b5c3cc408065959d',
  theme: {
    // Auto detect system color scheme
    default: 'system',
    // Display the theme switcher
    toggle: true,
    // Disable transitions to avoid transition flickering when switching theme
    disableTransitions: true,
  },
  logo: {
    src: '/assets/logo/logo.svg',
    // srcDark: '/assets/logo/logo-dark.svg',
    width: 45,
    height: 45,
  },
  layout: {
    transition: 'fade-fast',
    backToTop: {
      // Display the back to top button
      enabled: true,
    },
    navbar: {
      enabled: true,
      component: Navbar,
      props: {
        // define default props for Navbar here, you can override them using page meta
        cta: {
          to: 'https://rtl-theme.com',
          target: '_blank',
          label: 'دریافت وولک',
        },
        items: [
          {
            label: 'محصول',
            megamenu: ProductMegamenu,
          },
          {
            label: 'قیمت‌گذاری',
            to: '/pricing',
          },
          {
            label: 'شرکت',
            megamenu: CompanyMegamenu,
          },
          {
            label: 'منابع',
            megamenu: ResourcesMegamenu,
          },
        ],
      },
    },
    footer: {
      enabled: true,
      component: Footer,
      props: {
        // define default props for Footer here, you can override them using page meta
        color: 'dark',
        content: {
          cta: {
            title: 'حداکثر رسانی پتانسیل‌های بازار',
            subtitle: '30 روز استفاده آزمایشی رایگان',
            benefits: [
              {
                label: 'تکنولوژی ',
              },
              {
                label: 'صرفه‌جویی در زمان',
              },
            ],
            links: [
              {
                label: 'دسترسی آزمایشی',
                to: '/',
              },
              {
                label: 'درخواست مشاوره',
                to: '/',
              },
            ],
          },
          newsletter: {
            action: '#',
            method: 'POST',
          },
          columns: [
            {
              title: 'محصول',
              links: [
                {
                  label: 'ویژگی‌های اصلی',
                  to: '/',
                },
                {
                  label: 'افزونه‌ها',
                  to: '/',
                },
                {
                  label: 'بازاریابی',
                  to: '/',
                },
                {
                  label: 'مدیریت فروش',
                  to: '/',
                },
                {
                  label: 'نرم‌افزار',
                  to: '/',
                },
              ],
            },
            {
              title: 'شرکت',
              links: [
                {
                  label: 'ثبت نام',
                  to: '/',
                },
                {
                  label: '۳۰ روز استفاده آزمایشی',
                  to: '/',
                },
                {
                  label: 'درباره ما',
                  to: '/',
                },
                {
                  label: 'فرصت‌های همکاری',
                  to: '/',
                },
                {
                  label: 'اخبار و تازه‌ها',
                  to: '/',
                },
              ],
            },
            {
              title: 'API',
              links: [
                {
                  label: 'شروع به کار',
                  to: '/',
                },
                {
                  label: 'مستندات API',
                  to: '/',
                },
                {
                  label: 'راهنمای توسعه‌دهندگان',
                  to: '/',
                },
                {
                  label: 'گیتهاب',
                  to: '/',
                },
              ],
            },
            {
              title: 'همراهی با شما',
              links: [
                {
                  label: 'راهنماها و مستندات',
                  to: '/',
                },
                {
                  label: 'درخواست‌های پشتیبانی',
                  to: '/',
                },
                {
                  label: 'پرسش‌های متداول',
                  to: '/',
                },
                {
                  label: 'دریافت مجوز',
                  to: '/',
                },
              ],
            },
          ],
          socials: [
            {
              icon: 'fa-brands:facebook-f',
              link: '/',
              name: 'فیسبوک',
            },
            {
              icon: 'fa-brands:twitter',
              link: '/',
              name: 'ایکس',
            },
            {
              icon: 'fa-brands:linkedin-in',
              link: '/',
              name: 'لیندکیدن',
            },
            {
              icon: 'fa-brands:youtube',
              link: '/',
              name: 'یوتیوب',
            },
            {
              icon: 'fa-brands:github',
              link: '/',
              name: 'گیتهاب',
            },
          ],
          links: [
            {
              label: 'تماس با ما',
              to: '/',
            },
            {
              label: 'حریم شخصی',
              to: '/',
            },
            {
              label: 'ضوابط و شرایط',
              to: '/',
            },
          ],
          copyright: '© ۱۴۰۳-۱۴۰۴ ال تم. تمامی حقوق محفوظ است.',
        },
      },
    },
  },
} as AppConfig
