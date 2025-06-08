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
import { useState, useEffect,useContext ,useMemo} from 'react';
 
import { TodosContext } from './Contexts/todosContext';

export default function TodoList() {

  const {todos, setTodos} = useContext(TodosContext)
  const [titleInput, setTitleInput]= useState("")
  const [displayedTodosType, setDisplayedTodosType] = useState("all")


  // filtration arrays


const completedTodos =  useMemo(()=>{
 return todos.filter((t) => t.isCompleted);
  }, [todos])

  const notCompletedTodos =  useMemo(()=>{
return todos.filter((t) => !t.isCompleted);
  }, [todos])

  let todosToBeRendered  = todos

  if(displayedTodosType == "done"){
    todosToBeRendered = completedTodos
  }else if(displayedTodosType == "notYet"){
    todosToBeRendered =notCompletedTodos
  }else{
    todosToBeRendered = todos
  }

 const todosJsx = todosToBeRendered.map((t) => {
    return <Todo key={t.id} todo={t} />;
  });
  
  
  useEffect(()=>{
    const StorageTodos = JSON.parse(localStorage.getItem("todos")) ?? []
    setTodos(StorageTodos)
  }, [])

  function changeDisplayType(e){
  setDisplayedTodosType(e.target.value)  }

  function handleAddClick(){ 
    const newTodo = {
      id:uId(),
      title:titleInput,
      date:"",
      isCompleted:false
    }
    
    const updatedTodos = [...todos, newTodo]
    setTodos(updatedTodos)
    localStorage.setItem("todos", JSON.stringify(updatedTodos))
    setTitleInput("")
  }

  return (
    <Container maxWidth="sm" sx={{ p: 0 }}> 
      <Card 
  sx={{ 
    maxHeight: '80vh', 
    overflowY: 'scroll', 
    overflowX: 'hidden',  // This hides horizontal scroll
    minWidth: 300,
    '&::-webkit-scrollbar': {
      width: '0.4em'  // Optional: makes vertical scrollbar thinner
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#6896D2'  // Optional: styles the scrollbar thumb
    }
  }}>        <CardContent sx={{ px: 2, width: '100%',display:"flex", justifyContent:"center", alignItems:"center" , flexDirection:"column",py: 1 }}> {/* Adjust padding */}
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
          onChange={changeDisplayType}
          value={displayedTodosType}
            sx={{ 
                mb: 2,
              width: '100%',

            
            }}
            exclusive
            aria-label="task filter"
          >
            <ToggleButton value="all" 
              sx={{ 
              backgroundColor: displayedTodosType === "all" ?"#6896D2"  : "#",
              color: displayedTodosType === "all" ? "#515151" : "#515151",    
            '&:hover': {
              backgroundColor: displayedTodosType === "all" ? "#6896D2" : "#E1EDFD"
             },
                flex: 1,
                py: 1
              }}
            >
              <Typography sx={{ fontSize: "15px", fontWeight: "medium" }}>
                all
              </Typography>
            </ToggleButton>

            <ToggleButton value="done"  
             sx={{ 
             color: displayedTodosType === "done" ? "white" : "#515151",
             backgroundColor: displayedTodosType === "done" ? "#6896D2" : "transparent",
                '&:hover': {
                  backgroundColor: displayedTodosType === "done" ? "#6896D2" : "#E1EDFD"
                },
                flex: 1,
                py: 1
              }}>
              done
            </ToggleButton>

            <ToggleButton value="notYet"  
            sx={{ 
                 flex: 1, 
                 py: 1,
                 color: displayedTodosType === "notYet" ? "white" : "#515151",
                 backgroundColor: displayedTodosType === "notYet" ? "#6896D2" : "transparent",
                 '&:hover': {
                   backgroundColor: displayedTodosType === "notYet" ? "#6896D2" : "#E1EDFD"
                 }
               }}
              >
              not yet
            </ToggleButton>
            
          </ToggleButtonGroup>


          {/* Input field section - Full width */}
          <Grid container spacing={1} sx={{ mt: 2,mb:4 , width: '100%',display:"flex" , justifyContent:"center" }} >
            <Grid item xs={8} sx={{ pl: 0 }}> 
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
                color="#6896D2"
                sx={{ 
                  height: '40px',
                  borderRadius: '0 4px 4px 0' /* Rounded right corners only */
                }}
                disabled={titleInput == 0}
              >
                Add
              </Button>
            </Grid>
          </Grid>          

          {todosJsx}

        </CardContent>
      </Card>
    </Container>
  )
}