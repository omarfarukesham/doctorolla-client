import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots, price } = service
    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>Try another date.</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <small>Price: $ {price}</small>
                <div className="card-actions justify-center">
                    <label
                        for="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn btn-sm btn-secondary text-white text-bold uppercase bg-secondary"
                        >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;