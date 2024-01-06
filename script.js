function guideMe() {
    const ageInput = document.getElementById('ageInput');
    const totalEnergyElement = document.getElementById('totalEnergy');
    const energyTasksElement = document.getElementById('energyTasks');
  
    const age = parseInt(ageInput.value);
  
    if (!isNaN(age)) {
      const totalEnergy = calculateTotalEnergy(age);
      const energyTasks = calculateEnergyTasks(totalEnergy);
  
      totalEnergyElement.textContent = `Total Energy for the Day: ${totalEnergy} kcal`;
      energyTasksElement.innerHTML = "<strong>Recommended Energy Distribution:</strong>";
      
      energyTasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = `${task.activity}: ${task.energy} kcal`;
        energyTasksElement.appendChild(listItem);
      });
  
      document.getElementById('guideMeSection').style.display = 'block';
      document.getElementById('showMyEnergySection').style.display = 'none';
    } else {
      alert('Please enter a valid age.');
    }
  }
  
  function showMyEnergy() {
    document.getElementById('guideMeSection').style.display = 'none';
    document.getElementById('showMyEnergySection').style.display = 'block';
    document.getElementById('activityForm').style.display = 'block';
    document.getElementById('usedEnergy').textContent = '';
  }
  
  function calculateUsedEnergy() {
    const ageInput = document.getElementById('ageInput');
    const activitySelect = document.getElementById('activitySelect');
    const timeSpentInput = document.getElementById('timeSpentInput');
    const usedEnergyElement = document.getElementById('usedEnergy');
  
    const age = parseInt(ageInput.value);
    const activity = activitySelect.value;
    const timeSpent = parseInt(timeSpentInput.value);
  
    if (!isNaN(age) && !isNaN(timeSpent)) {
      const energy = calculateTotalEnergy(age);
      const recommendedEnergy = calculateEnergyTasks(energy).find(task => task.activity === activity).energy;
      const usedEnergy = Math.round((timeSpent / 60) * recommendedEnergy);
  
      usedEnergyElement.textContent = `You used ${usedEnergy} kcal for ${activity} (Recommended: ${recommendedEnergy} kcal).`;
    } else {
      alert('Please enter valid values.');
    }
  }
  
  function calculateTotalEnergy(age) {
    // Simplified formula for illustration purposes, a real-world app may use more complex calculations.
    return age * 10;
  }
  
  function calculateEnergyTasks(totalEnergy) {
    // Simplified tasks and energy distribution for illustration purposes.
    return [
      { activity: 'Exercise', energy: Math.round(totalEnergy * 0.3) },
      { activity: 'Breakfast', energy: Math.round(totalEnergy * 0.15) },
      { activity: 'Social Media', energy: Math.round(totalEnergy * 0.05) },
      { activity: 'Work', energy: Math.round(totalEnergy * 0.2) },
      { activity: 'Lunch', energy: Math.round(totalEnergy * 0.15) },
      { activity: 'Relax', energy: Math.round(totalEnergy * 0.1) },
      { activity: 'Sports', energy: Math.round(totalEnergy * 0.2) },
      { activity: 'Travel', energy: Math.round(totalEnergy * 0.1) },
      { activity: 'Dinner', energy: Math.round(totalEnergy * 0.15) },
      { activity: 'With Phone', energy: Math.round(totalEnergy * 0.05) },
      { activity: 'On Books', energy: Math.round(totalEnergy * 0.1) },
    ];
  }
  