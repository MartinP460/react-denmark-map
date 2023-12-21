type PatternProps = {
  className?: string
}

export default function Pattern({ className }: PatternProps) {
  return (
    <div className={`pattern -z-10 ${className}`}>
      <div className="w-full h-2 bg-gray-100"></div>
      <div className="h-full w-2 bg-gray-100"></div>
    </div>
  )
}
