import React from 'react'
import Hero2 from '../sections/Hero2';
import CodeofConduct from '../sections/CodeofConduct';
import SectionHeader from '../sections/partials/SectionHeader';
import classNames from 'classnames';
import data from '../../events.json'

const Events = () => {

    const sectionHeader = {
        title: 'Events',
    };

    return (
        <>
            <Hero2 className="illustration-section-01" />

            <div className="container">
                <SectionHeader style={{ marginTop: "-30px" }} data={sectionHeader} className="center-content" />
                {data.length===0?(<p style = {{textAlign:"center",width:"100%"}}>No New Events</p>):""}
                <div className='event-parent-container'>
                    
                    {data.map((x, i) => {
                        return (
                            <a target = "_blank" href = {x.event_link} className="event-container" key={i}>
                                <div className='event-poster-container'>
                                    <img src={x.event_poster} alt="logo" className='event-poster' />
                                </div>
                                <div className='event-content-container'>
                                    <h3>{x.event_name}</h3>
                                    <p><b>{x.speaker_name} </b> {x.speaker_designation}</p>
                                    <p style={{fontWeight:"500",marginTop:"4px"}}>{x.event_description}</p>
                                    <p>{x.event_date}, {x.event_start_time} - {x.event_start_time}</p>
                                    
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Events