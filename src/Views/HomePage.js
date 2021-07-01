
function HomePage() {

    return (
        <div>
            <div className="container">
                <div className="row mt-3">
                    <div className="col me-5 ms-5 pe-5 ps-5">
                        <h1 className="text-center"> Pricing</h1>
                        <p className="text-center">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with
                            default Bootstrap components and utilities with little customization.</p>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    Free
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">$0<span className="text-muted fw-lighter">/mo</span></h5>
                                    <div className="card-text">10 users included</div>
                                    <div className="card-text">2 GB of storage</div>
                                    <div className="card-text">Email support</div>
                                    <div className="card-text">Help center access</div>
                                    <button className="btn btn-outline-primary w-100 mt-2">Sign up for free</button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="col">
                                <div className="card">
                                    <div className="card-header">
                                        Pro
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">$15<span className="text-muted fw-lighter">/mo</span></h5>
                                        <div className="card-text">20 users included</div>
                                        <div className="card-text">10 GB of storage</div>
                                        <div className="card-text">Priority email support</div>
                                        <div className="card-text">Help center access</div>
                                        <button className="btn btn-primary w-100 mt-2">Sign up for free</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card ">
                                <div className="bg-primary card-header text-white">
                                    Enterprise
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">$29<span className="text-muted fw-lighter">/mo</span></h5>
                                    <div className="card-text">30 users included</div>
                                    <div className="card-text">15 GB of storage</div>
                                    <div className="card-text">Phone and email support</div>
                                    <div className="card-text">Help center access</div>
                                    <button className="btn btn-primary w-100 mt-2">Sign up for free</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage