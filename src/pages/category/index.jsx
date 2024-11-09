import { useEffect, useState } from 'react'
import Card from './Card'
import { Link, useSearch } from 'wouter'
import PageButtons from '../../components/PageButtons'
import { navigate } from 'wouter/use-browser-location'
import Banner from '../../components/Sections/Banner/Banner'
import Attention from '../../components/UI/Attention/Attention'
import Button from '../../components/UI/Button/Button'

const Filter = ({ name, variants, onChange }) => {
  const key = Math.round(Math.random() * 1e10)
  const header = `panelsStayOpen-heading-${key}`
  const body = `panelsStayOpen-collapse-${key}`
  return (
    <div style={{ flexDirection: 'column' }} className='accordion-item '>
      <h2 className='accordion-header' id={header}>
        <button
          className='btn btn-secondary dropdown-toggle collapsed filter-btn'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target={`#${body}`}
          aria-expanded='true'
          aria-controls={body}
        >
          {name}
        </button>
      </h2>
      <div
        style={{ backgroundColor: '#00000000' }}
        id={body}
        className='accordion-collapse collapse'
        aria-labelledby={header}
      >
        <ul className='dropdown-menu2'>
          {variants.map((x, i) => (
            <li key={x}>
              <label htmlFor={`checkbox_${key}_${i}`}>{x}</label>
              <div className='checkbox-wrapper'>
                <input
                  onChange={(e) => onChange(x, e.target.checked)}
                  type='checkbox'
                  id={`checkbox_${key}_${i}`}
                  style={{ width: '15px', height: '15px' }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/**
 * @typedef {Object} props
 * @property {ReturnType<typeof import('../../api/Api').default>} api
 */

/**
 *
 * @param {props} props
 * @returns
 */
export default function Category ({ api, params: { id } }) {
  const page = +new URLSearchParams(useSearch()).get('page') || 1
  const [
    { categoryName = '', products = [], parameters = [], lastPage = 1 },
    setContent
  ] = useState({})
  const [filters, setFilters] = useState({})
  const [showProducts, setShowProducts] = useState(true)
  document.title = `Категория: ${categoryName}`

  useEffect(() => {
    (async () => {
      const entity = await (await api.subcategories()).withId(id)
      const pages = await (await entity.products(6)).filtered(filters)
      setContent({
        categoryName: await entity.name(),
        products: await Promise.all(
          (await (await pages.page(page - 1)).array()).map(async (x) => ({
            id: await x.id(),
            name: await x.name(),
            icon: await x.icon(),
            brand_icon: await (await x.brand()).icon()
          }))
        ),
        parameters: await entity.parameters(),
        lastPage: Math.max(1, await pages.totalPages())
      })
    })()
  }, [page, filters, api, id])

  const PageLink = ({ innerClass, href, title }) => (
    <Link to={href}>
      <p className={innerClass}>{title}</p>
    </Link>
  )

  const PageStub = ({ title }) => <p>{title}</p>

  const Content = () =>
    <>
      {products.map((x) => (
        <Card
          key={x.id}
          title={x.name}
          image={x.icon}
          brandImage={x.brand_icon}
          page={`/product/${x.id}`}
        />
      ))}
      <div className='filterkotalog_cards_nav'>
        <div className='filterkotalog_cards_nav_flex'>
          <PageButtons
            currentPage={page}
            lastPage={lastPage}
            PageLink={PageLink}
            PageStub={PageStub}
          />
        </div>
      </div>
    </>

  return (
    <main>
      <Banner breadcrumbs={[
        { title: 'Главная', url: '/' },
        { title: 'Каталог', url: '/catalog' },
        { title: categoryName }
      ]}
      >
        Каталог <Attention>товаров</Attention>
      </Banner>
      <div className='filterkotalog'>
        <div className='filterkotalog_flex'>
          {
            (!showProducts || window.innerWidth >= 1150) &&
              <div style={{ position: 'relative', top: '0' }} className='filterkotalog_filter'>
                <div className='filterkotalog_filter_title'>
                  <h2>Фильтр</h2>
                </div>
                <div
                  className='accordion filterkotalog_filter_title filterkotalog_filter_name'
                  id='accordionPanelsStayOpenExample'
                >
                  {parameters.map(([name, variants]) => (
                    <Filter
                      key={name}
                      name={name}
                      variants={variants}
                      onChange={(variant, checked) => {
                        const oldVariants = filters[name] || []
                        const variants = checked
                          ? [...oldVariants, variant]
                          : oldVariants.filter((x) => x !== variant)
                        setFilters({ ...filters, [name]: variants })
                        navigate('?page=1')
                      }}
                    />
                  ))}
                </div>
                <div className='filterkotalog_filter_btn'>
                  <Button onClick={() => setShowProducts(true)}>Применить</Button>
                </div>
              </div>
          }
          {
            showProducts &&
              <>
                <div className='filterkotalog_button_fiter'>
                  <button onClick={() => setShowProducts(false)}>Фильтр</button>
                </div>
                <div className='filterkotalog_cards'>
                  {{ 0: <h2>Ничего не найдено</h2> }[products.length] || <Content />}
                </div>
              </>
          }
        </div>
      </div>
    </main>
  )
}
