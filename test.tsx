// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const testArr = [
//     ['PPJ/PACSUN/21/418.1', '14B/REGULAR', '14/REGULAR', 'BREEZEWAY BLUEH', 'BREEZEWAY BLUEH', '784BT212006-BREEZEWAY BLUEH', 'DNM/PANTS/6933', 78, 0, 0, 0],
//     [],
//     [],
//     [],
//     [],
//   ]
//   const listArray = [
//     {
//       "ocNumber": "PPJ/PACSUN/21/418.1",
//       "sizeCode": "14B/REGULAR",
//       "sizeName": "14/REGULAR",
//       "colorCode": "BREEZEWAY BLUEH",
//       "colorName": "BREEZEWAY BLUEH",
//       "styleName": "784BT212006-BREEZEWAY BLUEH",
//       "styleCode": "DNM/PANTS/6933",
//       "orderQty": 78,
//       "offeredQty": 0,
//       "inspectionQty": 0,
//       "acceptedQty": 0
//     },
//     {
//       "ocNumber": "PPJ/URBAN/21/11.1",
//       "sizeCode": "24B/REGULAR",
//       "sizeName": "24/REGULAR",
//       "colorCode": "EARL GREY",
//       "colorName": "EARL GREY",
//       "styleName": "OB1102336 -EARL GREY-LOT 1",
//       "styleCode": "DNM/PANTS/8170",
//       "orderQty": 15,
//       "offeredQty": 14,
//       "inspectionQty": 0,
//       "acceptedQty": 0
//     },
//     {
//       "ocNumber": "PPJ/URBAN/21/11.1",
//       "sizeCode": "25B/REGULAR",
//       "sizeName": "25/REGULAR",
//       "colorCode": "EARL GREY",
//       "colorName": "EARL GREY",
//       "styleName": "OB1102336 -EARL GREY-LOT 1",
//       "styleCode": "DNM/PANTS/8170",
//       "orderQty": 19,
//       "offeredQty": 18,
//       "inspectionQty": 0,
//       "acceptedQty": 0
//     },
//     {
//       "ocNumber": "PPJ/URBAN/21/11.1",
//       "sizeCode": "26B/REGULAR",
//       "sizeName": "26/REGULAR",
//       "colorCode": "EARL GREY",
//       "colorName": "EARL GREY",
//       "styleName": "OB1102336 -EARL GREY-LOT 1",
//       "styleCode": "DNM/PANTS/8170",
//       "orderQty": 24,
//       "offeredQty": 23,
//       "inspectionQty": 0,
//       "acceptedQty": 0
//     },
//     {
//       "ocNumber": "PPJ/URBAN/21/11.1",
//       "sizeCode": "27B/REGULAR",
//       "sizeName": "27/REGULAR",
//       "colorCode": "EARL GREY",
//       "colorName": "EARL GREY",
//       "styleName": "OB1102336 -EARL GREY-LOT 1",
//       "styleCode": "DNM/PANTS/8170",
//       "orderQty": 28,
//       "offeredQty": 27,
//       "inspectionQty": 0,
//       "acceptedQty": 0
//     },
//     {
//       "ocNumber": "PPJ/URBAN/21/11.1",
//       "sizeCode": "28B/REGULAR",
//       "sizeName": "28/REGULAR",
//       "colorCode": "EARL GREY",
//       "colorName": "EARL GREY",
//       "styleName": "OB1102336 -EARL GREY-LOT 1",
//       "styleCode": "DNM/PANTS/8170",
//       "orderQty": 44,
//       "offeredQty": 25,
//       "inspectionQty": 0,
//       "acceptedQty": 0
//     },
//     {
//       "ocNumber": "PPJ/URBAN/21/11.1",
//       "sizeCode": "29B/REGULAR",
//       "sizeName": "29/REGULAR",
//       "colorCode": "EARL GREY",
//       "colorName": "EARL GREY",
//       "styleName": "OB1102336 -EARL GREY-LOT 1",
//       "styleCode": "DNM/PANTS/8170",
//       "orderQty": 22,
//       "offeredQty": 21,
//       "inspectionQty": 0,
//       "acceptedQty": 0
//     },
//     {
//       "ocNumber": "PPJ/URBAN/21/11.1",
//       "sizeCode": "30B/REGULAR",
//       "sizeName": "30/REGULAR",
//       "colorCode": "EARL GREY",
//       "colorName": "EARL GREY",
//       "styleName": "OB1102336 -EARL GREY-LOT 1",
//       "styleCode": "DNM/PANTS/8170",
//       "orderQty": 18,
//       "offeredQty": 17,
//       "inspectionQty": 0,
//       "acceptedQty": 0
//     },
//     {
//       "ocNumber": "PPJ/URBAN/21/11.1",
//       "sizeCode": "31B/REGULAR",
//       "sizeName": "31/REGULAR",
//       "colorCode": "EARL GREY",
//       "colorName": "EARL GREY",
//       "styleName": "OB1102336 -EARL GREY-LOT 1",
//       "styleCode": "DNM/PANTS/8170",
//       "orderQty": 17,
//       "offeredQty": 17,
//       "inspectionQty": 0,
//       "acceptedQty": 0
//     },
//     {
//       "ocNumber": "PPJ/URBAN/21/11.1",
//       "sizeCode": "32B/REGULAR",
//       "sizeName": "32/REGULAR",
//       "colorCode": "EARL GREY",
//       "colorName": "EARL GREY",
//       "styleName": "OB1102336 -EARL GREY-LOT 1",
//       "styleCode": "DNM/PANTS/8170",
//       "orderQty": 13,
//       "offeredQty": 13,
//       "inspectionQty": 0,
//       "acceptedQty": 0
//     },
//     {
//       "ocNumber": "AAAAAAAAA",
//       "sizeCode": "31B/REGULAR",
//       "sizeName": "31/REGULAR",
//       "colorCode": "EARL GREY",
//       "colorName": "EARL GREY",
//       "styleName": "OB1102336 -EARL GREY-LOT 1",
//       "styleCode": "DNM/PANTS/8170",
//       "orderQty": 17,
//       "offeredQty": 18,
//       "inspectionQty": 0,
//       "acceptedQty": 0
//     },
//     {
//       "ocNumber": "PPJ/URBAN/21/11.1",
//       "sizeCode": "31B/REGULAR",
//       "sizeName": "31/REGULAR",
//       "colorCode": "EARL WHITE",
//       "colorName": "EARL WHITE",
//       "styleName": "OB1102336 -EARL GREY-LOT 1",
//       "styleCode": "DNM/PANTS/8170",
//       "orderQty": 30,
//       "offeredQty": 30,
//       "inspectionQty": 5,
//       "acceptedQty": 5
//     },
//   ];
//   // ocnumber
//   // color name
//   // style name
//   const test = listArray.map((item, index) => [
//     item.ocNumber, item.sizeCode, item.sizeName, item.colorCode, item.colorName, item.styleName, item.styleCode, item.orderQty, item.offeredQty, item.inspectionQty, item.acceptedQty
//   ])
//   // console.log(listArray, 'listArray');
//   // console.log(test, 'test');
//   const body = listArray.map((item) => item.ocNumber);
//   const convertBody = body.filter((item, index) => body.indexOf(item) === index);


