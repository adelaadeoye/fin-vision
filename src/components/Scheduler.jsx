import './Scheduler.css'

function Scheduler() {
  const bookingUrl = 'https://scheduler.zoom.us/adeoye-adela/booking'

  const handleBooking = () => {
    window.open(bookingUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="scheduler" id="booking">
      <div className="container">
        <h2 className="scheduler-title">Book a Meeting</h2>
        <p className="scheduler-description">
          Schedule a time to connect with us and discuss your ideas.
        </p>
        <div className="scheduler-card">
          <div className="scheduler-icon">📅</div>
          <h3>Ready to Schedule?</h3>
          <p>Click the button below to open our booking calendar and select a convenient time for your meeting.</p>
          <button className="booking-button" onClick={handleBooking}>
            Book a Meeting
          </button>
          <p className="scheduler-note">Opens in a new tab</p>
        </div>
      </div>
    </section>
  )
}

export default Scheduler
