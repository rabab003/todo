import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import  Padding  from '@mui/icons-material/Padding';

// import icons
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import  IconButton  from '@mui/material/IconButton';


export default function Todo() {
  return (
    <>
    <Card className='todoCard' sx={{width: '100%', mb: 2 }}>
        <CardContent>


     <Grid container style={{background:"#F7F8F9", paddingTop:"6px", width:"100%", gap:"5px"}}>
        <Grid size={1} sx={{ 
              display: "flex", 
              alignItems: "center", 
            }}>
              <IconButton>
          <CheckBoxOutlineBlankIcon/> 

              </IconButton>
        </Grid>

        <Grid size={7} sx={{ 
              display: "flex", 
              alignItems: "center",
              flexDirection:"column",
            }}>
          <Typography style={{fontSize:"18px", width:"100%" ,fontWeight:"bold" , textAlign:"center"}} variant="h2">
            write an article
          </Typography> 
          <Typography style={{fontSize:"13px" , textAlign:"center", width:"100%" }} variant="h3">
           Date: 2025-6-3          
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
