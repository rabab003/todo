import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import  Padding  from '@mui/icons-material/Padding';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


// import icons
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import  IconButton  from '@mui/material/IconButton';

import { useContext } from 'react';
import { TodosContext } from './Contexts/todosContext';


const open = false

export default function Todo({todo, handleClick}) {

  const {todos, setTodos} = useContext(TodosContext)

  function handleCheckClick(todoId){
    const updatedTodos = todos.map((t)=>{
      if(t.id== todo.id){
        t.isCompleted = !t.isCompleted
      }
      return t
    })
    setTodos(updatedTodos)
  }

  return (
    <>
        <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          {/* <Button onClick={handleClose} autoFocus> */}
            Agree
          {/* </Button> */}
        </DialogActions>
      </Dialog>
    <Card className='todoCard' sx={{width: '100%', mb: 2 }}>
        <CardContent>
     
     <Grid container  style={{background:"#F7F8F9", padding:"13px", width:"100%", gap:"5px"}}>
      
        <Grid size={1} 
              sx={{ 
              display: "flex", 
              alignItems: "center", 
            }}>

              <IconButton onClick={()=>{handleCheckClick()}} style={{color: todo.isCompleted ? "green ": "#515151"}}>
               <CheckBoxOutlineBlankIcon/> 
              </IconButton>

        </Grid>

        <Grid size={7} sx={{ 
              display: "flex", 
              alignItems: "center",
              flexDirection:"column",
            }}>
          <Typography style={{fontSize:"18px", width:"100%" ,fontWeight:"bold" , textAlign:"center"}} variant="h2">
            {todo.title}
          </Typography> 
          <Typography style={{fontSize:"13px" , textAlign:"center", width:"100%" }} variant="h3">
           {todo.date}         
           </Typography> 


        </Grid>

        <Grid size={3} sx={{ 
              display: "flex", 
              justifyContent: "flex-end", // Align icons to the right
              alignItems: "center", // Center vertically
            }}>


              <IconButton sx={{color:"#BF9405"}}>
                <EditIcon/>
              </IconButton> 
              
              <IconButton sx={{color:"red"
              }}>
              <DeleteIcon/>
              </IconButton>
        </Grid>

      </Grid>
    </CardContent>
   </Card>
    </>
  )
}
