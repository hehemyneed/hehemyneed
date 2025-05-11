import React from 'react'
import COLORS from '../../helpers/Colors'

function Works() {
  return (
    <section style={{ background: COLORS.secondaryBackground }} className='case-studies flex flex-col items-center py-24 h-[200vh]'>
        <div className="text-heading">
            <h3 style={{ color: '#b19386' }} className='font-serif text-xl font-semibold tracking-wide mb-10 text-center'>CASE STUDIES</h3>
            <h1 style={{ color: '#4a4a4a' }} className='font-bold text-4xl text-center'>Latest Works</h1>
        </div>
        <ul className="latest-works">
            
        </ul>
    </section>
  )
}

export default Works