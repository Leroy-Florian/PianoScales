import {
  ChartBarIcon,
  CogIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline'
import { GAME_TITLE } from '../../constants/strings'
import {isModalOpen} from "../../App";

type Props = {
  setIsModalOpen: (value: isModalOpen) => void
  isModalOpen : isModalOpen
}

export const Navbar = ({
                         setIsModalOpen,
                         isModalOpen
}: Props) => {
  return (
    <div className="navbar">
      <div className="navbar-content px-5">
        <InformationCircleIcon
          className="h-6 w-6 mr-2 cursor-pointer dark:stroke-white"
          onClick={() => setIsModalOpen({...isModalOpen,Info : true})}
        />
        <p className="text-xl ml-2.5 font-bold dark:text-white">{GAME_TITLE}</p>
        <div className="right-icons">
          <ChartBarIcon
            className="h-6 w-6 mr-3 cursor-pointer dark:stroke-white"
            onClick={() => setIsModalOpen({...isModalOpen,Stats : true})}
          />
          <CogIcon
            className="h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={()=>setIsModalOpen({...isModalOpen,Settings : true})}
          />
        </div>
      </div>
      <hr></hr>
    </div>
  )
}
