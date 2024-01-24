// USING EDGE CONFIG ENDPOINTS

// https://edge-config.vercel.com/
// ecfg_1qhigiwu3auqiyfyw7rttzxfxsjn?
// token=f3e0befb-6581-4020-8585-02b8ae03ca10

// To get the data from edge config 
// const showData = async ()=>{
//     try {
//     // get data directly from api
//     let response = await fetch('https://edge-config.vercel.com/ecfg_1qhigiwu3auqiyfyw7rttzxfxsjn?token=f3e0befb-6581-4020-8585-02b8ae03ca10',
//       {
//                 method: 'GET',
//                 headers: {
//                   Authorization: `Bearer ${'f3e0befb-6581-4020-8585-02b8ae03ca10'}`,
//                   // Content-Type: 'application/json',
//                 },
//               })
//               if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
  
//      const result = await response.json();
//     console.log(result);
//     // console.log(result);
//     setdata(result.items)

//   }catch(err) {
//     setError (err.message)
//   }
//   };

// Request all items
// https://edge-config.vercel.com/
// ecfg_1qhigiwu3auqiyfyw7rttzxfxsjn?
// token=f3e0befb-6581-4020-8585-02b8ae03ca10
// 'https://edge-config.vercel.com/your_edge_config_id_here/items?token=your_edge_config_read_access_token_here',

// const getAllData = async() => {
//     try {
//         const readAllEdgeConfigItems = await fetch(
//           'https://edge-config.vercel.com/ecfg_1qhigiwu3auqiyfyw7rttzxfxsjn/items?token=f3e0befb-6581-4020-8585-02b8ae03ca10',
//         );
//         const result = await readAllEdgeConfigItems.json();
//         console.log(result);
//       } catch (error) {
//         console.log(error);
//       }
// }

// OOORRRR send auth in header 

// const getAllData = async() => {
//    try {
//   const readAllWithAuth = await fetch(
//     'https://edge-config.vercel.com/ecfg_1qhigiwu3auqiyfyw7rttzxfxsjn/items',
//     {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${'f3e0befb-6581-4020-8585-02b8ae03ca10'}`,
//       },
//     },
//   );
//   const result = await readAllWithAuth.json();
//   console.log(result);
// } catch (error) {
//   console.log(error);
// }
// }

// Read single item
// try {
//     const readSingle = await fetch(
//       'https://edge-config.vercel.com/your_edge_config_id_here/item/example_key_1?token=your_edge_config_read_access_token_here',
//     );
//     const result = await readSingle.json();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }

// Read edge config digest 
// try {
//     const readDigest = await fetch(
//       'https://edge-config.vercel.com/your_edge_config_id_here/digest?teamId=your_team_id_here&token=your_edge_config_read_access_token_here',
//     );
//     const result = await readDigest.json();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
















// USING VERCEL API ENDPOINTS
// The auth token used here is diffrent from what is used with above apis
// eyUyJwDlIMAKkT4OWvqu0jWY
// Need to create this from account setting > create token

// To update your edge config items
// To add an item to or update an item in your Edge Config, send a PATCH request to the edge-config endpoint, appending /your_edge_config_id_here/items to the end.

// 'https://api.vercel.com/v1/edge-config/ecfg_1qhigiwu3auqiyfyw7rttzxfxsjn?token=f3e0befb-6581-4020-8585-02b8ae03ca10/timer
// {
//   "items": [
//     {
//       "operation": "create",
//       "key": "example_key_1",
//       "value": "example_value_1"
//     },
//     {
//       "operation": "update",
//       "key": "example_key_2",
//       "value": "new_value"
//     }
//   ]
// }

