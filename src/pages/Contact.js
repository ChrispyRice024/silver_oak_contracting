import React from 'react'

export default function Contact () {
    return(
        <div>
            <div id='contact'>
                <p>
                    Phone: <a href='tel:770-238-2708'><img id='phone' src='/assets/phone_icon.png'/>(770) 238-2708</a>
                </p>
                <p>
                    E-mail:<a href='mailto:wstephens@silveroakinc.com'>wstephens@silveroakinc.com</a>
                </p>
                <p>
                    To ensure a comprehensive response, please include the following information in your email
                    <ul>
                        <li>A clear description of your project or inquiry</li>
                        <li>Any relevant specifications or requirements</li>
                        <li>Your contact details for further communication</li>
                    </ul>
                </p>
               
            </div>
        </div>
    )
}