import { useEffect, useState } from 'react'
import Cards from './Cards'
import FormSection from '../../components/Sections/FormSection/FormSection'
import Banner from '../../components/Sections/Banner/Banner'
import Attention from '../../components/UI/Attention/Attention'

/**
 * @typedef {Object} props
 * @property {ReturnType<typeof import('../../api/Api').default>} api
 */

/**
 *
 * @param {props} props
 * @returns
 */
export default function Catalog ({ api, params: { id } }) {
  const [{ categoryName = '' }, setContent] = useState({})
  document.title = categoryName === '' ? 'Каталог' : `Каталог: ${categoryName}`
  useEffect(() => {
    (async () => {
      const categories = await api.categories()
      const scEntity = await categories.withId(id)
      setContent({
        categoryName: id && (await scEntity.name())
      })
    })()
  }, [api, id])
  const breadcrumbs = [
    { title: 'Главная', url: '/' },
    { title: 'Каталог', url: '/catalog' }
  ]
  id && breadcrumbs.push({ title: categoryName })
  return (
    <main>
      <Banner breadcrumbs={breadcrumbs}>
        Каталог <Attention>товаров</Attention>
      </Banner>
      <Cards api={api} category={id} style={{ paddingBottom: 70 }} />
      <FormSection api={api} style={{ borderBottom: '1px solid #ff5f31' }} />
    </main>
  )
}
