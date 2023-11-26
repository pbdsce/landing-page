import React, { useState } from 'react'
import Hero2 from '../sections/Hero2';

import SectionHeader from '../sections/partials/SectionHeader';
import { useForm } from 'react-hook-form';
import {supabase} from '../../utils/supabase';
import toast , {Toaster} from 'react-hot-toast';
import branches from "../../branches.json"

const Form = () => {

    const sectionHeader = {
        title: 'Recruitment Form 2023-2024',
    };

    const [mode, setMode] = useState(false)
    const [usnInput,setUsnInput] = useState("")
    const [regInput, setRegInput] = useState("")
    const [display, setDisplay] = useState(false)
    const [inputValue, setInputValue] = useState('');
    const usnRegex = /^1DS\w{7}$/
    const phoneRegex = /^\d{10}$/
    const admnRegex = /^23UGDS\w{4}$/

    const changeMode = (e) => {
        console.log(e.target.value)
        if (e.target.value === "1") setMode(false)
        else setMode(true)
        setDisplay(true)
    }

    const { register, handleSubmit,reset } = useForm()

    const onSubmit = async (dataa) => {
        const {usn,whatsapp,branch, year} = dataa
        if(branch === "Select Branch") {
            toast.error("Enter Your Branch",{duration:2500})
            return
        }
        if(year === "Select year") {
            toast.error("Enter Your Year",{duration:2500})
            return
        }
        if(!phoneRegex.test(whatsapp)){
            toast.error("Please enter a valid 10 digit phone no.",{duration:3000})
            return
        }
        let db,regValue,regField;
        if(dataa.year === '1'){
            if(!admnRegex.test(dataa.regno)){
                toast.error("Please Enter correct Admission No.", {duration:2500})
                return
            }
            db='First';
            regValue=dataa.regno;
            regField='RegNo'
        }
        else if(dataa.year === '2')
        {
            if(!usnRegex.test(usn)){
                toast.error("Please enter a valid USN",{duration:2500})
                return
            }
            db='Second';
            regValue=dataa.usn;
            regField='USN';

        }
        else{
            if(!usnRegex.test(usn)){
                toast.error("Please enter a valid USN",{duration:3500})
                return
            }
            db='Third'
            regValue=dataa.usn;
            regField='USN';
        }
        let savingToast = toast.loading("Saving Data");
        const {data,error} = await supabase.from(`${db}_Years`).insert({[regField]:regValue,Name:dataa.name,Branch:dataa.branch,Bio:dataa.bio,Year:dataa.year,Email:dataa.email,WhatsApp_No:dataa.whatsapp});
        toast.dismiss(savingToast)
        if(!error){
            toast.success(`Data Saved ! Good Luck for the Test`,{duration:3000});
        }
        else if (error.code ==="23505"){
            toast.error("Uh-oh!! It seems you have already registered before")
        }
        else
        toast.error(`Uh-Oh! ${error.details}`,{duration:3000});
        reset()
        setUsnInput("")
        setRegInput("")
    }

    return (
        <>
        
            <Hero2 className="illustration-section-01" />

            <div className="container">
                <SectionHeader style={{ marginTop: "-30px" }} data={sectionHeader} className="center-content" />
                <Toaster position='top-right'/>
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
                                    {branches.map((branch, index)=> <option key = {index} className='option' value = {branch.value}>{branch.name}</option>)}
                                
                                </select>
                            </div>
                            <div className='flex flex-col w-full' style={{ gap: "0.5rem" }}>
                                <label className='form-label' htmlFor="name">Year</label>
                                <select required {...register("year")} onChange={(e) => changeMode(e)} className='input-box'>
                                    <option selected disabled>Select year</option>
                                    <option className='option' value="1">1</option>
                                    <option className='option' value="2">2</option>
                                    <option className='option' value="3">3</option>
                                </select>
                            </div>

                        </div>
                        {display && (<>
                            {mode === true ? (<>
                                <div className='flex flex-col' style={{ gap: "0.5rem", width: "100%" }}>
                                    <label className='form-label' htmlFor="usn">USN</label>
                                    <input placeholder='Enter USN' required {...register("usn")} type="text" className='input-box' onChange={(e)=>setUsnInput(e.target.value.toUpperCase())} value={usnInput}/>
                                </div>
                            </>) : (<>
                                <div className='flex flex-col' style={{ gap: "0.5rem", width: "100%" }}>
                                    <label className='form-label' htmlFor="regno">Admission No. (For 1st Years)</label>
                                    <input placeholder='Enter Admission No. (23UGDS...)' required {...register("regno")} type="text" className='input-box' onChange={(e)=>setRegInput(e.target.value.toUpperCase())} value={regInput} />
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