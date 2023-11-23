import React, { useState } from 'react'
import Hero2 from '../sections/Hero2';

import SectionHeader from '../sections/partials/SectionHeader';
import { useForm } from 'react-hook-form';

const Form = () => {

    const sectionHeader = {
        title: 'Recruitment Form 2023-2024',
    };

    const [mode, setMode] = useState(false)
    const [display, setDisplay] = useState(false)
    const changeMode = (e) => {
        console.log(e.target.value)
        if (e.target.value === "1") setMode(false)
        else setMode(true)
        setDisplay(true)
    }

    const { register, handleSubmit,reset } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        reset()
    }

    return (
        <>
            <Hero2 className="illustration-section-01" />

            <div className="container">
                <SectionHeader style={{ marginTop: "-30px" }} data={sectionHeader} className="center-content" />
                <form onSubmit={handleSubmit(onSubmit)} className='form'>
                    <div className='flex flex-col flex-center form-container'>

                        <div className='flex flex-col' style={{ gap: "0.5rem", width: "100%" }}>
                            <label className='form-label' htmlFor="name">Full Name</label>
                            <input placeholder='Enter your full name' required {...register("name")} type="text" className='input-box' />
                        </div>
                        <div className="flex " style={{ width:"100%", gap: "1rem" }}>
                            <div className='flex flex-col w-full' style={{ gap: "0.5rem" }}>
                                <label className='form-label' htmlFor="name">Branch</label>
                                <select required {...register("branch")} className='input-box'>
                                    <option selected disabled>Select Branch</option>
                                    <option value="CSE">CSE</option>
                                    <option value="CSD">CSD</option>
                                    <option value="ME">ME</option>
                                    <option value="ISE">ISE</option>
                                    <option value="ABC">ABC</option>
                                    <option value="CDE">CDE</option>
                                    <option value="XCE">XCE</option>
                                </select>
                            </div>
                            <div className='flex flex-col w-full' style={{ gap: "0.5rem" }}>
                                <label className='form-label' htmlFor="name">Year</label>
                                <select required {...register("year")} onChange={(e) => changeMode(e)} className='input-box'>
                                    <option selected disabled>Select year</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>

                        </div>
                        {display && (<>
                            {mode === true ? (<>
                                <div className='flex flex-col' style={{ gap: "0.5rem", width: "100%" }}>
                                    <label className='form-label' htmlFor="usn">USN</label>
                                    <input placeholder='Enter USN' required {...register("usn")} type="text" className='input-box' />
                                </div>
                            </>) : (<>
                                <div className='flex flex-col' style={{ gap: "0.5rem", width: "100%" }}>
                                    <label className='form-label' htmlFor="usn">Registeration No.</label>
                                    <input placeholder='Enter Reg. No.' required {...register("regno")} type="text" className='input-box' />
                                </div>
                            </>)}</>)}
                        <div className='flex flex-col' style={{ gap: "0.5rem", width: "100%" }}>
                            <label className='form-label' htmlFor="email">Email</label>
                            <input placeholder='Enter your email' required {...register("email")} type="email" className='input-box' />
                        </div>
                        <div className='flex flex-col' style={{ gap: "0.5rem", width: "100%" }}>
                            <label className='form-label' htmlFor="whatsapp">Whatsapp No.</label>
                            <input placeholder='Enter your whatsapp number' required {...register("whatsapp")} type="tel" className='input-box' />
                        </div>
                        <div className='flex flex-col' style={{ gap: "0.5rem", width: "100%" }}>
                            <label className='form-label' htmlFor="whatsapp">Tell us something about yourself {"("}max 100 words{"}"}</label>
                            <textarea placeholder='I am a....' rows={6} required {...register("bio")} type="tel" className='input-box' />
                        </div>
                        <button type = "submit" className='form-btn'>Submit</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Form