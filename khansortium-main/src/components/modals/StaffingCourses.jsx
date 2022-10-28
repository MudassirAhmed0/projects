import { Grid, Paper, styled, TextField } from '@material-ui/core'
import React, { useEffect } from 'react'
import Modal from './Modal'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    cursor:'pointer',
    display:"flex",
    alignItems:'center',
    justifyContent:'center',
    height:'100px' ,
    fontSize:"25px"
  }));
  


const StaffingCourses = ({id}) => {
    const closeModal =()=>{ 
        document.getElementById(id).classList.remove('active')
        document.getElementById('staffingKeyToSuccess').classList.add('active')
         
      } 
       useEffect(()=>{ 
         window.addEventListener('click',(e)=>{
           
          if(e.target.id ===  id){
           document.getElementById(id).classList.remove('active')
             
          }
        }) 
       }) 
  return (
    <Modal id={id}>
    <h2>  Courses</h2>
    <Grid container spacing={2}>
  <Grid onClick={closeModal} item xs={4}>
    <Item>Course 1</Item>
  </Grid>
  <Grid onClick={closeModal} item xs={4}>
    <Item>Course 2</Item>
  </Grid>
  <Grid onClick={closeModal} item xs={4}>
    <Item>Course 3</Item>
  </Grid>
  <Grid onClick={closeModal} item xs={4}>
    <Item>Course 4</Item>
  </Grid>
  <Grid onClick={closeModal} item xs={4}>
    <Item>Course 5</Item>
  </Grid>
  <Grid onClick={closeModal} item xs={4}>
    <Item>Course 6</Item>
  </Grid>
</Grid>
    </Modal>
  )
}

export default StaffingCourses