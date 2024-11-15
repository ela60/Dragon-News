import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNavbar from '../components/layout-component/LeftNavbar';
import RightNavbar from '../components/layout-component/RightNavbar';
import CategoryNews from '../pages/CategoryNews';

const HomeLayouts = () => {
    return (
        <div className='font-poppins'>
            <header>
                <Header />
                <section className='w-11/12 mx-auto'>
                    <LatestNews/>
                </section>
              
            </header>
            <nav>
            <section className='w-11/12 mx-auto py-2'>
                    <Navbar></Navbar>
                </section>
            </nav>
            <main className='w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3'>
                <aside className='left col-span-3'><LeftNavbar/> </aside>
                {/* <section className='col-span-6'><CategoryNews/></section> */}
                
                <aside className='col-span-3'><RightNavbar/></aside>
            </main>
        </div>
    );
};

export default HomeLayouts;