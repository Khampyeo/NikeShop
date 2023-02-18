import React from 'react'
import { BsDownload, BsThreeDotsVertical } from "react-icons/bs";
export default function Selling() {
    return (
        <div className='py-[18px] px-6 bg-white rounded-lg h-[500px] flex flex-col'>
            <div className="flex justify-between">
                <h1 className='py-1 font-semibold text-[#6c757d]'>TOP SELLING PRODUCTS</h1>
                <button className='flex items-center bg-[#eef2f7] px-3'>
                    <p className='mr-2 text-[14px]'>Export</p>
                    <BsDownload></BsDownload>
                </button>
            </div>
            <div className="flex-1">
                <table className="w-full h-full mt-[18px]">
                    <tbody className='text-center'>
                        <tr className="text-[#6c757d] text-[14px] hover:bg-[#f6f7fb] border-b">
                            <td className="">
                                <p>ASOS Ridley High Waist</p>
                                <p>07 April 2018</p>
                            </td>
                            <td className="">
                                <p>$79.49</p>
                                <p>Price</p>
                            </td>
                            <td className="">
                                <p>82</p>
                                <p>Quantity</p>
                            </td>
                            <td className="">
                                <p>$6,518.18</p>
                                <p>Amount</p>
                            </td>
                        </tr>
                        <tr className="text-[#6c757d] text-[14px] hover:bg-[#f6f7fb] border-b">
                            <td className="">
                                <p>Marco Lightweight Shirt</p>
                                <p>25 March 2018</p>
                            </td>
                            <td className="">
                                <p>$128.50</p>
                                <p>Price</p>
                            </td>
                            <td className="">
                                <p>37</p>
                                <p>Quantity</p>
                            </td>
                            <td className="">
                                <p>$4,754.50</p>
                                <p>Amount</p>
                            </td>
                        </tr>
                        <tr className="text-[#6c757d] text-[14px] hover:bg-[#f6f7fb] border-b">
                            <td className="">
                                <p>Half Sleeve Shirt</p>
                                <p>17 March 2018</p>
                            </td>
                            <td className="">
                                <p>$39.99</p>
                                <p>Price</p>
                            </td>
                            <td className="">
                                <p>64</p>
                                <p>Quantity</p>
                            </td>
                            <td className="">
                                <p>$2,559.36</p>
                                <p>Amount</p>
                            </td>
                        </tr>
                        <tr className="text-[#6c757d] text-[14px] hover:bg-[#f6f7fb] border-b">
                            <td className="">
                                <p>Lightweight Jacket</p>
                                <p>12 March 2018</p>
                            </td>
                            <td className="">
                                <p>$20.00</p>
                                <p>Price</p>
                            </td>
                            <td className="">
                                <p>184</p>
                                <p>Quantity</p>
                            </td>
                            <td className="">
                                <p>$6,518.18</p>
                                <p>Amount</p>
                            </td>
                        </tr>
                        <tr className="text-[#6c757d] text-[14px] hover:bg-[#f6f7fb] border-b">
                            <td className="">
                                <p>Marco Shoes</p>
                                <p>05 March 2018</p>
                            </td>
                            <td className="">
                                <p>$28.49</p>
                                <p>Price</p>
                            </td>
                            <td className="">
                                <p>69</p>
                                <p>Quantity</p>
                            </td>
                            <td className="">
                                <p>$1,965.81</p>
                                <p>Amount</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
