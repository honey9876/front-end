import { useState } from "react";
import BsContext from "./BsContext";


const BsState = (props) =>
{
    const [movie, changeMovie] = useState('')
    

    const [time, changeTime] = useState('')

    const [noOfSeat, changenoOfSeats] = useState({
        A1: "",
        A2: "",
        A3: "",
        A4: "",
        D1: "",
        D2: "",
    } )

    const [lastBookingDEatials, SetLastBookingDeatils] = useState(null)



    return (
        <BsContext.Provider value={{movie, changeMovie}}>{props.children}</BsContext.Provider>
    )
}


export default BsState;