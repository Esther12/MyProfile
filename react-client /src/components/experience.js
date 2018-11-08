import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
    render() { 
        return ( 
        <Grid>
            <Cell col = {4}> 
                <p>{this.props.startYear} - {this.props.enYear}</p>
             </Cell>
            <Cell col = {8}> 
                <h4 style = {{marginTop: '0px'}}>{this.props.companyName}</h4>
                <p>{this.props.position}</p>
                <p>{this.props.JobDescription}</p>
                
             </Cell>
        </Grid>
         );
    }
}
 
export default Experience;