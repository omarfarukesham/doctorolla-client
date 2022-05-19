import React, { useState } from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const [bookings, setBooking] = useState([])
    const { _id, name, slots, price } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formateDate = format(date, 'PP')


    //sending data to rest api  start here.....................................
   
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value
       
        const tretmentId = _id
        const treatment = name
        const date = formateDate
        const patient = user.displayName
        const email = user.email
        const phone = event.target.phone.value;
        const info = { tretmentId, treatment, date, slot, patient, email, phone, price}
        console.log(info)
        fetch('http://localhost:5000/appointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)

        })
            .then(res => res.json())
            .then(data => {
                // const newUser = [...bookings, result]
                // setBooking(newUser)
               if(data.success){
                   toast(`Your appointment has final on , ${formateDate}, slots ${slot}`)
                  
               }else{
                   toast(`Sorry have an existing slot on that Day on ${formateDate} .....`)
              
               }
               setTreatment(null);
            })
 //sending data to rest api  END here.....................................

    }


    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option key={slot._id} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" value={user?.displayName} disabled className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" value={user?.email} disabled className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;