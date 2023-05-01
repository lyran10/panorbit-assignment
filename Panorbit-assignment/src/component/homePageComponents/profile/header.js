import React,{useState,useRef,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { SelectAccount } from '../../mainPageComponents/selectAccount'
import { useDispatch } from 'react-redux'
import { menuItem } from '../../redux/reducer'

export const Header = ({userData,header}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [display,setDisplay] = useState(false)
  const menuRef = useRef()
  const buttonRef = useRef()

  const navigateToMainPage = () => {
    navigate("/")
    dispatch(menuItem("profile"))

  }
  
  useEffect(() => {

      let listener = (event) => { 
      // do nothing if clicked on buttonRef which is on line 31 
        if(buttonRef.current.contains(event.target)) return

      // mousedown anywhere on the window will hide menuRef which is on line 35. Div that contains signout button and user details
        if(!menuRef.current.contains(event.target)) setDisplay(false) 
      }

      document.addEventListener("mousedown",listener) // runt the function when mousedown

    return () => {
      document.removeEventListener("mousedown",listener) // remove eventlistener
    }
  },)

  return (
    <div className='h-[10%] flex justify-between relative items-center p-2 border-b-2 w-full'>
        <span className='font-bold text-[20px]'>{header}</span>
        {/* toggle the div that contains signout button and user details */}
        <div ref={buttonRef} onClick={() => setDisplay(dis => dis ? false : true)} className='p-2 flex items-center gap-2 justify-center cursor-pointer relative'>
            <img className="inline-block h-10 w-10 rounded-full cursor-pointer ring-2 ring-white" src={userData.profilepicture} alt="image"/>
            <span className='text-[17px] p-1 text-slate-500'>{userData.name}</span>
        </div>

        <div ref={menuRef} className={`right-0 top-[100%] bg-white duration-500 absolute shadow-userAccount z-40 ${display ? "block" : "hidden"} min-h-[100px] w-[100%] md:w-[25%] lg:w-[25%] rounded-xl flex flex-col justify-center items-center`}>
        <div className='p-2 flex items-center flex-col gap-2 justify-center cursor-pointer relative'>
            <img className="inline-block h-[100px] w-[100px]  rounded-full cursor-pointer ring-2 ring-white" src={userData.profilepicture} alt="image"/>
            <span className='text-[20px] font-semibold text-slate-500'>{userData.name}</span>
            <span className='text-[15px] text-slate-500'>{userData.email}</span>
        </div>
        {/* selectAccount component which is also in the main page . Given some props for styling purpose it look different in both the pages */}
        <SelectAccount position={"static"} width={"w-[95%]"} height={"h-[170px]"} scrollDivHeight={"h-[150px]"} showHeading={"hidden"} textSize={"text-[15px]"}/>
        {/* on click navigate to main page */}
        <button onClick={() => navigateToMainPage()} className='text-[15px] px-3 text-white font-semibold mb-2 bg-[#D2042D] p-2 rounded-2xl'>Sign out</button>
        </div>
  </div>
  )
}
