
export default function filter_cheats(cheats , input){
    var filtered=[]

    cheats.forEach(element => {
        if(element.desc.toLowerCase().includes(input.toLowerCase())){
            filtered.push(element)
        }
    });
    
    return filtered
}