import React from 'react'
import "./message.scss"
function MessageUsSection() {
    return (
        <section className='messagesection'>

            <div className='generalmessageusdiv'>
                <div className='messagetext'>
                    <h2>Message Us</h2>
                    <p>Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                </div>

                <div className='generalinput'>

                    <div className='upinput'>
                        <input type={"text"} placeholder="FirsName" />
                        <input type={"text"} placeholder="LastName" />
                    </div>

                    <input type={"text"} placeholder="Subject" className='subjectinp' />
                    <input type={"text"} placeholder="Email" className='emailinp' />
                    <textarea className='area' placeholder='Write your message here' />
                    <button className='sendbtn'> SEND MESSAGE </button>
                </div>
            </div>

        </section>
    )
}

export default MessageUsSection