import * as React from 'react'

interface Props {
  text: string
}

export const Body = ({ text }: Props) => {
  return <div className='body' style={{color: '#FFF'}}>Example Component change: {text}</div>
}
