function Greet(props){
    /*const Curtime=new Date().getHours();
    let timeofdate;
    if(Curtime<12){
        timeofdate="Morning";
    }
    else if(Curtime<17){
        timeofdate="Afternoon";
    }
    else{
        timeofdate="Evening";
    }
    return(
         <h3>Good {timeofdate},{props.name}</h3>
    );*/
    return <h3>Good {props.time},{props.name}</h3>
}
export default Greet;