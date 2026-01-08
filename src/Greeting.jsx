function Greeting(props){
    return <h2>Welcome {props.name}</h2>
}
function Greeting1({name}){
    return<h2>Welcome {name}</h2>
}
function Student({name,course}){
    return(
        <p>{name} is learning {course}</p>
    );
}
export {Greeting1,Student};
export default Greeting;