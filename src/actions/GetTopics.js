
import axios from 'axios';

export default function get_topics(search_input) {
    // return axios.get("http://localhost:8000/get_topics?input="+search_input).then(response => response)
    //     .catch(error => error)
    return axios.get("https://gokulraviteja.pythonanywhere.com/get_topics?input="+search_input).then(response => response)
        .catch(error => error)
}

