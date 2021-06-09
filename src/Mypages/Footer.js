// import React from 'react'

// const Footer = () => {
//     let footerStyle ={
//         position: "relative",


//     }

//     }
//     return (
//         <footer className="bg-dark text-center text-light py-3" style={footerStyle}>
//             <p>Copyright © by learningengineer.com | 2021</p>
//         </footer>
//     )
// }

// export default Footer
import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "inherit",
        top: "50vh",
        width: "100%",
    }
    return (
        <footer className="bg-dark text-light py-3 pt-3 foot" style={footerStyle}>
            <p className="text-center">
                Copyright &copy; MyTodoslist.com
            </p>
        </footer>
    )
}
