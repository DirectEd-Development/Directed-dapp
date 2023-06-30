export async function fetchAndCountStudents(url: string, name:string): Promise<number[] | null> {
  console.log("Fetching...")
    try {
      const response = await fetch(url);
      console.log("response", response)
      const unfiltereData = await response.json();
      const data = unfiltereData.filter((school:any)=>{
        school.school =name
      })


  
      const milestoneCounts: number[] = [0, 0, 0, 0, 0];
  
      // Count the number of students at each milestone levels
      data.forEach((student: { milestones_achieved: number }) => {
        const milestone = student.milestones_achieved;
        if (milestone >= 0 && milestone <= 4) {
          milestoneCounts[milestone]++;
        }
      });
  
      return milestoneCounts;
    } catch (error) {
      console.error('Error here:', error);
      return null;
    }
  }
  