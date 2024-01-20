// pages/api/startDate.js

export default (req, res) => {
    if (req.method === 'POST') {
      const { initialData } = req.body;
  
      // Save the initialData to a variable, database, or wherever you want
      // For simplicity, let's store it in memory
      global.savedData = initialData;
  
      res.status(200).json({ message: 'Initial data saved successfully.' });
    } else if (req.method === 'GET') {
      // Retrieve the saved data
      const savedData = global.savedData || null;
  
      res.status(200).json({ initialData: savedData });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  };
  