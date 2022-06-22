import React from 'react'
import Create from '../create/create'
import Read from '../read/read'

export default function Home() {
  return (
    <div className='container container-fluid'>
        <div className='row mt-4'>
            <div className='col-md-4'>
                {/* empty */}
            </div>
            <div className='col-md-6'>
                <div className='card'>
                    <div className='card-body'>
                        <h5 className='card-title' >Hello User</h5>
                        <p className='card-text'>
                            This is a simple application that demonstrate and performs CRUD processes.
                        </p>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                {/* empty */}
            </div>
        </div>

        <div>
        Create Functionality
        <hr></hr>
        <Create/>
        </div>

    </div>
  )
}
