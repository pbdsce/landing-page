import React, { useState } from 'react'
import Hero2 from '../sections/Hero2';

import SectionHeader from '../sections/partials/SectionHeader';
import { useForm } from 'react-hook-form';
import { supabase } from '../../utils/supabase';
import toast, { Toaster } from 'react-hot-toast';
import branches from "../../branches.json"

const Form = () => {

    const sectionHeader = {
        title: 'Recruitment Form 2023-2024',
    };

    const [mode, setMode] = useState(false)
    const [usnInput, setUsnInput] = useState("")
    const [regInput, setRegInput] = useState("")
    const [display, setDisplay] = useState(false)
    const [disabled,setDisabled] = useState(false)
    const usnRegex = /^1DS\w{7}$/
    const phoneRegex = /^\d{10}$/
    const admnRegex = /^23UGDS\w{4}$/

    const changeMode = (e) => {
        console.log(e.target.value)
        if (e.target.value === "1") setMode(false)
        else if (e.target.value === "Select year") {
            console.log("Select Year")
            setDisplay(false)   
        }
        else setMode(true)
        setDisplay(true)
    }

    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async (dataa) => {
        const { usn, whatsapp, branch, year } = dataa
        if (branch === "Select Branch") {
            toast.error("Enter Your Branch", { duration: 2500 })
            return
        }
        if (year === "Select year") {
            toast.error("Enter Your Year", { duration: 2500 })
            return
        }
        if (!phoneRegex.test(whatsapp)) {
            toast.error("Please enter a valid 10 digit phone no.", { duration: 3000 })
            return
        }
        if (dataa.year === '1') {
            if (!admnRegex.test(dataa.regno)) {
                toast.error("Please Enter correct Admission No.", { duration: 2500 })
                return
            }
        }
        else {
            if (!usnRegex.test(usn)) {
                toast.error("Please enter a valid USN", { duration: 3500 })
                return
            }

        }
        let savingToast = toast.loading("Saving Data");
        setDisabled(true)
        const data = await fetch("https://h1so0s7f9i.execute-api.us-east-1.amazonaws.com/Prod/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataa)
        })
        const res = await data.json()
        console.log(res)
        toast.dismiss(savingToast)
        if (!res) {
            toast.success(`Data Saved ! Good Luck for the Test`, { duration: 3000 });
        }
        else if (res?.code === "23505") {
            toast.error("Uh-oh!! It seems you have already registered before")
        }
        else
            toast.error(`Uh-Oh! ${res?.details}`, { duration: 3000 });
        setUsnInput("")
        setRegInput("")
        reset()
        setDisabled(false)
        setDisplay(false);

    }

    return (
        <>

            <Hero2 className="illustration-section-01" />

            <div className="container">
                <SectionHeader style={{ marginTop: "-30px" }} data={sectionHeader} className="center-content" />
                <Toaster position='top-right' />
                <form onSubmit={handleSubmit(onSubmit)} className='form'>

                    <div className='flex flex-col flex-center form-container'>
                    <div><span style = {{color:"red"}}>*</span> Fields are required</div>
                        <div className='flex flex-col' style={{ gap: "0.5rem", width: "100%" }}>
                            <label className='form-label' htmlFor="name">Full Name <span style = {{color:"red"}}>*</span></label>
                            <input placeholder='Enter your full name' required {...register("name")} type="text" className='input-box' />
                        </div>
                        <div className="flex " style={{ width: "100%", gap: "1rem" }}>
                            <div className='flex flex-col w-full' style={{ gap: "0.5rem" }}>
                                <label className='form-label' htmlFor="name">Branch <span style = {{color:"red"}}>*</span></label>
                                <select required {...register("branch")} className='input-box'>
                                    <option selected >Select Branch</option>
                                    {branches.map((branch, index) => <option key={index} className='option' value={branch.value}>{branch.name}</option>)}

                                </select>
                            </div>
                            <div className='flex flex-col w-full' style={{ gap: "0.5rem" }}>
                                <label className='form-label' htmlFor="name">Year <span style = {{color:"red"}}>*</span></label>
                                <select required {...register("year")} onChange={(e) => changeMode(e)} className='input-box'>
                                    <option selected >Select year</option>
                                    <option className='option' value="1">1</option>
                                    <option className='option' value="2">2</option>
                                    <option className='option' value="3">3</option>
                                </select>
                            </div>

                        </div>
                        {display && (<>
                            {mode === true ? (<>
                                <div className='flex flex-col' style={{ gap: "0.5rem", width: "100%" }}>
                                    <label className='form-label' htmlFor="usn">USN <span style = {{color:"red"}}>*</span></label>
                                    <input placeholder='Enter USN' required {...register("usn")} type="text" className='input-box' onChange={(e) => setUsnInput(e.target.value.toUpperCase())} value={usnInput} />
                                </div>
                            </>) : (<>
                                <div className='flex flex-col' style={{ gap: "0.5rem", width: "100%" }}>
                                    <label className='form-label' htmlFor="regno">Admission No. (For 1st Years) <span style = {{color:"red"}}>*</span></label>
                                    <input placeholder='Enter Admission No. (23UGDS...)' required {...register("regno")} type="text" className='input-box' onChange={(e) => setRegInput(e.target.value.toUpperCase())} value={regInput} />
                                </div>
                            </>)}</>)}
                        <div className='flex flex-col' style={{ gap: "0.5rem", width: "100%" }}>
                            <label className='form-label' htmlFor="email">Email <span style = {{color:"red"}}>*</span></label>
                            <input placeholder='Enter your email' required {...register("email")} type="email" className='input-box' />
                        </div>
                        <div className='flex flex-col' style={{ gap: "0.5rem", width: "100%" }}>
                            <label className='form-label' htmlFor="whatsapp">Whatsapp No. <span style = {{color:"red"}}>*</span></label>
                            <input placeholder='Enter your whatsapp number' required {...register("whatsapp")} type="tel" className='input-box' />
                        </div>
                        <div className='flex flex-col' style={{ gap: "0.5rem", width: "100%" }}>
                            <label className='form-label' htmlFor="whatsapp">Tell us something about yourself {"("}max 150 words{"}"} <span style = {{color:"red"}}>*</span></label>
                            <textarea placeholder='I am a....' rows={6} required {...register("bio")} type="tel" className='input-box' />
                        </div>
                        <button disabled = {disabled} type="submit" className='form-btn'>Submit</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Form