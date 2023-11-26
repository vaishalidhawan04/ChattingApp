import React, { useEffect, useState } from 'react'
import Avatar from '../../assets/avatar.svg'
import Input from '../../components/Input'
const Dashboard=()=>{
    // useEffect(()=>{
    //     const loggedInUser=JSON.parse(localStorage.getItem('user:detail'))
    //     const fetchConversations=async()=>{
    //         const res=await fetch(`http://localhost:8000/api/conversations/${loggedInUser?.id}`,{
    //             method:'GET',
    //             headers:{
    //                 'Content-Type':'application/json'
    //             }
    //         });
    //         const resData=await res.json()
    //        // console.log('resData:>>',resData)
    //         setConversations(resData)
    //         console.log('conversations:>>',conversations)
    //     }
    //     fetchConversations()
    // },[])
     const [user,setUser]=useState(JSON.parse(localStorage.getItem('user:detail')));
     const [conversations,setConversations]=useState([])
     const [messages,setMessages]=useState({})
     const [message,setMessage]=useState('')
     const [users,setUsers]=useState([])
    console.log('user:>>',user)
    console.log('conversations:>>',conversations)
    console.log('users:>>',users)

    useEffect(()=>{
        const loggedInUser=JSON.parse(localStorage.getItem('user:detail'))
        const fetchConversations=async()=>{
            const res=await fetch(`http://localhost:8000/api/conversations/${loggedInUser?.id}`,{
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            });
            const resData=await res.json()
           // console.log('resData:>>',resData)
            setConversations(resData)
            console.log('conversations:>>',conversations)
        }
        fetchConversations()
    },[])

    useEffect(()=>{
        const fetchUsers=async()=>{
            const res=await fetch(`http://localhost:8000/api/users/${user?.id}`,{
                method:'GET',
            headers:{
                'Content-Type':'application/json',
            }
            });
            const resData=await res.json()
            setUsers(resData)
        }
        fetchUsers()
    },[])

    const fetchMessages=async(conversationId,receiver)=>{
        const res=await fetch(`http://localhost:8000/api/message/${conversationId}?senderId=${user?.id}&&receiverId=${receiver?.receiverId}`,
        {
            method:'GET',
            // ...(conversationId==='new' &&{
            //     body:JSON.stringify({senderId:user?.id,receiverId:messages?.receiver?.receiverId})
            // }),
            headers:{
                'Content-Type':'application/json',
            }
        });
        const resData=await res.json()
        console.log('resData:>>',resData)
        setMessages({messages:resData,receiver,conversationId})
    }

    const sendMessage=async(e)=>{
        const res=await fetch(`http://localhost:8000/api/message`,{
            method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    conversationId:messages?.conversationId,
                    senderId:user?.id,
                    message,
                    receiverId:messages?.receiver?.receiverId
                })
            });
            // const resData=await res.json()
            // console.log('resData:>',resData);
            setMessage('')
        }

    return(
        <div className='w-screen flex'>
            <div className='w-[25%]  h-screen bg-secondary overflow-auto'>
                <div className='flex items-center my-8 mx-14'>
                    <div className='border border-primary p-[2px] rounded-full'><img src={Avatar} width={75} height={75}/></div> 
                    <div className='ml-8'>
                        <h3 className='text-2xl'>{user?.fullName}</h3>
                        <p className='text-lg font-light'> hello</p>
                    </div>
                </div>
                <hr/>
                <div className='mx-14 mt-10 '>
                    <div className='text-primary text-lg'>Message</div>
                    <div>
                        {
                             conversations.length>0?
                            conversations.map(({conversationId,user})=>{
                                return(
                                <div className='flex items-center py-8 border-b border-b-gray-300'>
                                    <div className='cursor-pointer flex items-center' onClick={()=>
                                    fetchMessages(conversationId,user)}>
                                    <div><img src={Avatar} width={60} height={60}/></div> 
                                    <div className='ml-6 '>
                                    <h3 className='text-lg font-semibold'>{user?.fullName}</h3>
                                    <p className='text-sm font-light text-gray-600'> {user?.email}</p>
                                    </div>
                                    </div>
                                </div>
                                )
                            })
                             :<div className='text-center text-lg font-semibold mt-24'>No Conversations
                             </div>
                        }
                    </div>
                </div>
            </div>
            <div className='w-[50%]  h-screen bg-white flex flex-col items-center'>
                {
                     messages?.receiver?.fullName &&
                <div className='w-[75%] bg-secondary h-[80px] mt-14 rounded-full flex items-center px-14'>
                    <div className='cursor-pointer'><img src={Avatar} width={60} height={60}/></div>
                    <div className='ml-6'>
                    <h3 className='text-lg' >{messages?.receiver?.fullName}</h3>
                    <p className='text-sm font-light text-gray-600'>{messages?.receiver?.email}</p>
                    </div>
                </div>
                }

                <div className='h-[75%] w-full overflow-scroll shadow-sm'>
                    <div className='p-14'>
            
                        {
                            messages?.messages?.length>0?
                            messages.messages.map(({message,user:{id}={}})=>{
                                
                                if(id === user?.id){
                                    return(
                                        <div className='max-w-[40%] bg-primary rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>
                                            {message}
                                        </div> 
                                    )
                                }
                                else{
                                    return(
                                        <div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>
                                            {message}
                                        </div> 
                                    )
                                }
                            }):<div className='max-w-[40%] bg-secondary rounded-b-xl rounded-tr-xl p-4 mb-6'>No Message</div> 
                        }
                    </div>
                </div>
                {
                    messages?.receiver?.fullName &&
                <div className='p-14 w-full flex items-center'>
                    <Input placeholder='Type a message..' value={message} onChange={(e)=>setMessage(e.target.value)} className='w-[75%]' inputClassname='p-4 border-0 shadow-md rounded-full bg-light focus:ring:0 focus:border-0 outline-none'/>
                    <div className={`ml-4 p-2  cursor-pointer bg-light rounded-full ${!message &&'pointer-events-none'}`} onClick={()=>sendMessage()}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
                }
            </div>
            <div className='w-[25%]  h-screen bg-light px-5 py-7'>
            <div className='text-primary text-lg'>People</div>
            <div>
            {
                users.length>0?
                users.map(({userId,user})=>{
                return(
                    <div className='flex items-center py-8 border-b border-b-gray-300'>
                    <div className='cursor-pointer flex items-center' onClick={()=>fetchMessages('new',user)}>
                    <div><img src={Avatar} width={60} height={60}/></div> 
                    <div className='ml-6 '>
                        <h3 className='text-lg font-semibold'>{user?.fullName}</h3>
                        <p className='text-sm font-light text-gray-600'> {user?.email}</p>
                    </div>
                    </div>
                    </div>
                    )
                }):<div className='text-center text-lg font-semibold mt-24'>No Conversations</div>
                        }
            </div>
            </div>
        </div>
    )
}
export default Dashboard;