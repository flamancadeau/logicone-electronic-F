export default function ChatMessage({ message, onSuggestion }) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[90%] rounded-2xl px-space-md py-space-sm ${
          isUser
            ? 'bg-primary text-on-primary rounded-br-md'
            : 'bg-surface-container-low text-on-surface rounded-bl-md'
        }`}
      >
        <p className="font-body-sm text-body-sm whitespace-pre-wrap break-words break-anywhere">{message.content}</p>
        {!isUser && message.suggestions?.length > 0 && (
          <div className="mt-space-sm flex flex-wrap gap-1.5">
            {message.suggestions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => onSuggestion?.(s)}
                className="rounded-full bg-surface-container-lowest px-2.5 py-1 font-label-tech text-label-tech text-tertiary border border-tertiary/20 hover:bg-tertiary hover:text-on-tertiary transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
