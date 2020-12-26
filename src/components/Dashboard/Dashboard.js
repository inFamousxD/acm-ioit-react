import React from 'react';

import TitleAnimation from './TitleAnimation/TitleAnimation';
import Contact from './Contact/Contact';
import AboutIOIT from './AboutIOIT/AboutIOIT';

const Dashboard = () => {
    return (
        <div>
            <TitleAnimation />
            <AboutIOIT />
            <Contact />
        </div>
    )
}

export default Dashboard
