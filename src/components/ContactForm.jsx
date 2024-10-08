import React from 'react';
import { useTranslation } from 'react-i18next';
export function ContactForm() {
const { t } = useTranslation('common');
  return (
    <div className='contact-form'>
        <form action="https://formspree.io/f/mrbgzreq"  method="POST">
            <label htmlFor="email">{t('footer.mail')}</label>
            <input type="email" id='email' name="email"></input>
            <label htmlFor="message">{t('footer.message')}</label>
            <textarea id='message' name="message"></textarea>    
            <button type="submit">{t('footer.send')}</button>
        </form>
    </div>
    
  );
}