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
                <div className='event-parent-container' style = {{alignItems:"stretch"}}>
                    {data.map((x, i) => {
                        return (
                            <div className="event-container" key={i}>
                                <div className='event-poster-container'>
                                    <img src={x["imageLink"]} alt="logo" className='event-poster' />
                                </div>
                                <div className='event-content-container'>
                                    <h3 style={{textAlign:"center",fontSize:"1rem"}}>{x["Name"]}</h3>
                                    <ul>
                                        {x["achievements"].map((x,i)=><li key = {x+i.toString()}>{x}</li>)}
                                        {/* <li></li> */}
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Events
