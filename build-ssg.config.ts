import type {
  Format,
  StaticParams,
  HTMLMinifierConfig,
} from './build-ssg.types'

export const format: Format = 'esm'

export const htmlMinifier: HTMLMinifierConfig = {
  minifier: 'minify-html',
  minifyHtmlOptions: {
    keep_comments: true,
    minify_js: true,
  },
}

export function generateStaticParams(): StaticParams {
  return {
    '/subpages/jobs/[slug]': async () => {
      const jobs = await import('./src/data/pages/jobs').then(
        (module) => module.jobs,
      )
      return jobs.map((job) => ({ slug: job.slug }))
    },
    '/subpages/nfts/[slug]': async () => {
      const nfts = await import('./src/data/pages/nft/all').then(
        (module) => module.allNfts,
      )
      return nfts.map((nft) => ({ slug: nft.slug }))
    },
    '/subpages/help/category/[slug]': async () => {
      const categories = await import('./src/data/pages/help').then(
        (module) => module.helpCenterCategories,
      )
      return categories.map((category) => ({ slug: category.slug }))
    },
    '/subpages/help/category/article/[slug]': async () => {
      const categories = await import('./src/data/pages/help').then(
        (module) => module.helpCenterCategories,
      )
      const articles = categories.map((category) => category.articles).flat()

      return articles.map((article) => ({ slug: article.slug }))
    },
  }
}
