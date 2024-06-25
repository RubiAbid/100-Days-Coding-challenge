/*           Question 53:
 Pulling Apart a Nested Object: Imagine you have a list inside another list that shows
  what a computer programmer knows, like coding languages, tools, and software frameworks.
   Find a way to get three specific skills from this list and show them.*/


   // Nested object representing a programmer's skills
let programmerSkills = {
    codingLanguages: ["JavaScript", "Python", "TypeScript"],
    tools: ["Visual Studio Code", "Git", "Postman"],
    frameworks: ["React", "Node.js", "Express.js"]
  };
  
  // Accessing three specific skills
  let { codingLanguages, tools, frameworks } = programmerSkills;
  let specificSkills = {
    skill1: codingLanguages[0],   // First coding language
    skill2: tools[1],             // Second tool
    skill3: frameworks[2]         // Third framework
  };
  
  // Displaying the specific skills
  console.log(`Three specific skills:
  1. ${specificSkills.skill1}
  2. ${specificSkills.skill2}
  3. ${specificSkills.skill3}`);
  