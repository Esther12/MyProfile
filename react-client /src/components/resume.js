import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skill from './skills';

class Resume extends Component {
    render() { 
        return ( 
            <div>
                <Grid>
                    <Cell col = {4}>
                    <div style = {{textAlign: 'center'}}>
                        <img
                            src = "https://image.flaticon.com/icons/svg/219/219971.svg"
                            alt = 'avatar'
                            style = {{height:'200px'}}
                            >
                            </img>
                    </div>

                    <h2 style = {{paddingTop: '2em'}}>Yating(Esther) Su</h2>
                    <h4 style = {{color: 'grey'}}>Full Stack Developer</h4>
                    <hr style = {{borderTop: '3px solid #833fb2', width: '70%'}}/>
                    <p>
                    I will be an active member in all Agile team ceremonies and collaborating with the teams; 
                    building codes and providing code reviews; and performing other duties assigned to me
                    </p>
                    <hr style = {{borderTop: '3px solid #833fb2', width: '70%'}}/>
                    <h5>Address</h5>
                    <p>381 Beverley Glen Blvd. Thronhill L4J 7S5</p>
                    <h5>Phone</h5>
                    <p>(519)566-2007</p>
                    <h5>Email</h5>
                    <p>yating_su@outlook.com</p>
                    <hr style = {{borderTop: '3px solid #833fb2', width: '70%'}}/>
                    </Cell>
                    <Cell className = 'resume-right-col'col = {8}> 
                        <h2>Education</h2>
                        <Education
                            startYear = {2011}
                            enYear = {2015}
                            schoolName = "Inner Mongolia Normal University"
                            majorIn = 'Electrical Engineering'
                            schoolDescription = "Bachelor Degree"
                        />
                       <Education
                            startYear = {2016}
                            enYear = {2018}
                            schoolName =  "University of Windsor"
                            majorIn = 'Applied Computing'
                            schoolDescription = "Master Degree"
                        />
                        <hr style = {{borderTop: '3px solid #e22947'}}/>
                        <h2>Experience</h2>
                        <Experience
                            startYear = {2014}
                            enYear ={2014}
                            companyName = "Dalian "
                            position = "Software Developer"
                            jobDescription = ""
                        />
                        <Experience
                            startYear = {2014}
                            enYear ={2014}
                            companyName = "Dalian "
                            position = "Software Developer"
                            jobDescription = ""
                        />
                        <hr style = {{borderTop: '3px solid #e22947'}}/>
                        <Skill
                            skill = "JavaScript"
                            progress = {80}
                        />
                        <Skill
                            skill = "ReactJs"
                            progress = {50}
                        />
                        <Skill
                            skill = "HTML/CSS"
                            progress = {80}
                        />
                        <Skill
                            skill = "Angular"
                            progress = {50}
                        />
                        <Skill
                            skill = "Node.js"
                            progress = {75}
                        />
                        <Skill
                            skill = "MySQL"
                            progress = {65}
                        />
                        <Skill
                            skill = "MangoDB"
                            progress = {65}
                        />
                        <Skill
                            skill = "Python"
                            progress = {70}
                        />

                        <Skill
                            skill = "C#, ASP.Net, EntityFramework"
                            progress = {60}
                        />


                    </Cell>
                </Grid>
            </div>
         );
    }
}
 
export default Resume;