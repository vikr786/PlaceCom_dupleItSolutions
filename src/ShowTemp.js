import React from 'react'

function ShowTemp({text}) {
    return (
        <div class="container my-5">

            <div class="row mb-2">
                <div class="col-md-4">
                    <div class="card">

                        <div class="card-body">
                            <h5 class="card-title"></h5>
                            <img src="https://cdn-icons-png.flaticon.com/512/5300/5300518.png" width={200} height={200} />
                            <h3 class="card-text">{text.description}</h3>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title"></h5>
                            <h1 class="card-text">{text.temp}<span>&#176;</span></h1>
                            <p>Min: {text.temp_min}<span>°</span></p>
                            <p>Max: {text.temp_max}<span>&#176;</span></p>
                        </div>
                    </div>
                </div>
            </div>


            <div class="row mb-2">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Humidity</h5>
                            <p class="card-text">{text.humidity}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Sunrise</h5>
                            <p class="card-text">{text.sunrise}</p>
                        </div>
                    </div>
                </div>
            </div>


            <div class="row mb-2">
                <div class="col-md-4">
                    <div class="card">

                        <div class="card-body">
                            <h5 class="card-title">Sunset</h5>
                            <p class="card-text">{text.sunset}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Country</h5>
                            <p class="card-text">{text.country}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ShowTemp;