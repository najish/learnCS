function loadTextFile(url) {
    fetch(url).then(response => {
        if(!response.ok) {
            throw new Error("Status code : Not Okay");
        }
        return response.text();
    }).then(text => {
        // addd text to the element
    })
}