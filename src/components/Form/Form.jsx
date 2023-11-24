import React, { useState } from 'react'
import Hero2 from '../sections/Hero2';

import SectionHeader from '../sections/partials/SectionHeader';
import { useForm } from 'react-hook-form';
import {supabase} from '../../utils/supabase';
import toast , {Toaster} from 'react-hot-toast';

const Form = () => {

    const sectionHeader = {
        title: 'Recruitment Form 2023-2024',
    };

    const [mode, setMode] = useState(false)
    const [display, setDisplay] = useState(false)
    const [inputValue, setInputValue] = useState('');
    const changeMode = (e) => {
        console.log(e.target.value)
        if (e.target.value === "1") setMode(false)
        else setMode(true)
        setDisplay(true)
    }

    const { register, handleSubmit,reset } = useForm()

    const handleInputChange = (e) => {
        setInputValue(e.target.value.toUpperCase());
      };

    const onSubmit = async (dataa) => {
        let db,regValue,regField;
        if(dataa.year === '1'){
            db='First';
            regValue=dataa.regno;
            regField='RegNo'
        }
        else if(dataa.year === '2')
        {
            db='Second';
            regValue=dataa.usn;
            regField='USN';

        }
        else{
            db='Third'
            regValue=dataa.usn;
            regField='USN';
        }
        toast.loading("Saving Data",{duration:1500});
        const {data,error} = await supabase.from(`${db}_Years`).insert({[regField]:regValue,Name:dataa.name,Branch:dataa.branch,Bio:dataa.bio,Year:dataa.year,Email:dataa.email,WhatsApp_No:dataa.whatsapp});
        if(!error)
        toast.success(`Data Saved ! Good Luck for the Test`,{duration:3000});
        else
        toast.error(`Uh-Oh! ${error.details}`,{duration:3000});
        reset()
    }

    return (
        <>
        <Toaster/>
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
                                    <option className='option' value="CSE">CSE</option>
                                    <option className='option' value="CSD">CS(Cyber Security)</option>
                                    <option className='option' value="CSD">CSD</option>
                                    <option className='option' value="CSD">AIML</option>
                                    <option className='option' value="CSD">ISE</option>
                                    <option className='option' value="CSD">ECE</option>
                                    <option className='option' value="ME">ME</option>
                                    <option className='option' value="ISE">EE</option>
                                    <option className='option' value="CSD">ETE</option>
                                    <option className='option' value="ABC">Civil</option>
                                    <option className='option' value="CDE">Aero</option>
                                    <option className='option' value="XCE">XCE</option>
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
                                    <input placeholder='Enter USN' required {...register("usn")} type="text" className='input-box' onChange={handleInputChange} value={inputValue}/>
                                </div>
                            </>) : (<>
                                <div className='flex flex-col' style={{ gap: "0.5rem", width: "100%" }}>
                                    <label className='form-label' htmlFor="usn">Registeration No.</label>
                                    <input placeholder='Enter Reg. No.' required {...register("regno")} type="text" className='input-box' onChange={handleInputChange} value={inputValue} />
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