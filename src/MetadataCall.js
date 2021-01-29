import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

function MetadataCall() {

    const [someData, setSomeData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      axios.get("https://postgrest-api.mainnet.dandelion.link/rpc/get_metadatum")
      .then(function(response){
        setSomeData(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 500)
      });
    });

    return (
        <div class="row">
            <div class="row row-cols-3">
              
                {someData.map(datum => 
                  <div class="card m-1">
                    <div class="card-body">
                      <h1 style={{ color: "red" }}>Key: {datum.metadatum}</h1>
                    </div>
                  </div>  
                )
                }
            
            </div>
        </div>



    )
}

export default MetadataCall

// <h1 style={{ color: "green" }}>{loading ? "Loading" : someData}</h1>
// {someData.map(datum => <h1 style={{ color: "red" }}>Key: {datum.metadatum}</h1> )}


