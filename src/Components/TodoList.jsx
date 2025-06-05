import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Todo from "./Todo";
import { v4 as uId } from 'uuid';
 

import { useState, useContext } from 'react';
import { TodosContext } from './Contexts/todosContext';

export default function TodoList() {

  const {todos, setTodos} = useContext(TodosContext)
  const [titleInput, setTitleInput]= useState("")
  const todosJsx = todos.map((t)=>{
    return <Todo key={t.id} todo={t} />
  })

  function handleAddClick(){ 
    const newTodo = {
      id:uId(),
      title:titleInput,
      date:"",
      isCompleted:false
    }

    setTodos([...todos, newTodo])
    setTitleInput("")
  }

  setTodos([...todos, newTodo]);
  localStorage.setItem("todos", JSON.stringify())
  setTitleInput("") 

  return (
    <Container maxWidth="sm" sx={{ p: 0 }}> 
      <Card sx={{ width: '100%', p: 0, display:"flex", justifyContent:"center" }}> 
        <CardContent sx={{ px: 2, width: '100%',display:"flex", justifyContent:"center", alignItems:"center" , flexDirection:"column",py: 1 }}> {/* Adjust padding */}
          <Typography 
            sx={{ 
              fontSize: "26px", 
              fontWeight: "bold", 
              textAlign: "center", 
              pb: 3 ,
              pt: 3 ,
              color:"#232323"
            }} 
            variant="h2"
          >
            Tasks
          </Typography>
          <Divider variant="middle" />

          {/* Task Filter */}
          <ToggleButtonGroup 
            sx={{ 
              background: "#E1EDFD", 
              color: "#515151",
              mb: 2,
              width: '100%'
            }}
            exclusive
            aria-label="task filter"
          >
            <ToggleButton 
              value="all" 
              sx={{ 
                color: "white", 
                background: "#6896D2",
                flex: 1,
                py: 1
              }}
            >
              <Typography sx={{ fontSize: "15px", fontWeight: "medium" }}>
                all
              </Typography>
            </ToggleButton>
            <ToggleButton value="done" sx={{ flex: 1, py: 1 }}>
              done
            </ToggleButton>
            <ToggleButton value="notYet" sx={{ flex: 1, py: 1 }}>
              not yet
            </ToggleButton>
          </ToggleButtonGroup>

          {todosJsx}

          {/* Input field section - Full width */}
          <Grid container spacing={1} sx={{ mt: 2, width: '100%',display:"flex" , justifyContent:"center" }} >
            <Grid item xs={8} sx={{ pl: 0 }}> {/* Remove left padding */}
              <TextField
                value={titleInput}
                onChange={(e)=> setTitleInput(e.target.value)}
                fullWidth
                id="task-input"
                label="Add new task"
                variant="standard"
                size="small"
                sx={{}}
              />
            </Grid>
            <Grid item xs={2} sx={{ pr: 0 }}>
              <Button 
                onClick={handleAddClick}
                variant="contained" 
                color="secondary"
                sx={{ 
                  height: '40px',
                  borderRadius: '0 4px 4px 0' /* Rounded right corners only */
                }}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  )
}