import React from 'react';
import Header from './Header';

export default function Packages() {
    return (
        <>
         <Header />
        <div className="package-container">
            <div id="package">
                <h1 id="package1">Pick your Protection</h1>
            </div>
            <section>
                <div class="container-fluid">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4" style={{marginLeft: "10px", marginRight: "10px"}}>
                                <div class="card card_red text-center">
                                    <div class="title">
                                        <i class="fa fa-paper-plane" aria-hidden="true"></i>
                                        <h2>Bronze</h2>
                                    </div>
                                    <div class="price">
                                        <h4><sup>$</sup>75</h4>
                                    </div>
                                    <div class="option">
                                        <ul>
                                            <li><i class="fa fa-check" aria-hidden="true"></i>Exterior Wash</li>
                                            <li><i class="fa fa-check" aria-hidden="true"></i>Quick Wax</li>
                                            <li><i class="fa fa-check" aria-hidden="true"></i>Interior Vacuum</li>
                                        </ul>
                                    </div>
                                    <a href="/contact">Order Now</a>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="card card_violet text-center">
                                    <div class="title">
                                        <i class="fa fa-plane" aria-hidden="true"></i>
                                        <h2>Silver</h2>
                                    </div>
                                    <div class="price">
                                        <h4><sup>$</sup>150</h4>
                                    </div>
                                    <div class="option">
                                        <ul>
                                            <li><i class="fa fa-check" aria-hidden="true"></i>Exterior Wash</li>
                                            <li><i class="fa fa-check" aria-hidden="true"></i>Interior Detail</li>
                                            <li><i class="fa fa-check" aria-hidden="true"></i>3+ Month Hand Wax</li>
                                            <li><i class="fa fa-times" aria-hidden="true"></i>Plastic Trim Restoration</li>
                                        </ul>
                                    </div>
                                    <a href="#">Order Now</a>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="card card_three text-center">
                                    <div class="title">
                                        <i class="fa fa-rocket" aria-hidden="true"></i>
                                        <h2>Gold</h2>
                                    </div>
                                    <div class="price">
                                        <h4><sup>$</sup>300</h4>
                                    </div>
                                    <div class="option">
                                        <ul>
                                            <li><i class="fa fa-check" aria-hidden="true"></i>Exterior Detail</li>
                                            <li><i class="fa fa-check" aria-hidden="true"></i>Interior Detail</li>
                                            <li><i class="fa fa-check" aria-hidden="true"></i>Paint Decontamination</li>
                                            <li><i class="fa fa-times" aria-hidden="true"></i>Machine Polish</li>
                                            <li><i class="fa fa-times" aria-hidden="true"></i>6+ Month Machine Polish</li>
                                        </ul>
                                    </div>
                                    <a href="#">Order Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
    )
}
