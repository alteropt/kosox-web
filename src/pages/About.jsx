export default function () {
  document.title = 'О компании'
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
          <h1>Купить комлектующие в Москве в компании KOSOX</h1>
        </div>
      </div>
      <div className='shopandpay'>
        <div className='shopandpay_content'>
          <div className='shopandpay_content_flex'>
            <p>
              На рынке представлено большое количество поставщиков различного промышленного обороудования, но найти компанию, которая совмещает в себе широкий ассортимент, приятные цены и ГОСТ/ТУ/ISO качество всех товаров практически невозможно. Наша фирма KOSOX одна из немногих, кто дает вам шанс найти такого поставщика!
            </p>
          </div>
        </div>
        <div className='shopandpay_content'>
          <div className='shopandpay_content_center'>
            <h2>
              Обращаясь в нашу фирму, вы получаете надежного и ответственного партнёра-поставщика, который понимает, как устроен современный рынок потребления его продукции и готов предоставить конкурентоспособные условия для каждого заказчика.
            </h2>
          </div>
          <div className='shopandpay_content_flex'>
            <img
              className='shopandpay_content_flex_box'
              src='./img/box.svg'
              alt='icon'
            />
            <img
              className='shopandpay_content_flex_Black'
              src='./img/Black.png'
              alt='icon'
            />
            <img
              className='shopandpay_content_flex_sel'
              src='./img/sel.svg'
              alt='icon'
            />
            <p>
              Компания ООО "КОСОКС" занимается оптово-розничной продажей промышленного комплектующего в Москве и других городах России.
              На каждую единицу товара мы предоставляем уникальный паспорт и сертификат соответствия, что демонстрирует и доказывает наивысшее
              качество производимой продукции. Вся наша продукция проходит через полный цикл тестирования, выяявления и уничтожение скрытых недостатков с использованием
              нейросетей. Это позволяет гарантировать то самое наивысшее качество, о котором мы заявляем. Комплектующие производятся по двум стандартам ГОСТ и
              ISO. А также мы можем выполнять индивидуальные заказы по Вашим
              чертежам. В том числе, мы сотрудничаем БЕЗ ПОСРЕДНИКОВ с мировыми
              брендами, такими как:
            </p>
            <ul>
              <li>-CTS</li>
              <li>-FAG</li>
              <li>-FERSA</li>
              <li>-FS</li>
              <li>-GLT</li>
              <li>-IBB</li>
              <li>-KOYO</li>
              <li>-LDI</li>
              <li>-MTK и другие</li>
            </ul>
            <p>
              Сотрудничество с данными брендами позволяет нам предоставлять вам огромное количество товаров всех категорий:
            </p>
            <ul>
              <li>-Игольчатые подшипники, Роликоподшипники, Шарикоподшипники, Подшипники скольжения</li>
              <li>-Корпусные подшипниковые узлы</li>
              <li>-Втулки бесшпоночные, конические, зажимные (Цанговые)
              </li>
              <li>-Втулки конические Тапербуш ( Taper Bushes )
              </li>
              <li>-Втулки скольжения (биметаллические подшипники скольжения)
              </li>
              <li>-Звёздочки цепные для приводных роликовых цепей
              </li>
              <li>-Камлоки</li>
              <li>А также вы можете перейти в <a class='link-about' href='/catalog'>КАТАЛОГ</a> и подробнее ознакомиться со всеми образцами</li>
            </ul>

            <p>
              Засчёт нашей системы работы,вы получаете товары по реальной цене, без наценок от посредников. Наши основные клиенты — это:
            </p>
            <ul>
              <li>
                -Торговые компании. Они реализуют нашу продукцию
              </li>
              <li>
                -Производители оборудования. Они пользуются нашей продукцией в процессе работы
              </li>
              <li>
                -Конечный потребитель, который использует наши комплектующие для
                ремонта своего оборудования
              </li>
            </ul>
            <p>Для комфорта наших клиентов, мы постарались создать наилучшие условия на рынке, позволяющие найти индвидуальный пдоход к каждому:</p>
            <ul>
              <li>
                -Гибкое сотрудничество.То есть мы подстраиваемся под любого покупателя, кем бы вы не являлись.
              </li>
              <li>
                -Минимальные сроки поставки по согласованному графику. Доставка в любую точку России и стран СНГ в кратчайшие сроки!
              </li>
              <li>
                -Создание запаса комплектующих под заказчика на нашем складе. Это позволяет нам постоянно ускорять сроки поставок без ущерба качеству
              </li>
              <li>
                -Производство по индивидуальным чертежам. Достаточно немногие компании предоставляют такие услуги, и наша фирма одна из них
              </li>
            </ul>
            <p>
              Вы заинтересованы и хотите обсудить сотрудничество или у вас просто остались вопросы по работе нашей компании? Звоните нам по телефону <a class='link-about' href='tel:79818800222'>+7(981)880-02-22</a> или пишите на почту <a class='link-about2' href='mailto:zakaz@kosox.ru'>zakaz@kosox.ru</a>. А также Вы можете заказать обратный звонок на сайте нажав <a class='link-about' href='\#contact_form'>СЮДА</a>.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
