import React from 'react'
import AddForm from '../molecules/AddForm'
import Navbar from '../molecules/Navbar'
import Footer from '../molecules/Footer'

const AddFormView = () => {
  return (
    <>
      <div className='mb-20'>
        <Navbar />
      </div>
      <div className='flex flex-col items-center justify-center '>
        <div className='py-10 flex aligne-center text-2xl font-medium text-brown-letter'>
          <h1>Carga tus productos a la tienda</h1>
        </div>
        <div className='pb-20'>
          <AddForm />
        </div>
      </div>
      <div>
        <Footer />
      </div>

    </>


  )
}

export default AddFormView