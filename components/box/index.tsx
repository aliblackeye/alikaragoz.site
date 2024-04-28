interface IBoxProps {
  children: React.ReactNode;
}

export function Box(props: IBoxProps) {
  // Props
  const { children } = props;
  return (
    <div className="next-box">
      <div className="border-dark bg-dark rounded-2xl border-2 p-4 pb-6">
        {children}
      </div>
    </div>
  );
}
