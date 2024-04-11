import { useEffect, useState } from 'react'
import Card from './Card'
import { Link, useSearch } from 'wouter'

const PageButtons = ({ currentPage, lastPage, PageLink, PageStub }) => {
  const pages = [
    ...Array(lastPage)
      .keys()
      .map(x => x + 1)
  ]

  const PageArrow = ({ page, title }) => (
    <PageLink href={`?page=${page}`} title={title} />
  )

  const PageButton = ({ page }) => (
    <PageLink
      innerClass={page == currentPage ? 'activa_nav red_border' : ''}
      href={`?page=${page}`}
      title={page}
    />
  )

  const buttons = pages => pages.map(x => <PageButton key={x} page={x} />)

  const siblings = 2
  const boundary = 1
  const center = Math.min(
    Math.max(1 + (siblings + boundary), currentPage),
    lastPage - (siblings + boundary)
  )
  const leftStub =
    currentPage - 1 - (siblings + boundary) <= 1 ? (
      <PageButton key={boundary + 1} page={boundary + 1} />
    ) : (
      <PageStub key={boundary + 1} title='...' />
    )
  const rightStub =
    lastPage - currentPage - (siblings + boundary) <= 0 ? (
      <PageButton key={lastPage - boundary} page={lastPage - boundary} />
    ) : (
      <PageStub key={lastPage - boundary} title='...' />
    )
  const pageButtons =
    lastPage < 2 * (siblings + boundary + 1)
      ? buttons(pages)
      : [
          ...buttons(pages.slice(0, boundary)),
          leftStub,
          ...buttons(pages.slice(center - siblings, center + siblings - 1)),
          rightStub,
          ...buttons(pages.slice(lastPage - boundary, lastPage))
        ]

  return (
    <>
      <PageArrow page={Math.max(1, currentPage - 1)} title='<' />
      {pageButtons}
      <PageArrow page={Math.min(lastPage, currentPage + 1)} title='>' />
    </>
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
export default function ({ api, params: { category } }) {
  const page = +new URLSearchParams(useSearch()).get('page') || 1
  const [{ categoryName = '', products = [], lastPage = 1 }, setContent] =
    useState({})
  console.log(categoryName)

  useEffect(() => {
    ;(async () => {
      const entity = await (await api.categories()).withId(category)
      const pages = await entity.products(6)
      setContent({
        categoryName: await entity.name(),
        products: await Promise.all(
          (
            await (await pages.page(page)).array()
          ).map(async x => ({
            id: await x.id(),
            name: await x.name(),
            icon: await x.icon(),
            brand_icon: await (await x.brand()).icon()
          }))
        ),
        lastPage: await pages.totalPages()
      })
    })()
  }, [page])

  const PageLink = ({ innerClass, href, title }) => (
    <Link to={href}>
      <p className={innerClass}>{title}</p>
    </Link>
  )

  const PageStub = ({ title }) => <p>{title}</p>

  return (
    <main>
      <div
        style={{
          backgroundImage:
            'url("./img/6ba632040d142d29a5ebe2411f406f96 — копия.jpeg")'
        }}
        className='header_main'
      >
        <div className='header_main_bg' />
        <div className='header_main_flex'>
          <h1>Каталог</h1>
          <h1>/</h1>
          <h1>{categoryName}</h1>
        </div>
      </div>
      <div className='filterkotalog'>
        <div className='filterkotalog_flex'>
          <div className='filterkotalog_filter'>
            <div className='filterkotalog_filter_title'>
              <h2>Фильтр</h2>
              <img src='./img/filter.svg' alt='' />
            </div>
            <div
              className='accordion filterkotalog_filter_title'
              id='accordionPanelsStayOpenExample'
            >
              <div
                style={{ flexDirection: 'column' }}
                className='accordion-item '
              >
                <h2 className='accordion-header' id='panelsStayOpen-headingOne'>
                  <button
                    className='btn btn-secondary dropdown-toggle'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#panelsStayOpen-collapseOne'
                    aria-expanded='true'
                    aria-controls='panelsStayOpen-collapseOne'
                  >
                    Категории
                  </button>
                </h2>
                <div
                  style={{ backgroundColor: '#00000000' }}
                  id='panelsStayOpen-collapseOne'
                  className='accordion-collapse collapse show'
                  aria-labelledby='panelsStayOpen-headingOne'
                >
                  <ul className='dropdown-menu2'>
                    <li>
                      <label htmlFor='checkbox_id_first'>Ареометры</label>
                      <div className='checkbox-wrapper'>
                        <input type='checkbox' id='checkbox_id_first' />
                      </div>
                    </li>
                    <li>
                      <label htmlFor='checkbox_id_second'>Ареометры</label>
                      <div className='checkbox-wrapper'>
                        <input type='checkbox' id='checkbox_id_second' />
                      </div>
                    </li>
                    <li>
                      <label htmlFor='checkbox_id_third'>Ареометры</label>
                      <div className='checkbox-wrapper'>
                        <input type='checkbox' id='checkbox_id_third' />
                      </div>
                    </li>
                    <li>
                      <label htmlFor='checkbox_id_four'>Ареометры</label>
                      <div className='checkbox-wrapper'>
                        <input type='checkbox' id='checkbox_id_four' />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                style={{ flexDirection: 'column' }}
                className='accordion-item '
              >
                <h2 className='accordion-header' id='panelsStayOpen-headingTwo'>
                  <button
                    className='btn btn-secondary dropdown-toggle'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#panelsStayOpen-collapseTwo'
                    aria-expanded='true'
                    aria-controls='panelsStayOpen-collapseTwo'
                  >
                    Категории
                  </button>
                </h2>
                <div
                  style={{ backgroundColor: '#00000000' }}
                  id='panelsStayOpen-collapseTwo'
                  className='accordion-collapse collapse show'
                  aria-labelledby='panelsStayOpen-headingTwo'
                />
              </div>
              <div
                style={{ flexDirection: 'column' }}
                className='accordion-item '
              >
                <h2
                  className='accordion-header'
                  id='panelsStayOpen-headingThree'
                >
                  <button
                    className='btn btn-secondary dropdown-toggle'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#panelsStayOpen-collapseThree'
                    aria-expanded='true'
                    aria-controls='panelsStayOpen-collapseThree'
                  >
                    Категории
                  </button>
                </h2>
                <div
                  style={{
                    backgroundColor: '#00000000',
                    textAlign: 'center'
                  }}
                  id='panelsStayOpen-collapseThree'
                  className='accordion-collapse collapse show'
                  aria-labelledby='panelsStayOpen-headingThree'
                >
                  <div className='range'>
                    <div className='sliderValue'>
                      <span className='sliderValue_span'>100</span>
                    </div>
                    <div className='field'>
                      <div className='value left'>0</div>
                      <input
                        className='field_inp'
                        type='range'
                        min={0}
                        max={200}
                        defaultValue={100}
                        step={1}
                      />
                      <div className='value right '>200</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='filterkotalog_filter_btn'>
              <button onclick='filtercl()'>Закрыть</button>
              <button onclick='filtercl()'>Применить</button>
            </div>
          </div>
          <div className='filterkotalog_button_fiter'>
            <button onclick='filterop()'>Фильтр</button>
          </div>
          <div className='filterkotalog_cards'>
            {products.map(x => (
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
              <div className='filterkotalog_cards_nav_btn'>
                <a href=''>Назад</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
