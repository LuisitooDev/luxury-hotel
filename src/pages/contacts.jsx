import React from "react";
import Hero from "../components/hero";
import Navbar from "../components/Navbar";

function Contacts(){


    return (
        <div class="bg-white-200">
            <div>
                <Hero backgroundUrl="contact.png"/>
            </div>
            <div class="bg-blue-950">
                <h1 className="mb-7 text-7xl md:text-7xl text-white text-center">CONTACT US</h1>
            </div>
            <h2 class="mb-3 text-xl md:text-3xl ml-4 lg:text-5xl text-blue-950" style={{ fontFamily: 'zen-antique' }}>WE ARE HERE FOR YOU</h2>
            <h2 class="mb-2 text-lg md:text-xl ml-4 lg:text-2xl text-blue-950">
                At Luxury Hotels we take our clients seriously. Do you have any questions, complaints, or requests?
                Please forward it to our support service, and we will get back to you as soon as possible.
            </h2>
            <div class="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 p-4">
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-blue-950">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                    </svg>
                        497 Evergreen Rd. Roseville, CA 95673
                    </h2>
                    <br/>
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-blue-950">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                        Phone: +44 345 678 903
                    </h2>
                    <br/>
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-blue-950">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                    </svg>
                        Email: luxury_hotels@gmail.com
                    </h2>
                </div>
                <div class="w-full sm:w-1/2 p-4 md:p-8">
                    <h2 class="mb-2 text-lg md:text-xl text-blue-950">
                        Fill out the form with your question, complaint or suggestion.
                    </h2>
                    <form class="mb-4 md:mb-5" action="https://formsubmit.co/luxuryhotel@yopmail.com" method="POST">
                        <label class="input input-bordered flex items-center gap-2 input-primary input-md w-full mb-2 md:mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            <input type="text" class="w-full p-2 pl-3 pr-3" name="Name" placeholder="Enter your name" required />
                        </label>
                        <label class="input input-bordered flex items-center gap-2 input-primary input-md w-full mb-2 md:mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                            <input type="email" class="w-full p-2 pl-3 pr-3" name="Email" placeholder="Enter your email" required />
                        </label>
                        <label>
                            <textarea type="text" name="Message" placeholder="Write your message" class="textarea textarea-primary textarea-md w-full" required></textarea>
                        </label>
                        <button type="submit" class="btn btn-primary w-full mt-4">
                            Send message
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contacts;