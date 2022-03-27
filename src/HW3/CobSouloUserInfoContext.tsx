import { Component, createContext } from "react";
import { IUser, UserDefaultState } from "./CobSouloUserInfo"


type UserContextProviderProps = {
    children: React.ReactNode
    day: number
    gold: number
    silver: number
    brass: number
}
interface States {
    user: IUser
}
export const UserContext = createContext<IUser>(UserDefaultState)


export class UserContextProvider extends Component<UserContextProviderProps, States>{
    constructor(props: UserContextProviderProps) {
        super(props)
        this.state = {
            user: UserDefaultState
        }
        this.setGold = this.setGold.bind(this);
        this.setSilver = this.setSilver.bind(this);
        this.setBrass = this.setBrass.bind(this);
        this.setWealth = this.setWealth.bind(this);
        this.setUser = this.setUser.bind(this);
        this.setSouls = this.setSouls.bind(this);
        this.setDailyConvertion = this.setDailyConvertion.bind(this);
    }
    setGold(gold: number) {
        const updatedUser: IUser = {
            day: this.state.user.day,
            wealth: {
                gold: gold,
                silver: this.state.user.wealth.silver,
                brass: this.state.user.wealth.brass
            },
            setGold: this.setGold,
            setSilver: this.setSilver,
            setBrass: this.setBrass,
            setWealth: this.setWealth,
            darkMode: this.state.user.darkMode,
            setUser: this.setUser,
            boost:this.state.user.boost,
            souls:this.state.user.souls,
            setSouls:this.setSouls,
            dailyConvertion:this.state.user.dailyConvertion,
            setDailyConvertion:this.setDailyConvertion,
            user:this.state.user,
            dailyRechargeDeal:this.state.user.dailyRechargeDeal
        }
        console.log("Updated gold: " + gold);
        this.setState({ user: updatedUser });
    }
    setBrass(brass: number) {
        const updatedUser: IUser = {
            day: this.state.user.day,
            wealth: {
                gold: this.state.user.wealth.gold,
                silver: this.state.user.wealth.silver,
                brass: brass
            },
            setGold: this.setGold,
            setSilver: this.setSilver,
            setBrass: this.setBrass,
            setWealth: this.setWealth,
            darkMode: this.state.user.darkMode,
            setUser: this.setUser,
            boost:this.state.user.boost,
            souls:this.state.user.souls,
            setSouls:this.setSouls,
            dailyConvertion:this.state.user.dailyConvertion,
            setDailyConvertion:this.setDailyConvertion,
            user:this.state.user,
            dailyRechargeDeal:this.state.user.dailyRechargeDeal
        }
        this.setState({ user: updatedUser });
    }
    setSilver(silver: number) {
        const updatedUser: IUser = {
            day: this.state.user.day,
            wealth: {
                gold: this.state.user.wealth.gold,
                silver: silver,
                brass: this.state.user.wealth.brass
            },
            setGold: this.setGold,
            setSilver: this.setSilver,
            setBrass: this.setBrass,
            setWealth: this.setWealth,
            darkMode: this.state.user.darkMode,
            setUser: this.setUser,
            boost:this.state.user.boost,
            souls:this.state.user.souls,
            setSouls:this.setSouls,
            dailyConvertion:this.state.user.dailyConvertion,
            setDailyConvertion:this.setDailyConvertion,
            user:this.state.user,
            dailyRechargeDeal:this.state.user.dailyRechargeDeal
        }
        this.setState({ user: updatedUser });
    }

    setWealth(gold: number, silver: number, brass: number) {
        const updatedUser: IUser = {
            day: this.state.user.day,
            wealth: {
                gold: gold,
                silver: silver,
                brass: brass
            },
            setGold: this.setGold,
            setSilver: this.setSilver,
            setBrass: this.setBrass,
            setWealth: this.setWealth,
            darkMode: this.state.user.darkMode,
            setUser: this.setUser,
            boost:this.state.user.boost,
            souls:this.state.user.souls,
            setSouls:this.setSouls,
            dailyConvertion:this.state.user.dailyConvertion,
            setDailyConvertion:this.setDailyConvertion,
            user:this.state.user,
            dailyRechargeDeal:this.state.user.dailyRechargeDeal
        }
        this.setState({ user: updatedUser });
    }
    setSouls(souls:number){
        const updatedUser: IUser = {
            day: this.state.user.day,
            wealth: {
                gold: this.state.user.wealth.gold,
                silver: this.state.user.wealth.silver,
                brass: this.state.user.wealth.brass
            },
            setGold: this.setGold,
            setSilver: this.setSilver,
            setBrass: this.setBrass,
            setWealth: this.setWealth,
            darkMode: this.state.user.darkMode,
            setUser: this.setUser,
            boost:this.state.user.boost,
            souls:souls,
            setSouls:this.setSouls,
            dailyConvertion:this.state.user.dailyConvertion,
            setDailyConvertion:this.setDailyConvertion,
            user:this.state.user,
            dailyRechargeDeal:this.state.user.dailyRechargeDeal
        }
        console.log("Set Souls: " + souls)
        this.setState({ user: updatedUser });
    }

    setDailyConvertion(dailyConvertion:boolean){
        const updatedUser: IUser = {
            day: this.state.user.day,
            wealth: {
                gold: this.state.user.wealth.gold,
                silver: this.state.user.wealth.silver,
                brass: this.state.user.wealth.brass
            },
            setGold: this.setGold,
            setSilver: this.setSilver,
            setBrass: this.setBrass,
            setWealth: this.setWealth,
            darkMode: this.state.user.darkMode,
            setUser: this.setUser,
            boost:this.state.user.boost,
            souls:this.state.user.souls,
            setSouls:this.setSouls,
            dailyConvertion:dailyConvertion,
            setDailyConvertion:this.setDailyConvertion,
            user:this.state.user,
            dailyRechargeDeal:this.state.user.dailyRechargeDeal
        }

        this.setState({ user: updatedUser });
    }

    setUser(user: IUser) {
        this.setState({ user: user });
    }

    render() {
        return <UserContext.Provider
            value={{ day: this.props.day, wealth: this.state.user.wealth, setGold: this.setGold, setSilver: this.setSilver, setBrass: this.setBrass, setWealth: this.setWealth,
             darkMode: this.state.user.darkMode, setUser: this.setUser, souls:this.state.user.souls,boost:this.state.user.boost,setSouls:this.setSouls,
             dailyConvertion:this.state.user.dailyConvertion,setDailyConvertion:this.setDailyConvertion,user:this.state.user,dailyRechargeDeal:this.state.user.dailyRechargeDeal }}>
            {this.props.children}
        </UserContext.Provider>
    }
} 