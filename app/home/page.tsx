import React from 'react';

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Welcome to My Website</h1>
            <div className="card-container">
                <div className="card">
                    <img src="card1.jpg" alt="Card 1" />
                    <h2>Card 1</h2>
                    <p>This is the first card.</p>
                </div>
                <div className="card">
                    <img src="card2.jpg" alt="Card 2" />
                    <h2>Card 2</h2>
                    <p>This is the second card.</p>
                </div>
                <div className="card">
                    <img src="card3.jpg" alt="Card 3" />
                    <h2>Card 3</h2>
                    <p>This is the third card.</p>
                </div>
                <div className="card">
                    <img src="card4.jpg" alt="Card 4" />
                    <h2>Card 4</h2>
                    <p>This is the fourth card.</p>
                </div>
                <div className="card">
                    <img src="card5.jpg" alt="Card 5" />
                    <h2>Card 5</h2>
                    <p>This is the fifth card.</p>
                </div>
            </div>
            <img src="profile-pic.jpg" alt="Profile Picture" className="profile-pic" />
        </div>
    );
};

export default HomePage;