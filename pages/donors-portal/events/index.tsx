import { DonorLayout } from '../../../components';
import moment from 'moment-timezone';

type Props = {}

const Events = (props: Props) => {
  const eventDate = moment.tz('2023-05-15 06:00:00', 'UTC');

  const formatDate = (date: moment.Moment) => {
    return date.format('ddd MMM D, YYYY h:mm A z');
  };

  return (
    <DonorLayout>
      <main className='event-section'>
        <h2>DirectEd Events</h2>
        <section>
          <div className='event-section__event'>
            <div className='event-section__event-info'>
              <h3>DirectEd Scholars 2023 Opening Ceremony</h3>
              <p>You can join the opening ceremony via this link: <a href="https://lu-se.zoom.us/j/66085258419">Zoom</a></p>
              <p>Date: {formatDate(eventDate)} | Sun May 14, 2023 11:00 PM PST</p>
            </div>
            <h3>Recording</h3>
            <p>Here's the recording for the opening ceremony: <a href=" https://bit.ly/DirectEdOpening">Link</a></p>
          </div>
        </section>
      </main>
    </DonorLayout>
  )
}

export default Events
