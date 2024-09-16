import React,{useState} from 'react'

function StorageComponent() {

    const handleChange = (e) => {
        useStorage(e.target.value)
    }

    const useStorage = (data) =>{
        localStorage.setItem('content', data)
        sessionStorage.setItem('content', data);
    }

  return (
    <div>
        <input style={{height:70, width:500, fontSize:30}} type="text" onChange={handleChange} />
    </div>
  )
}

export default StorageComponent