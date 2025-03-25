import {useState} from 'react';
import {Box, Drawer, Button, List, ListItem, ListItemButton, ListItemText, Skeleton } from '@mui/material';
import { useNavigate, useLocation  } from 'react-router';
import "./navBar.css"

interface PortfolioRoute {
    routeName: string,
    routePath: string
}

export function NavBar() {
    const [open, setOpen] = useState(false);
    
    const nav = useNavigate();
    const location = useLocation();
    const { pathname } = location;

    const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
    };
  
    const navArr = [
        {
            pageName: "Portfolio",
            path: "/"
        },
        {
            pageName: "About Me",
            path: "/about"
        }
    ];

    function MakePageTitle(path: string) {
        if(path == "/"){
            return <h2>Evan Holloway's Portfolio</h2>
        }
        if(path == "/about"){
          return <h2>About Evan Holloway</h2>
        }
    }

    const DrawerList = (
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <List>
          {navArr.map(obj => (
            <ListItem key={obj.pageName} disablePadding>
              <ListItemButton onClick={() => {nav(obj.path)}}>
                <ListItemText primary={obj.pageName} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );

    return (
        <div className="navBar">
            {MakePageTitle(pathname) ?? <Skeleton animation="wave" />}
            <Button onClick={toggleDrawer(true)}>More Links</Button>
            <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
                {DrawerList}
            </Drawer>
        </div>
    );
}
