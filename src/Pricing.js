import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {


    return (
        <div className='abc'>

            <div className="container xyz">
                <div className="card price">
                    <div className="card__info" style={{ backgroundImage: 'url(https://raw.githubusercontent.com/mohammadjarabah/codepen-assets/main/pens/xxXgjem/images/img1.jpg)' }}>
                        <h2 className="card__name">BASIC</h2>
                        <p className="card__price" style={{ color: 'var(--color05)' }}>$19.99 <span className="card__priceSpan">/month</span></p>
                    </div>
                    <div className="card__content" style={{ borderColor: 'var(--color05)' }}>
                        <div className="card__rows">
                            <p className="card__row">5GB Disk Space</p>
                            <p className="card__row">10 Domain Names</p>
                            <p className="card__row">5 E-Mail Address</p>
                            <p className="card__row">50GB Monthly Bandwidth</p>
                            <p className="card__row">Fully Support</p>
                        </div>
                        <Link className="card__link" style={{ backgroundColor: 'var(--color02)' }}>PURCHASE</Link>
                    </div>
                </div>
                <div className="card price">
                    <div className="card__info" style={{ backgroundImage: 'url(https://raw.githubusercontent.com/mohammadjarabah/codepen-assets/main/pens/xxXgjem/images/img2.jpg)' }}>
                        <h2 className="card__name">STANDARD</h2>
                        <p className="card__price" style={{ color: 'var(--color06)' }}>$29.99 <span className="card__priceSpan">/month</span></p>
                    </div>
                    <div className="card__content" style={{ borderColor: 'var(--color06)' }}>
                        <div className="card__rows">
                            <p className="card__row">10GB Disk Space</p>
                            <p className="card__row">20 Domain Names</p>
                            <p className="card__row">10 E-Mail Address</p>
                            <p className="card__row">100GB Monthly Bandwidth</p>
                            <p className="card__row">Fully Support</p>
                        </div>
                        <Link className="card__link" style={{ backgroundColor: 'var(--color06)' }}>PURCHASE</Link>
                    </div>
                </div>
                <div className="card price">
                    <div className="card__info" style={{ backgroundImage: 'url(https://raw.githubusercontent.com/mohammadjarabah/codepen-assets/main/pens/xxXgjem/images/img3.jpg)' }}>
                        <h2 className="card__name">PREMIUM</h2>
                        <p className="card__price" style={{ color: 'var(--color12)' }}>$49.99 <span className="card__priceSpan">/month</span></p>
                    </div>
                    <div className="card__content" style={{ borderColor: 'var(--color07)' }}>
                        <div className="card__rows">
                            <p className="card__row">50GB Disk Space</p>
                            <p className="card__row">50 Domain Names</p>
                            <p className="card__row">20 E-Mail Address</p>
                            <p className="card__row">300GB Monthly Bandwidth</p>
                            <p className="card__row">Fully Support</p>
                        </div>
                        <Link className="card__link" style={{ backgroundColor: 'var(--color04)' }}>PURCHASE</Link>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Pricing;
