export const RadarDataBack =(labelList, bgColor,borderColor, dataList) =>
   {
     return {
    labels:labelList,
    datasets: [
        {
          label: "March",
          backgroundColor: bgColor,
          borderColor: borderColor,
          pointBackgroundColor: "rgba(34, 202, 236, 1)",
          poingBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(34, 202, 236, 1)",
          data: dataList
        }
      ]
    }
  };
  export const RadarOptions = (place, font_size) =>{ 
    return {
    scale:{
      pointLabels:{
        fontSize:15,
      },
      ticks: {
        min: 0,
        max: 5,
        stepSize: 1,
        display:false
      },
    },
    maintainAspectRatio: false,
    responsive: false,
    title:{
      display:true,
      fontSize:font_size,
      text:place
    }, 
    legend: {
        display: false
    }
  }
};
