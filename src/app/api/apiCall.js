
// const update = async()=>{
//   try {
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
// };



// const result = await fetch(
// 	'https://api.vercel.com/v1/edge-config/your_edge_config_id_here/items',
// 	{
// 		method: 'PATCH',
// 		headers: {
// 			Authorization: `Bearer ${process.env.VERCEL_ACCESS_TOKEN}`,
// 			'content-type': 'application/json',
// 		},
// 		body: JSON.stringify({
// 			items: [
// 				{
// 					operation: 'update',
// 					key: 'greeting',
// 					value: 'hello vercel',
// 				},
// 			],
// 		}),
// 	}
// );
// const json = await result.json();
// if (json.status !== 'ok') {
// 	console.error('Failed to update edge config', json);
// }

// export {update, result}