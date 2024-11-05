import Image from 'next/image'
import React from 'react'
import UserIco from '@/app/images/UserIcon.png'


const page = () => {
  return (
    <div>
    <Image
          src={UserIco}
          width={200}
          height={200}
          alt="Picture of the author"
        />
        <br></br>
        <div>
            ppppppp p p  lllllllllll l lllllllllll
            kkk k       kkkkk kkkkkk kk
        </div>
    </div>
  )
}

export default page