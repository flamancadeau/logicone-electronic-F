export default function Card({ children, className = '', as: Tag = 'div', ...rest }) {
  return (
    <Tag
      className={`rounded-xl bg-surface-container-lowest shadow-sm ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
