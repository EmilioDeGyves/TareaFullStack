const Notification = ({mensaje}) => {
    if (mensaje === null) {
        return null
    }

    return (
        <div>
            <h1>{mensaje}</h1>
            
        </div>
    )
} 

export default Notification