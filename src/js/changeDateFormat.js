export const changeDateFormat=(dateString)=>{
    const predate = dateString.split('T')[0]
    const year = predate.split('-')[0]
    const month = predate.split('-')[1]
    const day = predate.split('-')[2]
    let Month=''
    switch (month){
        case "01":
            Month='January'
            break
        case "02":
            Month='Feburary'
            break
        case "03":
            Month='March'
            break
        case "04":
            Month='April'
            break  
        case "05":
            Month='May'
            break
        case "06":
            Month='June'
            break
        case "07":
            Month='July'
            break
        case "08":
            Month='August'
            break
        case "09":
            Month='September'
            break
        case "10":
            Month='October'
            break
        case "11":
            Month='November'
            break
        case "12":
            Month='December'
            break
    }
    return Month+' '+day +', '+year
}