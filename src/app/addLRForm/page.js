"use client"
import React, { useEffect, useState } from 'react'
import LREntryTable from '../../app/LREntryTable/page'
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Page = () => {
   const [loading, setLoading] = useState(false);
  const [allLRs, setAllLRs] = useState([])
    const route = useRouter()
    const fetchAllLRs = async () => {
        const response = await axios.get('/api/getLREntry')
        // const data = await response.json()
        console.log(response.data, 'data')
        setAllLRs(response.data?.data)
        setLoading(true)
    }
    useEffect(() => {
      fetchAllLRs()
  
    
    
    }, [])
    
    return (<>
        <pre>{ JSON.stringify(allLRs, null, 2)}</pre>
        <div className=' flex justify-end mt-5'>
        <button className='bg-gray-500 text-white px-4 py-2  rounded-md font-bold m-2 ' onClick={() => route.push('/lrEntryForm')}>Add LR</button>
        
        </div>
      <div>
     <LREntryTable allLRs={allLRs}  loading={loading}/>
        
    </div>
  </>
  )
}

export default Page