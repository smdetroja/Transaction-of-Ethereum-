import React, { useState, useEffect } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { BsArrowLeftRight } from 'react-icons/bs'

const Converter = () => {
    const url = 'http://localhost:5000/api/getmarket';
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(async (response) => {
            setdata(await response.json())
        }).catch((response) => {
            console.log(response);
        })
    }, [])

    const currency = [
        {
            name: 'UAE Dirham',
            symbol: 'AED'
        },
        {
            name: 'Australian Dollar',
            symbol: 'AUD'
        },
        {
            name: 'Canadian Dollar',
            symbol: 'CAD'
        },
        {
            name: 'Chinese Yuan',
            symbol: 'CNY'
        },
        {
            name: 'Euro',
            symbol: 'EUR'
        },
        {
            name: 'British Pound Sterling',
            symbol: 'GBP'
        },
        {
            name: 'Indian Rupee',
            symbol: 'INR'
        },
        {
            name: 'Russian Ruble',
            symbol: 'RUB'
        },
        {
            name: 'Singapore Dollar',
            symbol: 'SGD'
        },
        {
            name: 'United States Dollar',
            symbol: 'USD'
        },
    ]

    const [cryptodd, setCryptodd] = useState(false)
    const [currdd, setCurrdd] = useState(false)

    const [selectedcrypto, setSelectedcrypto] = useState(null);
    const [selectedcurr, setSelectedcurr] = useState(null);

    const currconvert = (to, from, amount) => {
        fetch(`https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`, {
            method: 'GET',
            redirect: 'follow',
            headers: {
                'apikey': 'bc9zSQMFEbhltD37UIgPM5lAaVdcGaEi'
            }
        })
            .then(async (response) => { let data = await response.json(); console.log(data.result); setCurrinput(data.result) })
            .catch((error) => { console.log('error', error); setCurrinput(0) });
    }
    const cryptoconvert = (to, from, amount) => {
        fetch(`https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`, {
            method: 'GET',
            redirect: 'follow',
            headers: {
                'apikey': 'bc9zSQMFEbhltD37UIgPM5lAaVdcGaEi'
            }
        })
            .then(async (response) => { let data = await response.json(); console.log(data.result / selectedcrypto.price); setCryptoinput(data.result / selectedcrypto.price) })
            .catch((error) => { console.log('error', error); setCryptoinput(0) });
    }

    const [cryptoinput, setCryptoinput] = useState(0)
    const [currinput, setCurrinput] = useState(0)

    const cryptochange = (event) => {
        setCryptoinput(event.target.value);
        console.log(cryptoinput);
        currconvert(selectedcurr.symbol, 'USD', event.target.value * selectedcrypto.price);
    }
    const currchange = (event) => {
        setCurrinput(event.target.value);
        console.log(currinput);
        cryptoconvert('USD', selectedcurr.symbol, event.target.value);
    }

    return (
        <div className='flex flex-col w-full justify-start items-center'>
            <h1 className='text-3xl sm:text-5xl text-white py-1'>
                Converter
            </h1>
            <div className='flex mf:flex-col flex-col items-start justify-between md:p-20 py-12 px-4'>
                <div className='flex flex-1 justify-start flex-col mf:mr-10'></div>
                <div className='p-5 h-96 sm:w-full w-full flex flex-row justify-start items-center blue-glassmorphism'>
                    <div className='p-5 sm:w-full h-52 w-full flex flex-row justify-start items-center'>
                        <input onChange={cryptochange} value={cryptoinput} placeholder='Cryptocurrency' type='number' step="0.1" className='my-2 w-full h-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-xl white-glassmorphism' />
                        <div className='flex flex-col items-center my-2 w-full h-full rounded-sm p-2 outline-none text-white border-none text-sm white-glassmorphism'>
                            <button onClick={() => { setCryptodd(!cryptodd); }} className='flex flex-row justify-between items-center text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded cursor-pointer'>
                                {selectedcrypto === null ? 'Select Cryptocurrency' : selectedcrypto.name}
                                <BiChevronDown />
                            </button>
                            {cryptodd &&
                                <div className='flex flex-col my-2 w-full h-98 rounded-sm p-2 bg-grey-800 text-white bg-grey-800 border-cyan-600 text-sm white-glassmorphism'>
                                    <ul style={{ listStyle: 'none' }}>
                                        {data.map((crypto) => (
                                            <li onClick={() => { setSelectedcrypto({ price: crypto.quote.USD.price, name: crypto.name }); setCryptodd(!cryptodd) }} key={crypto.id} className='text-white cursor-pointer bg-grey-800 hover:bg-grey-90 p-1 border-white' style={{}} >{crypto.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                    <BsArrowLeftRight className='text-white w-28 h-23' />
                    <div className='p-5 sm:w-full h-52 w-full flex flex-row justify-start items-center'>
                        <input onChange={currchange} value={currinput} placeholder='Currency' type='number' step="0.1" className='my-2 w-full h-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-xl white-glassmorphism' />
                        <div className='flex flex-col items-center my-2 w-full h-full rounded-sm p-2 outline-none text-white border-none text-md white-glassmorphism'>
                            <button onClick={() => { setCurrdd(!currdd); }} className='flex flex-row justify-between items-center text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded cursor-pointer'>
                                {selectedcurr === null ? 'Select Currency' : selectedcurr.name}
                                <BiChevronDown />
                            </button>
                            {currdd &&
                                <div className='flex flex-col my-2 w-full h-98 rounded-sm p-2 bg-grey-800 text-white border-cyan-600 text-sm white-glassmorphism'>
                                    <ul style={{ listStyle: 'none' }}>
                                        {currency.map((item) => (
                                            <li onClick={() => { setSelectedcurr({ symbol: item.symbol, name: item.name }); setCurrdd(!currdd) }} key={item.symbol} className='text-white cursor-pointer bg-grey-800 hover:bg-grey-90 p-1 border-white'>{item.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Converter