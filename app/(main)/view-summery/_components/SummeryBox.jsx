import React from 'react'
import ReactMarkdown from 'react-markdown'

function SummeryBox({ summery }) {
    return (
        <div className='h-[60vh] overflow-auto'>
            <ReactMarkdown
                components={{
                    // Apply styling to paragraph elements inside markdown
                    p: ({ node, ...props }) => <p className="text-base/8" {...props} />
                }}
            >
                {summery}
            </ReactMarkdown>
        </div>
    )
}

export default SummeryBox