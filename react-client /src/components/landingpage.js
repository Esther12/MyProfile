import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() { 
        return ( 
            <div style={{width: '100%', margin:'auto'}}>
                <Grid className = "landing-grid">
                    <Cell col={12}>
                    <img
                       src = 'https://image.flaticon.com/icons/svg/219/219971.svg'
                        alt = "avatar"
                        className = "avatar-img"
                    />
                    <div className = 'banner-text'>
                        <h1>   Full stack developer</h1>
                        <hr></hr>
                        <p>
                            HTML/CSS | Bootstrap | JavaScript | React | NodeJS | MangoDB | MySQL
                        </p>
                        <div className = "social-links">
                        {/** LinkedIn */}
                        <a href = 'http://google.com' rel = "noopener noreferrer" target = "_blank">
                        <i className = "fab fa-linkedin"/>
                        </a>
                        {/** Github */}
                        <a href = 'http://google.com' rel = "noopener noreferrer" target = "_blank">
                        <i class="fab fa-github-square"></i>
                        </a>
                        {/** Youtube */}
                        <a href = 'http://google.com' rel = "noopener noreferrer" target = "_blank">
                        <i class="fab fa-youtube-square"></i>
                        </a>
                        </div>
                    </div>
                    </Cell>
                </Grid> 
            </div>
         )
    }
}
 
export default Landing;
