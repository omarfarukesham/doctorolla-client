
import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png'

const ApointmentBanner = ({ date, setDate }) => {
    return (
        <>
            <div class="hero my-20">
                <div class="hero-content flex-col lg:flex-row-reverse gap-10">
                    <img src={chair} class="max-w-sm w-full rounded-lg shadow-2xl" alt='dentist Chair' />
                    <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    </div>
                </div>
            </div>


        </>

    );
};

export default ApointmentBanner;