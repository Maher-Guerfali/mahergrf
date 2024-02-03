import React from 'react';
//import Box from '@mui/material/Box';
import '../page1/skills.css';

interface SkillsProps {


  High?: string;
}


export const Skills = ({ High}: SkillsProps) => (
<div>
    <div className="contain1">
<div className="skills">Skills</div>
<div className="skills1">
   - React
</div>

<div className="skills1">
   - Unity
</div>
<div className="skills1">
   - Adobes
</div>
<div className="skills1">
   - Flutter
</div>
<div className="skills1">
   - 3dsMax
</div>


    </div>

</div>
);
