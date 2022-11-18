
export default function DataEntryPage() {
    function handleSubmit(e) {
        e.preventDefault();
       const ticket = {
        "ticket" : e.target.ticket.value,
        "user" : {
            "name": e.target.name.value,
            "contact": e.target.contact.value,
            "state": e.target.state.value
        }
       }
       fetch('http://localhost:3001/tickets', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(ticket)
       })
       .catch(err => console.error(err))
    }
  return (
    <div className="w-full h-full bg-gray-100 p-5">
        <h1 className="text-center text-4xl p-5 font-semibold ">Enter ticket info</h1>
        <form className=" w-96 mx-auto" onSubmit={handleSubmit}>
            <label htmlFor="ticket" className="label">Ticket No.</label>
            <input type="number" name="ticket" className="input" required/>
            <label htmlFor="name" className="label">Name</label>
            <input type="text" name="name" className="input" required/>
            <label htmlFor="contact" className="label">Contact No.</label>
            <input type="number" name="contact" className="input" required/>
            <label htmlFor="state" className="label">State</label>
            <input type="text" name="state" className="input" required/>
            <input type="submit" className='submit mt-5' value="Add" />
        </form>
    </div>
  )
}
