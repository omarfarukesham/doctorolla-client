import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user?.email}`,{
                method: 'GET',
                headers: {
                    'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res =>{ 
                    if(res.status === 401 || res.status === 403){
                        navigate('/')
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                    }
                    return res.json()
                })
                .then(data => setAppointments(data));
        }
    }, [user])
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Slots</th>
                        <th>Treatment</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.map((a, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{a.patientName}</td>
                            <td>{a.date}</td>
                            <td>{a.slot}</td>
                            <td>{a.treatment}</td>
                            <td>
                                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                    {(a.price && a.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        {/* <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p> */}
                                    </div>}
                                </td>
                        </tr>)
                    }





                </tbody>
            </table>
        </div>
    );
};

export default MyAppointment;