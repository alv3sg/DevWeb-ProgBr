import React from 'react'


function Menu(props){
    const listLink = props.links.map((link, index) => <li key={index}>{link}</li>)
    return (        
        <ul className='menu'>
            {listLink}
        </ul>
    )
}

export default Menu