import { AiOutlineLoading } from "react-icons/ai";

export default function Loading() {
    return (
        <div className="max-w-xl w-full h-full fixed z-10 bg-dark flex justify-center items-center">
            <AiOutlineLoading className="animate-spin text-white text-5xl" />
        </div>
    )
}
