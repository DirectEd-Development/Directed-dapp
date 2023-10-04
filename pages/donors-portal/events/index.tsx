import { useState } from 'react';
import { DonorLayout } from '../../../components';

const Events = () => {
  const eventsData = [
    {
      title: 'DirectEd Scholars 2023 Graduation Ceremony (Students\' presentations)',
      link: 'https://lu-se.zoom.us/j/66085258419',
      location: 'https://lu-se.zoom.us/j/66085258419',
      date: '	Wed 16 Aug 2023 12:30 - 13:30 (PST)',
      recordingLink: 'https://bit.ly/DirectEdOpening',
    },
    {
      title: 'How to Ace Interviews with Jessica Pointing',
      link: 'https://app.airgram.io/7062829254232244225/share/3a03ae2c32cf11ee9fe20a2cbd030b4d?from=A2abd9016f0e111ed8ce40a2cbd030b4d-7062829254232244225',
      date: '	August 4th ',
      recordingLink: 'https://app.airgram.io/7062829254232244225/share/3a03ae2c32cf11ee9fe20a2cbd030b4d?from=A2abd9016f0e111ed8ce40a2cbd030b4d-7062829254232244225',
    },
    {
      title: 'DirectEd Scholars 2023 Opening Ceremony',
      link: 'https://lu-se.zoom.us/j/66085258419',
      date: 'Sun May 14, 2023 11:00 PM PST',
      recordingLink: 'https://bit.ly/DirectEdOpening',
    },
    {
      title: 'Personal Success 1: Achieving your Goals',
      lecturer: 'Alicia Pollard',
      date: 'July 18',
      time: '1 pm - 2 pm UTC',
      location: 'https://lu-se.zoom.us/j/66085258419',
      description:
        'After this Workshop, you will leave with a better idea of how to set, keep track of, and achieve their goals including:\n- Common failure modes and how to avoid them\n- Defining current goals and the obstacles that stand in the way of their success (imposter syndrome, perfectionism, etc.)\n- Understanding the role productivity plays in consistency + habit forming, and leave with tools that will help you optimize your productivity and effectively focus your time and attention.',
    },
	{
		title: 'Personal Success 2: Atomic Habits',
		lecturer: 'Bart Jaworski',
		date: 'July 20',
		time: '1 pm - 2 pm UTC',
		location: 'https://lu-se.zoom.us/j/66085258419',
		description:
		  'After this Workshop, you will have a full understanding of the building blocks of habits and you will have an actionable strategy that will get you to where you want in terms of consistent productivity in a healthy and balanced manner.',
	  },
    {
      title: 'How to write Resumes & Cover Letters',
      lecturer: 'Steven Berkun-Drevnig',
      date: 'August 02',
      time: '2 pm UTC',
      location: 'https://lu-se.zoom.us/j/66085258419',
      description:
        '',
      },
  ];

  const [activeEventIndex, setActiveEventIndex] = useState(0);

  const handleTabClick = (index:any) => {
    setActiveEventIndex(index);
  };

  return (
    <DonorLayout>
      <main className='event-section'>
        <h2>DirectEd Events</h2>
        <div className='event-section__tabs'>
          {eventsData.map((event, index) => (
            <div
              key={index}
              className={`event-section__tab ${
                index === activeEventIndex ? 'active' : ''
              }`}
              onClick={() => handleTabClick(index)}
            >
              {event.title}
            </div>
          ))}
        </div>
        <div className='event-section__content'>
          {eventsData.map((event, index) => (
            <div
              key={index}
              className={`event-section__event ${
                index === activeEventIndex ? 'active' : ''
              }`}
            >
              <div className='event-section__event-info'>
                <h3>{event.title}</h3>
                {event.lecturer && <p>Lecturer: {event.lecturer}</p>}
                <p>Date: {event.date}</p>
                {event.time && <p>Time: {event.time}</p>}
                <p>
                  Location:{' '}
                  <a
                    href={event.location}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Zoom
                  </a>
                </p>
                {event.description && <p>{event.description}</p>}
                {index === 0 && event.recordingLink && (
                  <p>
                    Recording:{' '}
                    <a
                      href={event.recordingLink}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Link
                    </a>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </DonorLayout>
  );
};

export default Events;