//   const bodyocNumber = listArray.map((item) => item.ocNumber);
//   const convertBodyocNumber = bodyocNumber.filter((item, index) => bodyocNumber.indexOf(item) === index);
//   const bodysizeCode = listArray.map((item) => item.sizeCode);
//   const convertBodysizeCode = bodysizeCode.filter((item, index) => bodysizeCode.indexOf(item) === index);
//   const bodycolorCode = listArray.map((item) => item.colorCode);
//   const convertBodycolorCode = bodycolorCode.filter((item, index) => bodycolorCode.indexOf(item) === index);

//   const groupBy = () => {
//     console.log(listArray, 'listArray');
    
//     let resultAll: any[] = [];
//     convertBodyocNumber.forEach((itemOc) => {
//       convertBodysizeCode.forEach((itemSize) => {
//         convertBodycolorCode.forEach((itemColor) => {
//           if (resultAll) {
//             [...resultAll].forEach((itemResult) => {
//               if (!(itemResult.ocNumber === itemOc && itemResult.sizeCode === itemSize && itemResult.colorCode === itemColor)) {
//                 const resultItem = {
//                   ocNumber: itemOc,
//                   sizeCode: itemSize,
//                   colorCode: itemColor,
//                 }
//                 resultAll.push(resultItem);
//                 console.log('push');
//               }
//             })
//           }
//         })
//       })
//     });
//     return resultAll
//   }
// console.log(groupBy(), 'group');

//   // const bodyBycolorCode = listArray.map((item) => item.colorCode);
//   // const convertBodyColorCode = bodyBycolorCode.filter((item, index) => bodyBycolorCode.indexOf(item) === index);

//   // const sortByColorCodeAndOcName = convertBodyColorCode.map((itemColorCode, index) => {
//   //   const getRowByColorCode = sortByOcName.map((ocItem) => {
//   //     ocItem.map((item) => listArray.filter((mainList) => mainList.ocNumber === item);

