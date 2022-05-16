import { format } from 'date-fns';
import React, {useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';


const Allservices = ({ date }) => {
    const [treatment, setTreatment] = useState(null);
    const formateDate = format(date, 'PP')

    //using react query for loading appointment data..................................
    const { data: services, isLoading } = useQuery('available', () => fetch(`http://localhost:5000/available?date=${formateDate}`).then(res => res.json())
    )

    //react need loading time here is the loader...................................
    if (isLoading) {
        return <Loading></Loading>
    }

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