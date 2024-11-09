import { useEffect, useState } from 'react'
import CategoryCard from './catalog/Card'
import ProductCard from './category/Card'
import Cards from './catalog/Cards'
import Banner from '../components/Sections/Banner/Banner'
import FormSection from '../components/Sections/FormSection/FormSection'
import Attention from '../components/UI/Attention/Attention'
import Button from '../components/UI/Button/Button'
import SectionTitle from '../components/UI/SectionTitle/SectionTitle'
import { useCity } from '../api/City'
import { Link } from 'wouter'

const logIt = x => {
  return x
}

/**
 * @typedef {Object} props
 * @property {ReturnType<typeof import('../api/Api').default>} api
 */

/**
 *
 * @param {props} props
 * @returns
 */
export default function AboutManufacturer ({ params: { id }, api }) {
  const [{ name, description, categories = [], products }, setBrand] = useState({})
  document.title = `Производитель ${name}`
  const city = useCity()
  useEffect(() => {
    (async () => {
      const manufacturerEntity = await (await api.manufacturers()).withId(id)
      setBrand({
        name: await manufacturerEntity.name(),
        description: await manufacturerEntity.description(),
        categories: await Promise.all(
          (await manufacturerEntity.categories()).map(async (x) => ({
            id: await x.id(),
            name: await x.name(),
            icon: await x.icon()
          }))
        ),
        products:
          await manufacturerEntity.brand()
            ? await Promise.all(
              (await manufacturerEntity.products())
                .map(logIt)
                .map(async x => ({
                  id: await x.id(),
                  name: await x.name(),
                  icon: await x.icon(),
                  brandIcon: await (await x.brand()).icon()
                }))
            )
            : undefined
      })
    })()
  }, [id, api])
  const cards = products
    ? products.map(x => (
      <ProductCard
        key={x.name}
        title={x.name}
        image={x.icon}
        brandImage={x.brandIcon}
        page={`/product/${x.id}`}
      />
    ))
    : categories.map((x) => (
      <CategoryCard
        key={x.name}
        title={x.name}
        backgroundImage={x.icon}
        page={`/catalog/${x.id}`}
      />
    ))

  return (
    <main>
      <Banner
        breadcrumbs={[
          { title: 'Главная', url: '/' },
          { title: 'Производители', url: '/manufactures' },
          { title: name }
        ]}
      >
        Купить в <Attention>{city.Предложный}</Attention> <br />
        продукцию <Attention>{name}</Attention>
      </Banner>
      <div className='brendabout_main_flex cntr'>
        <div className='brendabout_title'>
          <SectionTitle style={{ textAlign: 'center', fontWeight: 300 }}>
            <span style={{ fontWeight: 700, color: '#858585' }}>KOSOX</span> предоставляет товары бренда <span style={{ fontWeight: 700, color: '#858585' }}>{name}</span>
          </SectionTitle>
          {(description || '')
            .split('\n')
            .map(x => x.trim())
            .map(x => <p style={x === '' ? { marginBottom: '32px' } : {}} key={x}>{x}</p>)}
          <Button style={{ padding: '16px 36px', borderRadius: 7, marginTop: 50 }}><Link to='#form'>Заказать товар</Link></Button>
        </div>
        <SectionTitle style={{ textAlign: 'left' }}>
          Товары бренда <Attention>{name}</Attention>
        </SectionTitle>
        <div className='brendabout_cards'>
          {
            cards.length === 0
              ? <Cards api={api} style={{ padding: 0 }} />
              : cards
          }
        </div>
      </div>
      <FormSection api={api} className='bg-form' />
    </main>
  )
}
