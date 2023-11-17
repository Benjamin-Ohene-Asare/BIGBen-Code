      // Function to decode and retrieve query parameters from the URL
      function getQueryParameter(parameterName) {
        // Get the entire query string part of the URL (the part after the "?")
        const queryString = window.location.search;
    
        // Create a URLSearchParams object to work with query parameters
        const urlParams = new URLSearchParams(queryString);
    
        // Retrieve and return the value of the specified query parameter
        return urlParams.get(parameterName);
    }
    
    // Retrieve the encoded package data from the URL
    const encondedDataPackage = getQueryParameter('package');
    
    // Check if encoded package data exists in the URL
    if (encondedDataPackage) {
        try {
            // Decode and parse the package data from base64-encoded JSON
            const packageData = JSON.parse(atob(encondedDataPackage));
    
            // Create a new <div> element to display package information
            const createDivContainer = document.createElement("div");
            createDivContainer.classList.add("createDivContainer")
    
            const selectedPackage = document.querySelector(".selectedPackage")
            // Populate the <div> with HTML content based on the package data
            createDivContainer.innerHTML = `
                <h2>Selected Package: ${packageData.name}</h2>
              
                <h3>Price: ${packageData.price}</h3> <!-- Note: Should be packageData.price -->
               
                <ul>
                    ${packageData.details.map(detail => `<li>${detail}`)}
                </ul>
            `;
    
            // Append the <div> container to the body of the web page
            selectedPackage.appendChild(createDivContainer);
        } catch (error) {
            // Handle errors that might occur during decoding or parsing
            console.error("Error decoding or parsing package data:", error);
        }
    } else {
        // Log an error message if package data was not found in the URL
        console.error('Package data not found in the URL.');
    }
    
    