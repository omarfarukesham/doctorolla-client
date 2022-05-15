import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                {/* <!-- Page content here --> */}
                <h1 className='text-2xl text-purple-500 text-bold'>Welcome to my Dashboard</h1>
                <Outlet></Outlet>
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content mb-2">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/Dashboard">My Appointment</Link></li>
                    <li><Link to='/Dashboard/MyHistory'>My History</Link></li>
                    <li><Link to='/Dashboard/MyReview'>My Review</Link></li>
                </ul>

            </div>
        </div>

    );
};

export default Dashboard;