import React, { useEffect, useState } from "react";

const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {

        try{

            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[1]);
            setData(actualData.statewise[1]);


        }catch(err){

        console.log(err);

        }


    } 


    useEffect(() => {

        getCovidData();

    },[]);

    return(
        <>
        <section>
        <h1>Live</h1>
        <h2>Covid CORONAVIRUS Tracker</h2>

        <ul>
            <li>
                <div className="MyCard"> </div>
     <div className="Main_Card"> <p><span>OUR</span>Country</p> </div>
     <div className="Inner_Card"> INDIA </div>
            </li>

            <li>
                <div className="MyCard"> </div>
     <div className="Main_Card"> <p><span>Total</span>Recovered</p> </div>
     <div className="Inner_Card"> {data.recovered} </div>
            </li>

            <li>
                <div className="MyCard"> </div>
     <div className="Main_Card"> <p><span>Total</span>Confirmed</p> </div>
     <div className="Inner_Card">{data.confirmed} </div>
            </li>

            <li>
                <div className="MyCard"> </div>
     <div className="Main_Card"> <p><span>Total</span>Deaths</p> </div>
     <div className="Inner_Card"> {data.deaths} </div>
            </li>

            <li>
                <div className="MyCard"> </div>
     <div className="Main_Card"> <p><span>Total</span>Active</p> </div>
     <div className="Inner_Card"> {data.active}</div>
            </li>

            <li>
                <div className="MyCard"> </div>
     <div className="Main_Card"> <p><span>Last</span>Updated</p> </div>
     <div className="Inner_Card"> {data.lastupdatedtime} </div>
            </li>

        </ul>
        </section>
        </>
    )
}

export default Covid;