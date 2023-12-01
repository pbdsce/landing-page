import React from 'react'
import Hero2 from '../sections/Hero2';
import CodeofConduct from '../sections/CodeofConduct';
import SectionHeader from '../sections/partials/SectionHeader';
import classNames from 'classnames';
import data from '../../acheive.json'

const Card = ({ x }) => {
    return (
        <div className="event-container">
            <div className='event-poster-container'>
                <img src={x["imageLink"]} alt="logo" className='event-poster' />
            </div>
            <div className='event-content-container'>
                <h3 style={{ textAlign: "center", fontSize: "1rem" }}>{x["Name"]}</h3>
                <ul>
                    {x["Company and Position"] && <li>{x["Company and Position"]}</li>}
                    {x["achievements"].map((x, i) => <li key={x + i.toString()}>{x}</li>)}
                    {/* <li></li> */}
                </ul>
            </div>
        </div>
    )
}

const Events = () => {

    const sectionHeader = {
        title: 'Achievements',
    };

    const elementsPerColumn = Math.ceil(data.length / 3);

    return (
        <>
            <Hero2 className="illustration-section-01" />

            <div className="container">
                <SectionHeader style={{ marginTop: "-30px" }} data={sectionHeader} className="center-content" />
                <div className='achievement-parent-container'>
                    {[...Array(3)].map((_, colIndex) => (
                        <div className="achievement-child-container" key={colIndex}>
                            {data.slice(colIndex * elementsPerColumn, (colIndex + 1) * elementsPerColumn).map((x, i) => (
                                <Card x={x} key={i} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Events
