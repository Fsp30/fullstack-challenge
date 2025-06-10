import { UpdateProfessionalButton } from "./buttons/UpdateProfessionalButton";
import { FetchOneProfessionalButton } from "./buttons/FetchOneProfessionalButton";
type ButtonsActionProps = {
  id: number
 
}

export function ButtonsAction({ id }: ButtonsActionProps) {
  return (
    <div className="flex space-x-2 items-center justify-center gap-2">
      <FetchOneProfessionalButton id={id} />
      <UpdateProfessionalButton id={id} />
    </div>
  )
}
