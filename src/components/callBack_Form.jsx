import { TextField } from "@mui/material";
import { useState } from "react";
import { MuiTelInput } from 'mui-tel-input'

const CallBackForm = ( ) => {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [grade, setGrade] = useState(null);
    const [course, setCourse] = useState(null);
    const [state, setState] = useState(null);
    const [preferredCourse, SetPreferredCourse] = useState(null);
    return(<div className="grid grid-cols-2 w-175 gap-2">
        <div className="flex flex-col gap-2">
            <label htmlFor="name">Student's Full Name</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} name="name" id="name" className="w-70 h-14 rounded border border-gray-300 selection:border-[#1976D2] p-3 bg-white"/>
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="contact">Mobile Number</label>
            <MuiTelInput value={contact} onChange={ e => setContact(e)} name="contact" id="contact" className="w-70 bg-white"/>

        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="class">Class</label>
            <select name="class" id="class" value={grade} onChange={e => setGrade(e.target.value)} className="w-70 h-14 rounded border border-gray-300 selection:border-[#1976D2] p-3 bg-white">
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="12+">12+</option>
            </select>
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="goal">Goals</label>
            <select name="goal" id="goal" value={course} onChange={e => setCourse(e.target.value)} className="w-70 h-14 rounded border border-gray-300 selection:border-[#1976D2] p-3 bg-white">
                <option value="NEET">NEET</option>
                <option value="JEE">JEE</option>
                <option value="CUET">CUET</option>
            </select>
        </div>
        <div className="flex flex-col gap-2">
            <label htmlFor="courses">Preferred Courses</label>
            <select name="courses" id="courses" value={preferredCourse} onChange={e => SetPreferredCourse(e.target.value)} className="w-70 h-14 rounded border border-gray-300 selection:border-[#1976D2] p-3 bg-white">
                <option value="Online Courses">Online Courses</option>
                <option value="Classroom Courses">Classroom Courses</option>
                <option value="Online test Series">Online test Series</option>
            </select>
        </div>
        <div className="flex flex-col gap-2">
        <label htmlFor="state">Choose State</label>
        <select name="state" id="state" value={state} onChange={e => setState(e.target.value)} className="w-70 h-14 rounded border border-gray-300 selection:border-[#1976D2] p-3 bg-white">
            <option value="">-- Select State --</option>
            <option value="andhra-pradesh">Andhra Pradesh</option>
            <option value="arunachal-pradesh">Arunachal Pradesh</option>
            <option value="assam">Assam</option>
            <option value="bihar">Bihar</option>
            <option value="chhattisgarh">Chhattisgarh</option>
            <option value="goa">Goa</option>
            <option value="gujarat">Gujarat</option>
            <option value="haryana">Haryana</option>
            <option value="himachal-pradesh">Himachal Pradesh</option>
            <option value="jharkhand">Jharkhand</option>
            <option value="karnataka">Karnataka</option>
            <option value="kerala">Kerala</option>
            <option value="madhya-pradesh">Madhya Pradesh</option>
            <option value="maharashtra">Maharashtra</option>
            <option value="manipur">Manipur</option>
            <option value="meghalaya">Meghalaya</option>
            <option value="mizoram">Mizoram</option>
            <option value="nagaland">Nagaland</option>
            <option value="odisha">Odisha</option>
            <option value="punjab">Punjab</option>
            <option value="rajasthan">Rajasthan</option>
            <option value="sikkim">Sikkim</option>
            <option value="tamil-nadu">Tamil Nadu</option>
            <option value="telangana">Telangana</option>
            <option value="tripura">Tripura</option>
            <option value="uttar-pradesh">Uttar Pradesh</option>
            <option value="uttarakhand">Uttarakhand</option>
            <option value="west-bengal">West Bengal</option>
            <option value="andaman-nicobar">Andaman and Nicobar Islands</option>
            <option value="chandigarh">Chandigarh</option>
            <option value="dadra-nagar-haveli">Dadra and Nagar Haveli and Daman and Diu</option>
            <option value="delhi">Delhi</option>
            <option value="jammu-kashmir">Jammu and Kashmir</option>
            <option value="ladakh">Ladakh</option>
            <option value="lakshadweep">Lakshadweep</option>
            <option value="puducherry">Puducherry</option>
        </select>
        </div>
    </div>)

}

export default CallBackForm;