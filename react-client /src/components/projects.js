import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell,Card,CardActions, CardMenu, CardTitle, Button, IconButton, CardText } from 'react-mdl';


class Project extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className = "projects-grid">
                {/* React Project 1 */}
                <Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>
                <CardTitle style = {{color: '#fff', height: '176px', background: 
                'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>My Profile</CardTitle>
                <CardText>
                    This is a React Project and it applying the React MDL, CSS, HTML, Photoshop, and Bootstrap. 
                </CardText>
                <CardActions border>
                    <Button colored><a href="https://github.com/Esther12/MyProfile">GitHub</a></Button>
                    <Button colored><a href = "https://youtu.be/kJ7dTS9kAso">Live Demo</a></Button>
                </CardActions>
                <CardMenu style = {{color: '#fff'}}>
                <IconButton name = 'share'></IconButton>
                </CardMenu>
                </Card>

                {/* React Project 2 */}
                <Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>
                <CardTitle style = {{color: '#fff', height: '176px', background: 
                'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>React #2</CardTitle>
                <CardText>
                    This is a React Project and it using the React MDL, MongoDB, CSS, HTML, Uigradienrs, and BootstrapCDN.
                </CardText>
                <CardActions border>
                    <Button colored><a href = "/aboutme">GitHub</a></Button>
                    <Button colored><a href = "/aboutme">Live Demo</a></Button>
                </CardActions>
                <CardMenu style = {{color: '#fff'}}>
                <IconButton name = 'share'></IconButton>
                </CardMenu>
                </Card>

                {/* React Project 3 */}
                <Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>
                <CardTitle style = {{color: '#fff', height: '176px', background: 
                'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'}}>React #3</CardTitle>
                <CardText>
                    This is a React Project and it using the React MDL, MongoDB, CSS, HTML, Uigradienrs, and BootstrapCDN.
                </CardText>
                <CardActions border>
                    <Button colored><a href = "/aboutme">GitHub</a></Button>
                    <Button colored><a href = "/aboutme">Live Demo</a></Button>
                </CardActions>
                <CardMenu style = {{color: '#fff'}}>
                <IconButton name = 'share'></IconButton>
                </CardMenu>
                </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 1){
            return(
                <div className = "projects-grid">
                {/* Python Project 1 */}
                <Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>
                <CardTitle style = {{color: '#fff', height: '176px', background: 
                'url(https://res.cloudinary.com/teepublic/image/private/s--v2JODg9W--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1520050660/production/designs/2416585_0.jpg) center / cover'}}>Python #1</CardTitle>
                <CardText>
                    This is a webbased Python project designed by using DJango, JavaScript, HTML, CSS, and Bootstrap.
                </CardText>
                <CardActions border>
                    <Button colored><a href = "/aboutme">GitHub</a></Button>
                    <Button colored><a href = "/aboutme">Live Demo</a></Button>
                </CardActions>
                <CardMenu style = {{color: '#fff'}}>
                <IconButton name = 'share'></IconButton>
                </CardMenu>
                </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 2){
            return(
                <div className = "projects-grid">
                {/* C# Project 1 */}
                <Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>
                <CardTitle style = {{color: '#fff', height: '176px', background: 
                'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVUAAACUCAMAAAAUEUq5AAAAkFBMVEVoIXpeAHL///9iDnWulbbUyNhmHXlbAG9mG3hjEnZkFndfAHNYAG2fgKlgBHONY5pyN4Lk3OfZzt1SAGjBr8drKHz18faOZprq4+z6+PqJXJa9p8SqjbN5P4jv6/Gad6V9SYyWb6HMu9HSw9dLAGOgfqpxMIKBUY+0m7yymLrEs8p8R4t+TY2KXpfc09+5ocCQBqNtAAAEnklEQVR4nO3aC5OaOgCG4YRIAgEi1wCiiLqAa1X+/787AdzT04ud6Uw9tvV7ZnfQ1Z3Bd7IkwBICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw92H02XvwF2KLGFl/ObawUfWXQ9VHmKs6UkrnPz9VT9ufv8NU1TnneX6+ZeWSqFNI3Ofu1x/q1nCqSuPIttemo8OJ07cuSzu26Phzd/A3RzmR7OtEbj4PxlvVnaAucelqw9h6L7hwfN1JNr7+v+/un4HGoZsPW+ky6TqMEekSxtT7sp+yflT1qRTW4WC1u7LUftnFlk4tjwjdYMh+j0oHfxha+j5s180wsPaohiq8HqOlJB9V7eIa7Xxr6V+KJDglot68aZnYgeoj8ez9/z2xauiDYQhW/hCmInxPm2PoVUdRTSuq21hdN30nSulsan+990zV8QiwKpLDVj57/39PLM0Kv6ryxWYgw6Xddoe2vawrdcqmV+eqWyW5KPlclc5VuagdjaH6fc7KbeSqV8u2J6rN6XZFd1u6cvrVeMS8VQ2ysPPnqkHsm6qibhhbRBVWrnc4xKyXHLPSNxXNWn/8kuaHzjQNTVVZVRTFwY8JDw+UF1ocQtaWlfIsLK/u4p83fHTb8H/HKmGUUo+YB9wjRAjiceIK5i0xV92VbaYVP99kZiyOsmzahONA/MF1ABnoHnPVHW5gxb7Z+lYuqTUK0mljFfSHVd3TCucA95iq1paNVZem6opkZu7PZBqx8cEPr1kp594r4Abl2nL5rWovp+MqTSPxebaCn2bG6lt9ELeqZ+GNiyWV3iaiuSp3HOfnZvtXPzaYqv7Gyt25qr3f79XXVfmm7/vNz2TN0hfPaqpSOlh0rnqN4/FG1ZdVaVzE14U7Lb74HJd/LMi+PLbeRrTMyhdfc41Via/3b1PVRtDxOPp11Z1PXS5Y79BmQ81alZ8pbYg5WfB6Jl2PcLOKEJyLc2h+W6ielEK+dNepqtNYm3m2msfeN1UFlZ2O46SIdSUWUVzvD7G1ZE0Zl5/WB5pZTNRhqK+1LVhpX1mZbMtnfqrnEmyqSmhVz2PVF4J9U9WO7DgnVmZOXhPf8tdFklhB0tpJ/eltFTGdrPWO1Um09ZNiK6xQZDosycsuvLh1FFNVIvRUVde1rhhRp+KLsfp+ycOs9Im3PUSWWJw8oTs3v/rWwbbLt5rbu9PulFiCsGNlsvOs1N3rnne56cU9r8fP7zTHDZeLUW6Ol3k7R/l8JdDptJBtcRGlqao+qp6Xy55WQexH6dI3VdVQmTfwTMfHFz6uKkn4fIfKGe9dsdEU+TbSPqqat5mqKq3edmas7m9Vzd97QnvZ66MfFx6Nh0SUjWeZqmVSBrhKeM9UVZ12JnJ3pTzUuopoMDB67eRlT8NC14FLi41a7z3iXLUOlIwoya6iq8+4THjHfG6lppE7nmQJoSgZ765SThw1PhdyeuKOI5MK4U7vM9+cIuo9uA7wCKj6CKj6CKj6CPiv4EeQQfXi1/QeQiIqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwB/hH7HWTGll9VWsAAAAAElFTkSuQmCC) center / cover'}}>CRM System</CardTitle>
                <CardText>
                    This is a CRM system, and it built by using C#, ASP.NET, EntityFramework, SQLite, JavaScript, HTML, CSS, and Bootstrap.
                </CardText>
                <CardActions border>
                    <Button colored><a href="https://github.com/Esther12/CRM">GitHub</a></Button>
                    <Button colored><a href="https://www.youtube.com/watch?v=xItEZ2lbhi8&t=31s">Live Demo</a></Button>
                </CardActions>
                <CardMenu style = {{color: '#fff'}}>
                <IconButton name = 'share'></IconButton>
                </CardMenu>
                </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 3){
            return(
                <div className = "projects-grid">
                {/* Angular Project 1 */}
                <Card shadow = {5} style = {{minWidth: '450', margin: 'auto'}}>
                <CardTitle style = {{color: '#fff', height: '176px', background: 
                'url(https://res.cloudinary.com/teepublic/image/private/s--8O63P1gP--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1509564403/production/designs/2016815_1.jpg) center / cover'}}>Angular #1</CardTitle>
                <CardText>
                    This is a school regester system, and it built by using AngularJS, MySQL, JavaScript, HTML, CSS, and Bootstrap.
                </CardText>
                <CardActions border>
                    <Button colored><a href = "/aboutme">GitHub</a></Button>
                    <Button colored><a href = "/aboutme">Live Demo</a></Button>
                </CardActions>
                <CardMenu style = {{color: '#fff'}}>
                <IconButton name = 'share'></IconButton>
                </CardMenu>
                </Card>
                </div>
            )
        }
    }
    
    render() { 
        return ( 
            <div className = "category-tabs">
            <Tabs activeTab = {this.state.activeTab} onChange = {(tabId) => this.setState({ activeTab: tabId })} ripple>
            <Tab>React</Tab>
            <Tab>Python</Tab>
            <Tab>C#</Tab>
            <Tab>Angular</Tab>
            </Tabs> 

            <Grid>
                <Cell col = {12}>
                <div className = "content">{this.toggleCategories()}</div>
                </Cell>
            </Grid>

            </div>
         );
    }
}
 
export default Project;