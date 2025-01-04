 import { useState, useEffect, useRef } from "react";
// export default function App() {
//     const [day, setDay] = useState("Monday");
//     const prevDay = usePrevious(day);
//     const getNextDay = () => {
//         if (day === "Monday") {
//             setDay("Tuesday")
//         } else if (day === "Tuesday") {
//             setDay("Wednesday")
//         } else if (day === "Wednesday") {
//             setDay("Thursday")
//         } else if (day === "Thursday") {
//             setDay("Friday")
//         } else if (day === "Friday") {
//             setDay("Monday")
//         }
//     }
//     return (
//         <div style={{padding: "40px"}}>
//             <h1>
//                 Today is: {day}<br />
//                 {
//                     prevDay && (
//                         <span>Previous work day was: {prevDay}</span>
//                     )
//                 }
//             </h1>
//             <button onClick={getNextDay}>
//                 Get next day
//             </button>
//         </div>
//     );
// }
// function usePrevious(val) {
//     const ref = useRef()
//     useEffect(() => {
//         ref.current = val
//     },[val])
//     return ref.current
// }
//
//
// const Delete = ({children, backgroundcolor}) => {
//     return <button style={{ backgroundcolor }} >{children}</button>
// }
//
//
// const Alert = ({children}) => {
//     return (
//         <>
//             <div className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"></div>
//             <div className="alert">{children}</div>
//         </>
//     )
// }
//
// const Deletebutton = () => {
//     return <Delete backgroundcolor="red">Delete</Delete>
// }
//
// const  App = () => {
//     return(
//         <>
//             <h1>Hi There</h1>
//             <Alert>
//                 <h3>Are you sure?</h3>
//                 <p>Please check once our latest</p>
//             </Alert>
//             <Deletebutton />
//         </>
//     )
// }
// export default  App

// const Button = ({ children, ...rest }) => (
//     <button onClick={() => console.log("ButtonClick")} {...rest}>
//         {children}
//     </button>
// );

// const withClick = (Component) => {
//     const handleClick = () => {
//         console.log("WithClick");
//     };

//     return (props) => {
//         return <Component onClick={handleClick} {...props} />;
//     };
// };

// const MyButton = withClick(Button);

export default function App() {
    const [userName, setUserName] = useState<string>('');
    const uname = useRef<HTMLInputElement>(null);

   
    return(
        <div>
            {userName && <h1>Hello {userName}</h1>}
            <input type="text" placeholder="Enter your name" ref={uname}/>
            <button onClick={() => setUserName(uname.current?.value || '')}>Submit</button>
        </div>
    )
}
