import Form from '../components/Form'

export default function Faq ({ api }) {
  document.title = 'FAQ'
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
          <h1>FAQ</h1>
        </div>
      </div>
      <section className='section_page'>
        <div className='main_left'>
          <h6>Вопрос - ответ</h6>
        </div>
        <div className='section_page_elemnts'>
          <div className='promishlenost_acc'>
            <div
              className='accordion content'
              id='accordionExample'
              style={{
                maxWidth: '1090px',
                width: '100%',
                padding: '0'
              }}
            >
              <div className='accordion-item'>
                <h2 className='accordion-header' id='headingOne'>
                  <button
                    className='accordion-button'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseOne'
                    aria-expanded='true'
                    aria-controls='collapseOne'
                  >
                    <img src='./img/blackic.svg' alt='icon' />
                    Возможен ли самовывоз заказанного товара?
                  </button>
                </h2>
                <div
                  id='collapseOne'
                  className='accordion-collapse collapse show'
                  aria-labelledby='headingOne'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    Вы можете забрать свой заказ самостоятельно по следующему адресу: в Санкт-Петербурге, на Придорожной аллее, дом 8, литера А, помещение 620.
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='headingTwo'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseTwo'
                    aria-expanded='false'
                    aria-controls='collapseTwo'
                  >
                    <img src='./img/blackic.svg' alt='icon' />
                    Работаете ли вы с физическими лицами?
                  </button>
                </h2>
                <div
                  id='collapseTwo'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingTwo'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    Конечно, наше сотрудничество распространяется и на индивидуальных предпринимателей, обладающих особым юридическим статусом.
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='headingThree'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseThree'
                    aria-expanded='false'
                    aria-controls='collapseThree'
                  >
                    <img src='./img/blackic.svg' alt='icon' />
                    Доставляете ли Вы подшипник в другие города?
                  </button>
                </h2>
                <div
                  id='collapseThree'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingThree'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    В любые города России и СНГ!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{ paddingBottom: '50px' }} className='centered'>
        <Form api={api} />
      </div>
    </main>
  )
}
