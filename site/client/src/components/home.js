import React from 'react';

const Home = () => {
    return (
        <div id='home-div' className='container'>
            <div className='accordion' id='accordion-div'>
                <div className='accordion-item'>
                    <h5 className='accordion-header' id='accordion-one-header'>
                        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#accordion-one' aria-expanded='true' aria-controls='accordion-one'>
                            What is this site?
                        </button>
                    </h5>
                    <div id='accordion-one' className='accordion-collapse collapse show' aria-labelledby='accordion-one-header' data-bs-parent='#accordion-div'>
                        <div className='accordion-body'>
                            <strong>We are aiming to create a useful tool for improving ease of analysis of NBA players and their trade value from specifically a fantasy basketball standpoint.</strong>
                        </div>
                    </div>
                </div>
                <div className='accordion-item'>
                    <h5 className='accordion-header' id='accordion-two-header'>
                        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#accordion-two' aria-expanded='false' aria-controls='accordion-two'>
                            Where is the data coming from?
                        </button>
                    </h5>
                    <div id='accordion-two' className='accordion-collapse collapse' aria-labelledby='accordion-two-header' data-bs-parent='#accordion-div'>
                        <div className='accordion-body'>
                            <strong>All of our data is carefully collected from the NBA API and has been occasionally cross-checked against <a href='https://www.espn.com/fantasy/'>ESPN's data</a>.</strong>
                        </div>
                    </div>
                </div>
                <div className='accordion-item'>
                    <h5 className='accordion-header' id='accordion-three-header'>
                        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#accordion-three' aria-expanded='false' aria-controls='accordion-three'>
                            Will there be additional features added?
                        </button>
                    </h5>
                    <div id='accordion-three' className='accordion-collapse collapse' aria-labelledby='accordion-three-header' data-bs-parent='#accordion-div'>
                        <div className='accordion-body'>
                            <strong>Though we have created a similar tool in the past, our decision to expand and build this site was loosely inspired by <a href='https://basketballmonster.com/'>Basketball Monster</a>.</strong>
                            <br />
                            <strong>We plan on at least including of the useful features from that site along with an added focus on ease of use for busy fantasy players without hours to spend daily on team management.</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;