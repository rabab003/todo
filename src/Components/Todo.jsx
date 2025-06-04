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
import TextField from '@mui/material/TextField';


// import icons
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import  IconButton  from '@mui/material/IconButton';

import { useContext , useState } from 'react';
import { TodosContext } from './Contexts/todosContext';


export default function Todo({todo, handleClick}) {

  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [showUpdateDialog, SetShowUpdateDialog] = useState(false)
  const [editTodo, setEditTodo] = useState({title:todo.title, date:todo.date})

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

  function handleDeleteClick(){
    setShowDeleteDialog(true)
  }

  function handleUpdateClick(){
    SetShowUpdateDialog(true)
  }

  function handleDeleteClose(){
    setShowDeleteDialog(false)
  }

  function handleUpdateClose(){
    SetShowUpdateDialog(false)
  }


  function handleDeleteConfirm(){
    const updatedTodos = todos.filter((t)=>{
      return t.id != todo.id
    })

    setTodos(updatedTodos)
  }

  function handleUpdateConfirm(){
    const updatedTodos = todos.map((t)=>{
      if(t.id == todo.id){
        return{...t , title:editTodo.title, date:editTodo.date}
      }else{
        return t
      }
    })

    setTodos(updatedTodos)
    SetShowUpdateDialog(false)
  }

  return (
    <>

    {/* delete dialog */}
      <Dialog
        open={showDeleteDialog}
        onClose={handleDeleteClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete this task ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this task?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteClose}>No</Button>
          <Button onClick={handleDeleteConfirm}  autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>    
    {/* ==========the end of delete dialog ========== */}

    {/* update dialog */}
      <Dialog
        open={showUpdateDialog}
        onClose={handleUpdateClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {" Edit the task"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           
          </DialogContentText>
           <TextField
            value={editTodo.title}
            onChange={(e)=>{
              setEditTodo({...editTodo, title:e.target.value})
            }}
            fullWidth
            id="task-input"
            label="Task title ..."
            variant="standard"
            size="small"
            sx={{}}
          />
           <TextField
            value={editTodo.date}
            onChange={(e)=>{
              setEditTodo({...editTodo, date:e.target.value})
            }}            
            fullWidth
            id="task-input"
            label="Date ..."
            variant="standard"
            size="small"
            sx={{}}
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateClose}>No</Button>
          <Button onClick={handleUpdateConfirm}  autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>    
    {/* ==========the end of update dialog ========== */}

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

               {/* ======= update Button ========*/}
              <IconButton onClick={handleUpdateClick} sx={{color:"#BF9405"}}>
                <EditIcon/>
              </IconButton> 
               {/* ======= end update Button ========*/}
              
              <IconButton sx={{color:"red"
              }} onClick={handleDeleteClick}>
              <DeleteIcon/>
              </IconButton>
        </Grid>

      </Grid>
    </CardContent>
   </Card>
    </>
  )
}