// try {
//     const updateEdgeConfig = await fetch(
//       'https://api.vercel.com/v1/edge-config/your_edge_config_id_here/items',
//       {
//         method: 'PATCH',
//         headers: {
//           Authorization: `Bearer ${your_vercel_api_token_here}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           items: [
//             {
//               operation: 'create',
//               key: 'example_key_1',
//               value: 'example_value_1',
//             },
//             {
//               operation: 'update',
//               key: 'example_key_2',
//               value: 'new_value',
//             },
//           ],
//         }),
//       },
//     );
//     const result = await updateEdgeConfig.json();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }

// try {
//     const updateEdgeConfig = await fetch(
//       'https://api.vercel.com/v1/edge-config/ecfg_1qhigiwu3auqiyfyw7rttzxfxsjn?token=f3e0befb-6581-4020-8585-02b8ae03ca10/timer',
//       {
//         method: 'PATCH',
//         headers: {
//           Authorization: `Bearer ${'f3e0befb-6581-4020-8585-02b8ae03ca10'}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           items: [
//             {
//               operation: 'create',
//               key: 'timer',
//               value: '30',
//             },

//           ],
//         }),
//       },
//     );
//     const result = await updateEdgeConfig.json();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }


// Read All items from edge config with api.vercel.com
// 'https://api.vercel.com/v1/edge-config/your_edge_config_id_here/items';
// ecfg_1qhigiwu3auqiyfyw7rttzxfxsjn?token=f3e0befb-6581-4020-8585-02b8ae03ca10

// try {
//     const readItems = await fetch(
//       'https://api.vercel.com/v1/edge-config/ecfg_1qhigiwu3auqiyfyw7rttzxfxsjn?token=f3e0befb-6581-4020-8585-02b8ae03ca10/items',
//       {
//         method: 'GET',
//         headers: {
//           Authorization: `Bearer ${'f3e0befb-6581-4020-8585-02b8ae03ca10'}`,
//         },
//       },
//     );
//     const result = await readItems.json();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }


// List all edge configs
// try {
//     const listItems = await fetch(
//       'https://api.vercel.com/v1/edge-config?teamId=your_team_id_here',
//       {
//         method: 'GET',
//         headers: {
//           Authorization: `Bearer ${your_vercel_api_token_here}`,
//         },
//       },
//     );
//     const result = await listItems.json();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }


//   Read metadata of edge config
// try {
//     const readMetadata = await fetch(
//       'https://api.vercel.com/v1/edge-config/your_edge_config_id_here?teamId=your_team_id_here',
//       {
//         method: 'GET',
//         headers: {
//           Authorization: `Bearer ${your_vercel_api_token_here}`,
//         },
//       },
//     );
//     const result = await readMetadata.json();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }

// export {
//     // update, 
//     // result,
// }


// working set of functions for read and write
// const showData = async () => {
//     try {
//       let response = await fetch('https://edge-config.vercel.com/ecfg_1qhigiwu3auqiyfyw7rttzxfxsjn',
//         {
//           method: 'GET',
//           headers: {
//             Authorization: `Bearer ${'f3e0befb-6581-4020-8585-02b8ae03ca10'}`,
//             // Content-Type: 'application/json',
//           },
//         })
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const result = await response.json();
//       console.log(result);
//       // console.log(result);
//       setdata(result.items)

//     } catch (err) {
//       setError(err.message)
//     }
//   };

// const addData = async () => {
//     try {
//       let response = await fetch('https://api.vercel.com/v1/edge-config/ecfg_1qhigiwu3auqiyfyw7rttzxfxsjn/items',
//         {
//           method: 'PATCH',
//           headers: {
//             Authorization: `Bearer ${'eyUyJwDlIMAKkT4OWvqu0jWY'}`,
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//                       items: [
//                         {
//                           operation: 'create',
//                           key: 'example_key_1',
//                           value: 'example_value_1',
//                         },
//                       ],
//                     }),
//         })

//       const result = await response.json();
//       console.log(result);
//       // console.log(result);
//       setdata(result)

//     } catch (err) {
//       setError(err.message)
//     }
//   };
