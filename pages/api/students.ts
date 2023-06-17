export async function fetchAndCountStudents(url: string, name:string): Promise<number[] | null> {
    try {
      const response = await fetch(url);
      const unfiltereData = await response.json();
      const data = unfiltereData.filter((school:any)=>{
        school.school =name
      })


  
      const milestoneCounts: number[] = [0, 0, 0, 0, 0];
  
      // Count the number of students at each milestone level
      data.forEach((student: { milestones_achieved: number }) => {
        const milestone = student.milestones_achieved;
        if (milestone >= 0 && milestone <= 4) {
          milestoneCounts[milestone]++;
        }
      });
  
      return milestoneCounts;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  }
  