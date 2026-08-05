const jobs = [
   {id: "01",
    title: "Desenvolvedor Front-End Jr 1",
    company: "FrontCode",
    requirements: ["HTML", "CSS", "JavaScript", "Git", "GitHub", "Trello"],
    experience: 1,  
},
        {id :"02",
        title : "Desenvolvedor Front-End Jr 2",
        company : "SkySoft",
        requirements : ["HTML", "CSS", "JavaScript", "React", "Git", "GitHub", "TypeScript"],
    experience : 3,
    },

        {id: "03",
         title: "Desenvolvedor Front-End Jr 3",
         company:"Infinity Software",
         requirements: ["HTML", "CSS", "JavaScript", "React", "Git", "GitHub", "Jira"],
         experience:1,
         },

        { id: "04",
          title:"Desenvolvedor Front-End Jr 4",
          company : "BlueLogic",
          requirements : ["HTML", "CSS", "JavaScript", "React", "Vite", "Git", "GitHub"],
          experience: 2,
        },


];

const candidates = [
    {id: "candidate01",
     name: "João Silva",
     skills: ["HTML", "CSS", "JavaScript", "React", "Git", "GitHub"],
     experience: 2,
    },

    {id: "candidate02",
     name : "Maria Souza",
     skills : ["HTML", "CSS", "JavaScript", "React", "Git", "GitHub", "TypeScript"],
     experience : 3,
    },

    {id:"candidate03", 
    name : "Lucas Santos",
    skills : ["Node", "Python", "Git", "GitHub"],
    experience : 5,
    },

    {id: "candidate04",
     name : "Bruno Fernandes",
     skills : ["HTML", "CSS", "JavaScript", "React", "Vite", "Git", "GitHub"],
     experience : 2,
    },

    {id: "candidate05",
     name : "Ana Oliveira",
     skills : ["HTML", "CSS", "JavaScript", "React", "Git", "GitHub", "TypeScript"],
     experience : 6,
    },

    {id: "candidate06",
     name : "Carla Lima",
     skills : ["HTML", "CSS", "JavaScript", "React", "Git", "GitHub", "Trello"],
     experience : 0.4,
    },

    {id: "candidate07",
     name : "Pedro Costa",
     skills : ["Java", "Python","Git", "GitHub"],
     experience : 1.5,

    },

    {id: "candidate08",
     name : "Fernanda Rocha",
     skills : ["Java", "Python", "JavaScript","Jira"],
     experience : 0.5,
    },

]

const filterCandidatesBySkills = (jobId) => {

    const job = jobs.find(job => job.id === jobId);

    if (!job) {
        console.log("Vaga não encontrada.");
        return [];
    
}



const approvedCandidates = candidates.filter(candidate => {
  if (
    candidate.experience >= job.experience &&
    candidate.skills.includes("HTML") &&
    candidate.skills.includes("CSS") &&
    candidate.skills.includes("JavaScript") &&
    candidate.skills.includes("Git") &&
    candidate.skills.includes("GitHub")
  ){
    return true;
    }
    return false;
});

  return approvedCandidates;
}

for (const job of jobs) {
    const approvedCandidates = filterCandidatesBySkills(job.id);
    console.log(`Vaga: ${job.title}`);
    console.log(`Candidatos aprovados: ${approvedCandidates.length}`);
    console.log('-----------------------------');
    console.log(`Candidatos aprovados para a vaga "${job.title}" na empresa: ` + ` ${job.company}`);
    approvedCandidates.forEach(candidate => {
        console.log(`- ${candidate.name}`);
    });
}