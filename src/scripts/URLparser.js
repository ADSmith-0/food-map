const getURL = () => {
    let frags = document.URL.split("/");

    return `${frags[0]}//${frags[2]}`
}

export default {getURL};