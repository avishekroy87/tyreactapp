import React from   'react';

// Code for Factorial component
const Factorial: React.FC = () => {
    const factNum = React.useRef<HTMLInputElement>(null);
    const [factdata, setFactdata] = React.useState<string>('');

    const calcFact = () => {
        if(factNum.current){
            let num: number = parseInt(factNum.current.value);
            let fact = 1;
            for(let i = 1; i <= num; i++){
                fact = fact * i;
            }
            setFactdata(`Factorial of ${num} is ${fact}`);
    }
    }
    return(
        <>
        {factdata && <h1>{factdata}</h1>}
            Number:<input type="number" placeholder="Enter a number" ref={factNum}/>
            <button onClick={calcFact}>Calculate</button>
        </>
    )
}

export default Factorial;