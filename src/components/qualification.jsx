import React from 'react';
import './qualification.css';

const Qualification = () => {
    return (
        <>
        <h1>Qualification</h1>
        <div className="timeline">
            <ul className="timeline-list">
                <li className="timeline-item">
                    <div className="timeline-content">
                        <h2>Vedic International School</h2>
                        <h3>2017-2019</h3>
                        <p>Vedic Group of Institutions was founded and established in the year 2008. It currently has two campuses, providing the best education to the society. One is at Sambalpur, Odisha and the other at Raigarh, Chhattisgarh. Vedic is also an ISO 9001-2015 certified Organization.</p>
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-content">
                        <h2>Rajendra University</h2>
                        <h3>2019-2022</h3>
                        <p>Rajendra University, Balangir functioning from 1944 as the premier University of Western Odisha has, over the years, grown to be a renowned University of Higher Education with thirteen Post-Graduate Departments in Arts, Science and Commerce, including M.Phil. courses in seven of them. The University has been catering to the ever-increasing needs and aspirations of a huge population of the state spread across six to eight of its largely backward districts.</p>
                    </div>
                </li>
                <li className="timeline-item">
                    <div className="timeline-content">
                        <h2>GIET University</h2>
                        <h3>2023-2025</h3>
                        <p>GIET, best University in Eastern India for campus placement. GIET University, Gunupur (formerly known as Gandhi Institute of Engineering and Technology) was established by “Vidya Bharati Educational Trust,” Gunupur, Odisha, India in the year 1997. Since inception, the Trust promotes Technical Education in India with a motto of providing Quality Education in a highly disciplined and conducive environment with International Standards.</p>
                    </div>
                </li>
            </ul>
        </div>
        </>
    );
}

export default Qualification;
