import React from 'react'

const DarkMode = ({DarkMode}) => {
  return (
    <div className='pt-16 pb-16 lg:pt-24 lg:pb-28'>
        <div className='px-4 mx-auto max-w-[1440px]'>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-28'>
                <div className='hidden lg:flex flex-col items-center'>
                    <div className='flex flex-row max-w-[800px] items-center justify-centr gap-8'>
                        <div>
                            <div className='flex items-center justify-center'>
                                <div className={`relative w-full h-auto  text-center ${darkMode ? "block" : "hidden"}`}>
                                    <img src={DarkFigma} alt='image' className=' mx-auto rounded-xl max-w-full'/>
                                 </div>
                                            
                                <div className={`relative w-full h-auto  text-center ${darkMode ? "hidden" : "block"}`}>
                                    <img src={LightFigma} alt='image' className='mx-auto rounded-xl max-w-full'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default DarkMode
