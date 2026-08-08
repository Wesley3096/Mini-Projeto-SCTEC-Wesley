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

]

class candidate {
    constructor (id, name, skills, experience) {
        this.id = id;
        this.name = name;
        this.skills = skills;
        this.experience = experience;
  }
      showinfo () {
        console.log (`Candidato: ${this.name}, Habilidades: ${this.skills.join(", ")}, Experiência: ${this.experience} anos`);

      }
    }

      class DeveloperFrontEnd extends candidate {
        constructor (id, name, skills, experience) {
            super (id, name, skills, experience);
        } 
  }

  const PedroCosta = new DeveloperFrontEnd ("candidate07", "Pedro Costa", ["Java", "Python","Git", "GitHub"], 1.5);

  const FernandaRocha = new DeveloperFrontEnd ("candidate08", "Fernanda Rocha", ["Java", "Python", "JavaScript","Jira"], 0.5);



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
   
});
 

  return approvedCandidates;
}

   for (const job of jobs) {
    const approvedCandidates = filterCandidatesBySkills(job.id);
    console.log(`Vaga: ${job.title}`);
    console.log('-----------------------------');
    console.log(`Candidatos aprovados: ${approvedCandidates.length}`);
    console.log(`Candidatos aprovados para a vaga "${job.title}" na empresa: ` + ` ${job.company}`);

    const calculateMatchPercentage = (candidateSkills, jobRequirements) => {
        const matchingSkills = jobRequirements.filter(skill => candidateSkills.includes(skill));
        return MatchPercentage = (matchingSkills.length / jobRequirements.length) * 100;
    };

    approvedCandidates.forEach(candidate => {
        const percentage = calculateMatchPercentage(candidate.skills, job.requirements);
     

        if (percentage >= 80) {
          console.log (`${candidate.name} - ${percentage.toFixed(1)}% - Alta compatibilidade`);
        }

        else if (percentage >= 50 && percentage < 80) {
          console.log (`${candidate.name} - ${percentage.toFixed(1)}% - Média compatibilidade - Sugiro estudar sobre as tecnologias exigidas na vaga`);
        }

        else {
          console.log (`${candidate.name} - ${percentage.toFixed(1)}% - Baixa compatibilidade - Sugiro estudar sobre as tecnologias exigidas na vaga`);
        }
  
            const missingSkills = job.requirements.filter(skill => !candidate.skills.includes (skill));
  console.log('-----------------------------');
    console.log (`${candidate.name} não possui as habilidades necessárias para a vaga ${job.title} na empresa ${job.company}. Habilidades necessárias: ${missingSkills.join(",")}`);

  return false;
    });
  }
  
  const searchCandidateByJob = (jobId) => {
    return new Promise ((resolve) => {
    setTimeout (() => {
      const approvedCandidates = filterCandidatesBySkills (jobId);
      resolve (approvedCandidates);
    }, 2000);
  });
}