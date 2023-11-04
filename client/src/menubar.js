function handleClick() {
    alert("Handling!");
    
}

function Menuitem({name}) {
    return (
        <button onClick={handleClick} className="menuItem">
            {name}
        </button>
    );
}

function Menudisplay() {
    return (
        <p className="menuDisplay">
            Waiting...
        </p>
    );
}

export default function Menubar() {
    return (
        <p className="menuBar">
            <Menudisplay/> <br/>
            <Menuitem name="Settings"/>
            <Menuitem name="Blog"/>
            <Menuitem name="Content "/>
        </p>
    );
}