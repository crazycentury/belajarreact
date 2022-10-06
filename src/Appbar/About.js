import React, { useContext } from 'react'
import Appbar from './Appbar'
import Navbar from './Navbar'
import { CommonContext } from '../App'

const About = () => {
  const { apps } = useContext(CommonContext);
  return (
    <div>
        <Navbar value={apps.title} color={apps.color}/>
      <h1>{apps.title}</h1>
      <p>MyApp adalah website yang berisi data diri orang di RT03, RW11, Kelurahan Bojong, Kecamatan Bojong, Kabupaten Bogor, Jawa Barat</p>
    </div>
  )
}

export default About
