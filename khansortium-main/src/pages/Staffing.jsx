import React from 'react'
import Layout from '../components/layout/Layout'
import staffing from '../assets/companies/staffing.webp'
import StaffingSessionModal from '../components/modals/StaffingSessionModal'
import StaffingLogin from '../components/modals/StaffingLogin'
import StaffingCourses from '../components/modals/StaffingCourses'
import StaffingKeyToSuccess from '../components/modals/StaffingKeyToSuccess'

const Staffing = () => {
    const openModal =()=>{ 
        document.getElementById('staffingSessionModal').classList.add('active')
      } 
  return (
    <Layout>
        <div id="Hero" className="Hero">
      <div   className="HeroSlider">
    
        <div 
       
          className={`   firstSlide  active'   slide`}
        >
          <div id className="slideImg">
         <img src={staffing} alt="" />
           
          </div>

          <div className="slideContent">
            <div className="badge">
              <em> Staffing</em>
            </div> 
            <h1 > 
                Through Patience Great Things are accomplished
            </h1>
        <div className="slideSubContent">
              <p  >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, autem. Nobis sint placeat incidunt nisi, reiciendis quo iure esse magni. Explicabo consequuntur nostrum nesciunt eaque libero harum quo possimus sapiente.
              </p>
             
                 <button onClick={openModal} className='FirstHeroBtnForVerticalPage'>
                        Training 
                  </button>
                
              
               
                
                
            </div> 
          </div>
        </div>

      
      
      </div>
    <StaffingSessionModal id='staffingSessionModal'/>
    <StaffingLogin id='staffingLogin'/>
    <StaffingCourses id='staffingCourses'/>
    <StaffingKeyToSuccess id='staffingKeyToSuccess'/>
    </div>
    </Layout>
  )
}

export default Staffing