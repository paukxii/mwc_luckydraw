import React, { useEffect, useState } from 'react'

export default function DataPage() {
    const [tickets, setTickets] = useState([])
    useEffect(() => {
        fetch('http://localhost:3001/tickets')
            .then(res => {
                if (res.ok) {
                    res.json().then(tickets => setTickets(tickets))
                }
            })
            .catch(error => console.error(error))
    }, [])
    return (
        <div className=" w-4/5 mx-auto">
            <table className="w-full text-sm text-left text-gray-500 table-auto mt-5">
                <thead className=" uppercase bg-gray-200">
                    <tr>
                        <th className='py-3 px-6'>ticket No.</th>
                        <th className='py-3 px-6'>name</th>
                        <th className='py-3 px-6'>contact</th>
                        <th className='py-3 px-6'>state</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        tickets.map(ticket => (<tr key={ticket.id} className='hover:bg-gray-100 cursor-pointer even:bg-gray-50'>
                            <td className='py-3 px-6'>{ticket.ticket}</td>
                            <td className='py-3 px-6'>{ticket.user.name}</td>
                            <td className='py-3 px-6'>{ticket.user.contact}</td>
                            <td className='py-3 px-6'>{ticket.user.state}</td>
                        </tr>))
                    }

                </tbody>
            </table>
        </div>
    )
}
