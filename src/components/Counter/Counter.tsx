import React from 'react'
import { useCountdown } from './hooks/useCounterdown'

type Props = { targetDate: string }

const Counter = ({ targetDate }: Props) => {
  const { days, hours, minutes, seconds } = useCountdown(targetDate)

  return (
    <div className="h-16 grow py-4 px-8 gap-1 bg-black text-white flex items-center">
      <span>{days}d</span>:<span>{hours}h</span>:<span>{minutes}m</span>:
      <span>{seconds}s</span>
    </div>
  )
}

export default Counter
