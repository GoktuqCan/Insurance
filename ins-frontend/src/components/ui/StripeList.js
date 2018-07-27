import React from 'react'

const StripeList = ({ data, render, className }) => {
    return <div className={className}>
        <nav>
            <ul style={{
                overflow: "hidden",
                overflowY: "scroll",
                border: "1px solid #e1e1e1",
                maxHeight: "200px",
                minHeight: "40px",
                margin: 0,
                paddingLeft: 0
            }}>
                {data && data.map((item, i) => {
                    return <li key={i}
                        style={{
                            fontSize: "14px",
                            padding: "8px",
                            backgroundColor: i % 2 == 0 ? "" : "#efefef"
                        }}
                    >{render(item)}</li>
                })}
            </ul>
        </nav>
    </div>
}

export default StripeList