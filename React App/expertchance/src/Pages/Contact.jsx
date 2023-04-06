import React from 'react'
import styled from 'styled-components'

export default function Contact() {
    const Wrapper = styled.section`
      padding: 6rem 0 5rem 0;
      .container{
        margin-top: 6rem;
        text-align: center;

        .contact-form{
            max-width: 50rem;
            margin: auto;

            .contact-inputs{
                display: flex;
                flex-direction: column;
                gap: 3rem;

                input[type="submit"]{
                    cursor: pointer;
                    transition: all 0.2s;
                    width: 35%;

                    &:hover{
                        background-color: ${({theme}) => theme.colors.white};
                        border: 1px solid ${({theme}) => theme.colors.btn};
                        color: ${({theme}) => theme.colors.btn};
                        transform: scale(0.9);
                    }
                }
            }
        }
      }
    `;
    return (
        <Wrapper>
            <h2 className='common-heading'>Contact Us</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.0709009580232!2d84.34479161403218!3d26.22688569559235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992ff8f53068ba5%3A0x260d1e2029d5d61a!2sKhadi%20Gramodyog!5e0!3m2!1sen!2sin!4v1680755828240!5m2!1sen!2sin" width="100%" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            
            <div className="container">
                <div className="contact-form">
                    <form action="https://formspree.io/f/xjvdanbz" method='POST' className='contact-inputs'>
                        <input type="text" name='username' placeholder='username' autoComplete='off' />
                        <input type="email" name='email' placeholder='email' autoComplete='off' required />
                        <textarea name="message" cols="30" rows="6" autoComplete='off' required></textarea>
                        <input type="submit" value='send' />
                    </form>
                </div>
            </div>
        </Wrapper>
    )
}
