import React from 'react'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

const ListOfEvents = [{ 'eventTitle': "Registration", 'eventSubtitile': "", 'eventDescription': "Praticipants can apply here", 'eventLink': "https://forms.gle/7tGBHBQ6X8ESrRC79", "eventLinkTitle": "Apply Here" }, { 'eventTitle': "Recruitment Test", 'eventSubtitile': "", 'eventDescription': "12 April onwards", 'eventLink': "", "eventLinkTitle": "" }, { 'eventTitle': "Interview", 'eventSubtitile': "", 'eventDescription': "TBD", 'eventLink': "", "eventLinkTitle": "" }]

const Events = () => {
	return (
		<div>
			<h1 style={{ textAlign: "center" }}>{"Recruitment is live!"}</h1>
			<Timeline lineColor={'#013220'}>
				{ListOfEvents.map(({ eventTitle, eventSubtitile, eventDescription, eventLink, eventLinkTitle }, eventKey) => (<TimelineItem
					key={eventKey}
					dateText={eventTitle}
					dateInnerStyle={{ background: '#013220' }}
				>
					<h3>{eventTitle}</h3>
					<h4>{eventSubtitile}</h4>
					<p style={{ color: "#aaa" }}>
						{eventDescription}
					</p>
					{(eventLink !== '') ? <a href={eventLink}><button style={{ "display": "flex", "alignItems": "center", "gap": "7px", "fontSize":"16px","borderRadius":"5px","fontFamily":"Inter" ,"padding": "0.5em", "font": "bold" }}>{eventLinkTitle}</button></a> : <></>}

				</TimelineItem>))}

			</Timeline>


		</div>
	)
}


export default Events