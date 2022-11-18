
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
       console.log(ticket)
    }
  return (
    <div className="w-full h-full bg-gray-100 p-5">
        <h1 className="text-center text-4xl p-5 font-semibold ">Enter ticket info</h1>
        <form className=" w-96 mx-auto" onSubmit={handleSubmit}>
            <label htmlFor="ticket" className="label">Ticket No.</label>
            <input type="number" name="ticket" className="input"/>
            <label htmlFor="name" className="label">Name</label>
            <input type="text" name="name" className="input" />
            <label htmlFor="contact" className="label">Contact No.</label>
            <input type="number" name="contact" className="input" />
            <label htmlFor="state" className="label">State</label>
            <input type="text" name="state" className="input" />
            <input type="submit" className='submit mt-5' value="Add" />
        </form>
    </div>
  )
}
