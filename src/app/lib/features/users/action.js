const addLRAction=async ()=>{
  try {
    console.log('LR Entry Data:', lrEntryData);

        // Send data to backend
        const response = await axios.post('/api/LREntry', lrEntryData);
  } catch (error) {
      console.error('Error:', error.message);
        alert('Failed to add LR Entry: ' + error.message);
  }
}
