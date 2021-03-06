import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';



class Education extends Component {
    render() { 
        return(
            <Grid>
            <Cell col = {4}> 
                <p>{this.props.startYear} - {this.props.enYear}</p>
             </Cell>
            <Cell col = {8}> 
                <h4 style = {{marginTop: '0px'}}>{this.props.schoolName}</h4>
                <p>Field: {this.props.majorIn}</p>
                <p>Degree: {this.props.schoolDescription}</p>
                
             </Cell>
        </Grid>
        )
    }
}
 
export default Education;