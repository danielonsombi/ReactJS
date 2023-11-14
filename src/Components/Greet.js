import react from 'react';
    // function Greet()
    // {
    //     return <h1>Hello Daniel</h1>
    // }

// const Greet = (props) =>  {
//     console.log(props)
//     return (
//         <div>
//             <h1>Hello {props.name} a.k.a {props.heroName}</h1>
//             {props.children}
//         </div>
//     ) 
// }

//Can destructure the above code within:
//1. parenthesis as:
// const Greet = ({name, heroName, children}) =>  {
//     return (
//         <div>
//             <h1>Hello {name} a.k.a {heroName}</h1>
//             {children}
//         </div>
//     ) 
// }

//2. within Function body as:
const Greet = (props) =>  {
    const {name, heroName, children} = props
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            {children}
        </div>
    ) 
}

//export const Greet = () =>  <h1>Hello Daniel Onsombi</h1>

export default Greet;