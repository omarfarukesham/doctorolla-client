import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';


const Allservices = ({ date }) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null);
    const formateDate = format(date, 'PP')
//`http://localhost:5000/available?date=${formateDate}` "http://localhost:5000/services"
    useEffect(() => {
        fetch(`http://localhost:5000/available?date=${formateDate}`)
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])


    return (
        <div>
            <p className='text-center text-2xl text-secondary py-3 text-bold'>You picked the date :: {format(date, 'PP')}</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5'>
                {
                    services.map(service => <Service 
                         key={service._id} 
                         service={service}
                         setTreatment={setTreatment}
                         ></Service>)
                }
            </div>

            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
            ></BookingModal>}
        </div>
    );
};

export default Allservices;