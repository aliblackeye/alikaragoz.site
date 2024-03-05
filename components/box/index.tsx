interface IBoxProps {
  children: React.ReactNode;
}

export default function Box(props: IBoxProps) {
  // Props
  const { children } = props;
  return (
    <div className="next-box">
      <div className="rounded-2xl border-2 border-dark bg-dark p-4 pb-6">
        {children}
      </div>
    </div>
  );
}
