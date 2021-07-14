

import axios from 'axios';

export default function get_cheats(cheatid , search_input) {
    // return axios.get("http://localhost:8000/get_cheats?key="+cheatid+"&input="+search_input).then(response => response)
    //     .catch(error => error)
        
    return axios.get("https://gokulraviteja.pythonanywhere.com/get_cheats?key="+cheatid+"&input="+search_input).then(response => response)
        .catch(error => error)
}
