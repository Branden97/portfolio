interface ChatSuggestionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  firstPart: string
  secondPart: string
}

export const ChatSuggestion: React.FC<ChatSuggestionProps> = ({
  firstPart,
  secondPart,
  className,
  ...props
}) => {
  return (
    <button
      className={`flex flex-col text-left border whitespace-nowrap rounded-xl px-4 py-3 active:opacity-50 backdrop-blur-sm  ${className}`}
      {...props}
    >
      <span>{firstPart}</span>
      <span className="truncate opacity-50 w-full">{secondPart}</span>
    </button>
  )
}
