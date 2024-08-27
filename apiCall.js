  function getData() {
    
        const photoStreamUploadURL = `https://api2.eventfinity.co/api/v1/public/events/${eventID}/photostreams/${streamID}/photos`
        // Specify the request options
        const requestOptions = {
            method: 'GET',
            headers: {
            'Authorization': `Bearer CpaFZ2lS6HmSHoBbkmxJIg2kT6s01w3R2Mcsu03u`
            },
        };


        //Perform the POST request
        fetch(photoStreamUploadURL, requestOptions)
            .then(response => {
                if (!response.ok) {
                    console.log("Social Stream Upload Error: ", response)
                    throw new Error(`Error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Social Stream Upload Status: ', data);              
            })
            .catch(error => {
                console.error('Social Stream Upload Error: ', error);
        });     


  }