//   //   })
//   // })
//   // const sortByColorCodeAndOcName = sortByOcName.map((ocItem) => {
//   //   const getRowByColorCode = ocItem.map((item) => item.colorCode);
//   //   const convertgetRowByColorCode = getRowByColorCode.filter((item, index) => body.indexOf(item) === index);

//   //   return ocItem.filter((item) => item.sizeCode === )
//   // })

//   const underHeader = listArray.map((item) => ({
//     ocNumber: item.ocNumber,
//     sizeName: item.sizeName,
//   }));

//   const childUnderHeader = ['orderQty', 'offeredQty', 'inspectionQty'];

//   const getDta = (itemOcNumber: string, itemSizeNumber: string) => {
//     const result = listArray.find((item) => item.ocNumber === itemOcNumber && item.sizeName === itemSizeNumber)
//     return result;
//   };

//   const totalByCol = (sizeName: string, colName: string) => {
//     const result = listArray.filter((item) => item.sizeName === sizeName);
//     if (colName === 'orderQty') {
//       const total = result.map((item) => item.orderQty).reduce((a, b) => a + b);
//       return total
//     }
//     if (colName === 'offeredQty') {
//       const total = result.map((item) => item.offeredQty).reduce((a, b) => a + b);
//       return total
//     }
//     const total = result.map((item) => item.inspectionQty).reduce((a, b) => a + b);
//     return total
//   };

//   return (
//     <div>
//       <table className="tg">
//         <thead>
//           <tr>
//             <th className="tg-0lax" rowSpan={2}></th>
//             {
//               underHeader.map((item, index) => (
//                 <th className="tg-0lax" key={`${item.sizeName + index}`} colSpan={3}>{item.sizeName}</th>
//               ))
//             }
//             <th className="tg-0lax" rowSpan={2}>total</th>
//           </tr>
//           <tr>
//             {
//               underHeader.map((item) => (
//                 <>
//                   <th className="tg-0lax">OrderQty</th>
//                   <th className="tg-0lax">OfferedQty</th>
//                   <th className="tg-0lax">InspectionQty</th>
//                 </>
//               ))
//             }
//           </tr>
//         </thead>
//         <tbody>
//           {
//             convertBody.map((itemOcNumber, indexOcNumber) => (
//               <tr key={`${itemOcNumber}`}>
//                 <td className="tg-0lax">{itemOcNumber}</td>
//                 {
//                   underHeader.map((itemSizeName, indexSizeNumber) => (
//                     <>
//                       <td className="tg-0lax" onClick={() => console.log(itemOcNumber, itemSizeName, 'detals')}>{getDta(itemOcNumber, itemSizeName.sizeName)?.orderQty}</td>
//                       <td className="tg-0lax">{getDta(itemOcNumber, itemSizeName.sizeName)?.offeredQty}</td>
//                       <td className="tg-0lax">{getDta(itemOcNumber, itemSizeName.sizeName)?.inspectionQty}</td>
//                     </>
//                   ))
//                 }
//                 <td className="tg-0lax">total row</td>
//               </tr>
//             ))
//           }
//           <tr>
//             <td>total</td>
//             {
//               underHeader.map((item) => (
//                 <>
//                   {
//                     childUnderHeader.map((itemChild) => (
//                       <td className="tg-0lax" >{totalByCol(item.sizeName, itemChild)}</td>
//                     ))
//                   }
//                 </>
//               ))
//             }
//           </tr>
//         </tbody>
//       </table >
//     </div >
//   );
// }

// export default App;
// import React, { useState } from 'react'
// import './App.css'

// const App = () => {
//   const [isActive, setIsActive] = useState(true);

//   const activeBtn = () => {
//     setIsActive(!isActive)
//     console.log('active')
//   }
//   return (
//     <div>
//       <div style={{ width: '100vw', height: '100vh' }}>
//         <div className='container' style={{ height: '50px' }} >
//           <div>logo</div>
//           <div onClick={activeBtn} className={'wrapper'}>
//             <div className={`menu-btn upBtn ${isActive ? 'activeUp position' : 'activeUpTransition position'}`}></div>
//             <div className={`menu-btn downBtn ${isActive ? 'activeDown position' : 'activeDownTransition position'}`}></div>
//           </div>
//         </div>
//         <div style={{ position: 'relative' }}>
//           <div style={{ width: '100%', height: '100%', backgroundColor: 'green', position: 'absolute' }}>123 content</div>
//           {
//             !isActive && <div style={{ position: 'absolute', width: '100vw', height: `calc(100vh - 50px)`, backgroundColor: 'rgba(0,0,0,0.3)' }}></div>
//           }
//         </div>
//       </div>

//     </div>
//   )
// }

// export default App