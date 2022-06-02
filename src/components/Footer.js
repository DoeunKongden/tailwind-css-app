import React from 'react'

function Footer() {
    return (
        <div className='w-full mt-24 text-gray-300 py-y px-2 bg-slate-900 '>
            <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
                <div name="List of footer">
                    <h6 className='uppercase font-bold pt-2 '>Solutions</h6>
                    <ul>
                        <li>Marketing</li>
                        <li>Analytic</li>
                        <li>Commerce</li>
                        <li>Data</li>
                        <li>Cloud</li>
                    </ul>
                </div>

                <div name="List of footer">
                    <h6 className='uppercase font-bold pt-2 '>Support</h6>
                    <ul>
                        <li>Marketing</li>
                        <li>Analytic</li>
                        <li>Commerce</li>
                        <li>Data</li>
                        <li>Cloud</li>
                    </ul>
                </div>

                <div name="List of footer">
                    <h6 className='uppercase font-bold pt-2 '>Companys</h6>
                    <ul>
                        <li>Marketing</li>
                        <li>Analytic</li>
                        <li>Commerce</li>
                        <li>Data</li>
                        <li>Cloud</li>
                    </ul>
                </div>

                <div name="List of footer">
                    <h6 className='uppercase font-bold pt-2 '>legal</h6>
                    <ul>
                        <li>Marketing</li>
                        <li>Analytic</li>
                        <li>Commerce</li>
                        <li>Data</li>
                        <li>Cloud</li>
                    </ul>
                </div>

                <div name="List of footer" className='col-span-2 pt-8 md:pt-2'>
                    <h6 className='uppercase font-bold pt-2 '>Subscribe to our  newsletter</h6>
                    <p className='py-4'>The latest news, articles and resources, sent to your inbox weekly.</p>
                    <form className='flex flex-col sm:flex-row'>
                        <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter email..'></input>
                        <button className="p-2 mb-4">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer