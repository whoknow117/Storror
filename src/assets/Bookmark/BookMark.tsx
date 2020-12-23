import React from 'react'


export type BookMarkType = {

}

const BookMark:React.FC<BookMarkType> = () => {
    const electricStyles = {
        width: '34px',
    }
    return <div style={electricStyles}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
            <g fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 2 L26 2 26 30 16 20 6 30 Z" />
            </g>
        </svg>
     </div>
}

export default BookMark;