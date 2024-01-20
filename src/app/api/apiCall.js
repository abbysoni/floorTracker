const fetchData = async () => {
try {
    const createReadAccessToken = await fetch(
      'https://api.vercel.com/v1/edge-config/my_edge_config_id/token',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${"f3e0befb-6581-4020-8585-02b8ae03ca10"}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          label: 'Greetings',
        }),
      },
    );
    const result = await createReadAccessToken.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

//   const fetchData = async () => {
//     try {
//       // Fetch initial data from the API endpoint
//       const response = await fetch('./api/startData');
  
//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
  
//       // Assuming your data is in JSON format
//       const data = await response.json();
  
//       return { initialData: data.initialData };
//     } catch (error) {
//       console.error('Error fetching data:', error.message);
//       return { initialData: null }; // Handle error appropriately
//     }
//   };

//   const [initialData, setInitialData] = useState(JSON.parse(localStorage.getItem('floorTrackerData')) || []);

// useEffect(() => {
//     // Fetch initial data from the API endpoint
//     fetchData()
//       .then((data) => {
//         setInitialData(data.initialData);
//       });
//   }, []);