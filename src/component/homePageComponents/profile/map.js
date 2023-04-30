import React from 'react'

export const Map = () => {
  return (
    <div className='w-full h-[80%] rounded-md'>
     <iframe className='rounded-md' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2872.409703675769!2d-34.46180559999999!3d-43.95088889999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDPCsDU3JzAzLjIiUyAzNMKwMjcnNDIuNSJX!5e0!3m2!1sen!2sin!4v1682853964536!5m2!1sen!2sin" width="100%" height="350" style={{border:"0"}} loading="lazy"></iframe>
    </div>
  )
}

// Sorry do not have a billing account in google cloud that is the reason could not use the services of google maps api. I know how to use it the only problem is billing account.


// This is how i would have used it.


// import React from 'react'
// import{GoogleMap,useLoadScript,Marker} from "@react-google-maps/api"
// import { useParams } from 'react-router-dom';
// import { data } from "../../utils/data";

// export const Map = () => {
//   const {id} = useParams()
//   const {isLoaded} = useLoadScript({
//     googleMapsApiKey : "--"
//   })

// if(!isLoaded) return <div>Loading...</div>
//   return (
//     <div className='w-full h-[80%] rounded-md'>
//     {data.users.map((ele,index) => {
//       return(
//         <GoogleMap key={index} zoom={10} center={{lat : ele.geo.lat, lng : ele.geo.lng}}  style={{height : "350px",width:"100%", border-radius : 10px}}>
//           <Marker position={{lat : ele.geo.lat, lng : ele.geo.lng}}/>
//         </GoogleMap>
//       )
//     })}
//     </div>
//   )
// }


