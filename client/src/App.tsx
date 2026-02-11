import { ListItem, Typography, List } from "@mui/material"
import axios from "axios"
import { useState, useEffect } from "react"

function App() {

  const [activities, setActivities] = useState<Activity[]>([])
  const title = "Welcome to Social Activities"

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
    .then(response => setActivities(response.data))
  }, [])

  return (
    <>
      <h3 className="app" style={{color: 'red'}}>{title}</h3>
      
      <Typography variant="h2">Social Activities</Typography>

      <List>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            {activity.title}
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default App
