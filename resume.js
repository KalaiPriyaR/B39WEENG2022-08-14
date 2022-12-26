var resumeObj = {
    firstName: 'Kalai Priya',
    lastName: 'Ravi',
    DOB: 'YYYY-MM-DD',
    role: 'Production Engineer',
    age: '24',
    location: 'chennai',
    nationality: 'india',
    skills: ['unix', 'Informatica', 'SQL', 'Splunk'],
    projects: [
      { name: 'Kaiser', langs: ['SQL', 'linux'] }
    ]
  }
  Object.keys(resumeObj).forEach((x) => console.log(x, resumeObj[x]));
  console.log(Object.values(resumeObj));