// function Heading(){
//     return(
//         <h1>
//             My react app
//         </h1>
//     )
// }

function Body(props){
    return(
        <div className={props.darkMode ? "dark body" : "body"}>
            <h1>
                Fun facts about React
            </h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

export default Body
