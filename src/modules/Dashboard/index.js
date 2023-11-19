import React from 'react'
import Avatar from '../../assets/avatar.svg'
import Input from '../../components/Input'
const Dashboard=()=>{
    const contacts=[
        {
             name:'John',
             status:'Available',
             img:Avatar
        },
        {
            name:'Mary',
            status:'Available',
            img:Avatar
       },
       {
        name:'Alexander',
        status:'Available',
        img:Avatar
        },
        {
            name:'Adam',
            status:'Available',
            img:Avatar
       },
       {
        name:'Alex',
        status:'Available',
        img:Avatar
        },
        {
            name:'Larry',
            status:'Available',
            img:Avatar
            }
    ]
    return(
        <div className='w-screen flex'>
            <div className='w-[25%]  h-screen bg-secondary overflow-auto'>
                <div className='flex items-center my-8 mx-14'>
                    <div className='border border-primary p-[2px] rounded-full'><img src={Avatar} width={75} height={75}/></div> 
                    <div className='ml-8'>
                        <h3 className='text-2xl'>Tutorial</h3>
                        <p className='text-lg font-light'> hello</p>
                    </div>
                </div>
                <hr/>
                <div className='mx-14 mt-10 '>
                    <div className='text-primary text-lg'>Message</div>
                    <div>
                        {
                            contacts.map(({name,status,img})=>{
                                return(
                                <div className='flex items-center py-8 border-b border-b-gray-300'>
                                    <div className='cursor-pointer flex items-center '>
                                    <div><img src={img} width={60} height={60}/></div> 
                    <div className='ml-6 '>
                        <h3 className='text-lg font-semibold'>{name}</h3>
                        <p className='text-sm font-light text-gray-600'> {status }</p>
                    </div>
                                    </div>
                    
                </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='w-[50%]  h-screen bg-white flex flex-col items-center'>
                <div className='w-[75%] bg-secondary h-[80px] mt-14 rounded-full flex items-center px-14'>
                    <div className='cursor-pointer'><img src={Avatar} width={60} height={60}/></div>
                    <div className='ml-6'>
                    <h3 className='text-lg' >Alexander</h3>
                    <p className='text-sm font-light text-gray-600'>Online</p>
                    </div>
                </div>

                <div className='h-[75%] w-full overflow-scroll shadow-sm'>
                    <div className='p-14'>
                        <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                            lorem ipsum is a simple dummy text of the printing and typesetting industry
                        </div>
                        <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto text-white p-4 mb-6'>
                        lorem ipsum is a simple dummy text 
                        </div>
                        <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                            lorem ipsum is a simple dummy text of the printing and typesetting industry
                        </div>
                        <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto text-white p-4 mb-6'>
                        lorem ipsum is a simple dummy text 
                        </div>
                        <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                            lorem ipsum is a simple dummy text of the printing and typesetting industry
                        </div>
                        <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto text-white p-4 mb-6'>
                        lorem ipsum is a simple dummy text 
                        </div>
                    </div>
                </div>
                <div className='p-14 w-full flex items-center'>
                    <Input placeholder='Type a message..' className='w-[75%]' inputClassname='p-4 border-0 shadow-md rounded-full bg-light focus:ring:0 focus:border-0 outline-none'/>
                    <div className='ml-4 p-2  cursor-pointer bg-light rounded-full'><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M10 14l11 -11" />
                        <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                        </svg>
                    </div>
                    <div className='ml-4 p-2 cursor-pointer bg-light rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                    <path d="M9 12h6" />
                    <path d="M12 9v6" />
                    </svg>
                    </div>
                </div>
            </div>
            <div className='w-[25%]  h-screen bg-light'></div>
        </div>
    )
}
export default Dashboard;