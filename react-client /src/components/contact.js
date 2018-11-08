import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() { 
        return ( 
            <div className = "contact-body">
                <Grid className = "contact-grid">
                <Cell col = {6}>
                    <h2>Yating(Esther) Su</h2>
                    <img 
                    src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/laly_face_woman-512.png"
                    alt="avatar"
                    style={{height: "250px"}}></img>
                    <p syle = {{width: '75%', margin:'aito',paddingTop: '1em'}}>I am very optimistic, as I see setbacks as opportunities to learn and grow.
                     There is always a creative solution to a problem, and I love searching for it. Moreover,I am extremely organized and excellent at time
                      management. </p>
                </Cell>
                <Cell col = {6}>
                    <h2> Contact Me </h2>
                    <hr/>
                    <div className = 'contact-list'>
                    <List>
                        <ListItem>
                            <ListItemContent style = {{fontSize: '25px', fontFamily: 'Anton'}}>
                            <i className = 'fa fa-phone-square' aria-hidden = 'true'></i>
                            (519)566-2007
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style = {{fontSize: '25px', fontFamily: 'Anton'}}>
                            <i class="fas fa-envelope-square"></i>
                            yating_su@outlook.com
                            </ListItemContent>
                        </ListItem>
                    </List>
                    </div>
                </Cell>
                </Grid>
            </div>
         );
    }
}
 
export default Contact;