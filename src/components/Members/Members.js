import React from 'react'
import SectionHeader from '../sections/partials/SectionHeader'
import Hero2 from "../sections/Hero2";
import data from "../../core.json";
import "../../assets/scss/members/members.scss";
import { Link } from "react-router-dom"

export const Card = ({img, name, role}) => {
    return (
        <div className="members-container">
            <img src={img} alt="logo" className='members-img' />
            <div className='members-img-overlay'></div>
            <div className='members-info-container'>
                <h2>{name}</h2>
                <h3>{role}</h3>
            </div>
        </div>
    )
}

const Members = () => {

    const sectionHeader = {
        title: 'Our Team',
    };

    return (
        <>
            <Hero2 className="illustration-section-01" />

            <div className="container">
                <SectionHeader style={{ marginTop: "-30px" }} data={sectionHeader} className="center-content" />
                <h3 style = {{textAlign:"center"}}>Leads</h3>
                <div className='members-parent-container'>
                    {data.filter((x)=>x.role==="Lead").map((item, key) => (
                        <Card img={item.img} key={key} name={item.name} role={item.role} />
                    ))}
                </div>
                {/* <h3 style = {{textAlign:"center"}}>Members</h3>
                <div className='members-parent-container'>
                    {data.filter((x)=>x.role==="Member").map((item, key) => (
                        <Card img={item.img} key={key} name={item.name} role={item.role} />
                    ))}
                </div> */}
            </div>
        </>
    )
}

export default Members