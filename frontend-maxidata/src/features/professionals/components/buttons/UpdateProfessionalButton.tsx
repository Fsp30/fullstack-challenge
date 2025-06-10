import { useNavigate } from "react-router-dom";
import { Pencil } from "lucide-react";

interface Props {
        id: number
}

export function UpdateProfessionalButton({id}: Props){
        const navigate = useNavigate()

        return(
                <button onClick={() => navigate(`/professionals/update/${id}`)} className="hover:dark:bg-zinc-600 hover:bg-whiteCard w-8 h-8 flex items-center justify-center rounded-lg transition-transform duration-200 hover:scale-105">
                        <Pencil className="w-4 h-4"/>
                </button>
        )
}