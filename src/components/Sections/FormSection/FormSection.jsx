import Form from '../../Form'
import Attention from '../../UI/Attention/Attention'
import SectionTitle from '../../UI/SectionTitle/SectionTitle'

const FormSection = ({ api, className, ...props }) => {
  return (
    <div className={`form ${className}`} {...props}>
      <div className='cntr'>
        <SectionTitle className='form_title'>Остались <Attention>вопросы?</Attention></SectionTitle>
        <div className='form_inner'>
          <div className='form_form'>
            <Form api={api} />
          </div>
          <div className='form_info'>
            <div className='form_info-headline'>
              <h3>График работы:</h3>
              <h3>Понедельник — Пятница, с 09:00 до 18:00 по МСК</h3>
            </div>
            <div className='form_contacts'>
              <div className='contact_page_about_phone'>
                <img src='/img/phone.svg' alt='' />
                <div className='contact_page_about_phone_text'>
                  <a href='tel:+88124555155'>
                    <h3>+8 (812) 455-51-55</h3>
                  </a>
                </div>
              </div>
              <div className='contact_page_about_phone'>
                <img src='/img/location.svg' alt='' />
                <div className='contact_page_about_location_text'>
                  <a href='#0'>
                    <h3>
                      г. Санкт-Петербург, Придорожная аллея, д. 8, лит. А, ПОМЕЩ. 620
                    </h3>
                  </a>
                </div>
              </div>
              <div className='contact_page_about_phone'>
                <img src='/img/mail.svg' alt='' />
                <div className='contact_page_about_mail_text'>
                  <a href='mailto:zakaz@kosox.ru'>
                    <h3>zakaz@kosox.ru</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FormSection
