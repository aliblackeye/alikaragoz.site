import { AiOutlineLoading } from "react-icons/ai";

import '@styles/_loading.scss'

export default function Loading() {
  return (
    <div className="loading-container">
      <AiOutlineLoading className="loading" />
    </div>
  );
}
