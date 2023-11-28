import React from 'react'
import Hero2 from '../sections/Hero2';
import CodeofConduct from '../sections/CodeofConduct';
import SectionHeader from '../sections/partials/SectionHeader';
import classNames from 'classnames';
import data from '../../acheive.json'

const Events = () => {

    const sectionHeader = {
        title: 'Achievements',
    };

    return (
        <>
            <Hero2 className="illustration-section-01" />

            <div className="container">
                <SectionHeader style={{ marginTop: "-30px" }} data={sectionHeader} className="center-content" />
                <div className='event-parent-container'>
                    {data.map((x, i) => {
                        return (
                            <a href = {x["Portfolio/Github"]} className="event-container" key={i}>
                                <div className='event-poster-container'>
                                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlwj2YK4IT8kJKQS7a57mwtW1tDedIj4lobQ&usqp=CAU"} alt="logo" className='event-poster' />
                                </div>
                                <div className='event-content-container'>
                                    <h3>{x["Name"]}</h3>
                                    <p><b>{x["achievements"]} </b></p>
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
