export interface IUser {
    day:number
    wealth:{
        gold:number
        silver:number
        brass:number
    }
    darkMode:boolean
    souls:number
    boost:number
    dailyConvertion:boolean
    setGold:(gold:number)=>void
    setSilver:(silver:number)=>void
    setBrass:(brass:number)=>void
    setWealth:(gold:number,silver:number,brass:number)=>void
    setUser:(user:IUser)=>void
    setSouls:(souls:number)=>void
    setDailyConvertion:(dailyConvertion:boolean)=>void

    dailyRechargeDeal:boolean
    user?:IUser
}
export const UserDefaultState:IUser = {
    day:0,
    wealth:{
        gold:0,
        silver:0,
        brass:0
    },
    darkMode:false,
    souls:0,
    boost:1,
    dailyConvertion:true,
    dailyRechargeDeal:true,
    setGold:(gold:number)=>{},
    setSilver:(silver:number)=>{},
    setBrass:(brass:number)=>{},
    setWealth:(gold:number,silver:number,brass:number)=>{},
    setUser:(user:IUser)=>{},
    setSouls:(souls:number)=>{},
    setDailyConvertion:(dailyConvertion:boolean)=>{}

}