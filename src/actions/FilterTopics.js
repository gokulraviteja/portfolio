 
export default function filter_topics(topics , input){
    var filtered=[]
    
    topics.forEach(element => {
        if(element.name.toLowerCase().includes(input.toLowerCase())){
            filtered.push(element)
        }
    });
    
    return filtered
}