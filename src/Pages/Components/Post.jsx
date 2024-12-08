import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/firebase'
import { collection, getDocs } from 'firebase/firestore'


const Post = (props) => {

    return (
    <div>
        <h1>{props.Title}</h1>
        <p>{props.Desc}</p>
        <br /><hr />
    </div>
  )
}

export default Post