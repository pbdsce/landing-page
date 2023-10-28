import React from 'react'
import SectionHeader from '../sections/partials/SectionHeader'
import Hero2 from "../sections/Hero2";
import data from "../../core.json";
import "../../assets/scss/members/members.scss";
import {Link} from "react-router-dom"

const Members = () => {

    const sectionHeader = {
        title: 'Our Team',
    };

    return (
        <>
            <Hero2 className="illustration-section-01" />

            <div className="container">
                <SectionHeader style={{ marginTop: "-30px" }} data={sectionHeader} className="center-content" />
                <div className='members-parent-container'>
                    {data.map((item,key)=>(
                        <Link to="https://pointblank.vercel.app/kitarp29" className="members-container" key={key}>
                        <div className='members-info-container'>
                            <img src={item.img} alt="logo" className='members-img'/>
                            <h2>{item.name}</h2>
                            <h3>{item.role}</h3>
                        </div>
                    </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Members