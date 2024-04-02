import propTypes from "prop-types";

function Btn({classes = "bg-gray-500 p-2 m-2", text="Button", event = () => {console.log("Hola")}}) {
    return (
        <button onClick={event} className={"text-white " + classes}>{text}</button>
    );
}


Btn.propTypes = {
    classes: propTypes.string,
    text: propTypes.string,
    event: propTypes.func
}

export default Btn