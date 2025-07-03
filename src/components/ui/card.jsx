export function Card({ children, className }) {
  return <div className={`rounded-2xl p-6 ${className}`}>{children}</div>;
}

export function CardContent({ children }) {
  return <div>{children}</div>;
}
