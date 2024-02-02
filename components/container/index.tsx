
interface IContainerProps {
  children: React.ReactNode;
  className?: string;
}

import './styles.scss'

export default function Container(props: IContainerProps) {

  // Props
  const { children, className } = props;
  return (
    <div
      className={`container ${className ? className : ""}`}
    >
      {children}
    </div>
  );
}
