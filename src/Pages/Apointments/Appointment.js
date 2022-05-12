import React, { useState } from 'react';
import Allservices from './Allservices';
import AppointmentBanner from './AppointmentBanner';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    // const [selected, setSelected] = useState(new Date())
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <Allservices date={date}></Allservices>
        </div>
    );
};

export default Appointment;