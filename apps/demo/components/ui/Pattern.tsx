type PatternProps = {
  className?: string
}

export default function Pattern({ className }: PatternProps) {
  return (
    <div className={`pattern w-96 h-96 -z-10 ${className}`}>
      <div className="w-full h-2 bg-gray-100"></div>
      <div className="h-full w-2 bg-gray-100"></div>
    </div>
  )
}
