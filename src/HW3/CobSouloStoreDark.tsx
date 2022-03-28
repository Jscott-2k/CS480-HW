import React, { Component } from 'react';
import './CobSoulo.css';
import { Menu, Button, Icon, Image, Label, MenuItemProps, Segment, MenuItem, Dropdown, Input, MenuHeader, Message, Container, Divider, Card, Modal, Header } from 'semantic-ui-react'
import CobSouloStoreItemDark from './CobSouloStoreItemDark';
import { UserContext } from './CobSouloUserInfoContext';
import CobSouloCobuckCountDark from './CobSouloCobuckCountDark';
import { IUser } from './CobSouloUserInfo';

interface Props {
    onPurchaseItem: (item: string) => void
    onReturn: () => void
    day: number
    recharge: boolean
}

interface States {
    open: boolean
    successOpen: boolean
    name: string
    price: number
    currency: string
    imgSrc:string
    convertionFailOpen:boolean,
    convertionSuccessOpen:boolean,
    action: () => void
}

class CobSouloStoreDark extends Component<Props, States> {

    static contextType = UserContext;

    constructor(props: Props) {
        super(props);
        this.state = {
            open: false, name: "", price: 0, currency: "", action: () => { }, successOpen: false,imgSrc:"string",convertionFailOpen:false,convertionSuccessOpen:false
        }
        this.readyPurchase = this.readyPurchase.bind(this);
        this.proceedPurhcase = this.proceedPurhcase.bind(this);
        this.failConvertion = this.failConvertion.bind(this);
    }

    private shouldOpenSuccessWindow:boolean = false

    readyPurchase(price: number, name: string, currency: string, action: () => void,imgSrc:string) {
        this.setState({ open: true, name: name, price: price, currency: currency, action: action,imgSrc:imgSrc })
    }
    componentDidUpdate(){
        console.log("Updated Shop!");
        if(this.shouldOpenSuccessWindow){
            this.setState({convertionSuccessOpen:true})
            this.shouldOpenSuccessWindow = false
        }
    }
    proceedPurhcase() {
        const { wealth, setGold, setBrass, setSilver } = this.context;
        if (this.state.currency == "gold") {
            if (this.state.price < wealth.gold) {
                this.state.action();
                this.setState({ open: false, successOpen: true });

            }
        } else {
            this.state.action();
            this.setState({ open: false, successOpen: true });
        }
    }
    canPurchase(gold: number, silver: number, brass: number): boolean {

        if (this.state.currency === "gold") {
            return gold >= this.state.price;
        } else if ((this.state.currency === "silver")) {
            return silver >= this.state.price;
        } else if ((this.state.currency === "brass")) {
            return brass >= this.state.price;
        }
        return true;
    }
    private failConvertionReason:number = 0;

    failConvertion(reason:number){
        this.failConvertionReason = reason;
        this.setState({convertionFailOpen:true});
    }
    
    goldToBrass() {
        const { wealth, setGold, setBrass, setSilver, setWealth,dailyConvertion,setDailyConvertion,user,setUser } = this.context;
        if(!dailyConvertion || wealth.gold <= 0){
            let g:number =  (wealth.gold <= 0) as unknown as number;
            let d:number = (!dailyConvertion as unknown as number)  ;
            this.failConvertion(g >> d); // 1 = gold, 0 = daily  rason
            //alert("YOU ONLY GET ONE CONVERTION PER LOGIN DAY. TRY AGAIN TOMORROW! THANKS!");
            return;
        }
        

        const newBrass = wealth.brass + (wealth.gold * 20)
        const newGold = 0;
        const newUser:IUser = user;
        newUser.wealth.gold = newGold;
        newUser.wealth.brass = newBrass;
        newUser.dailyConvertion = false;
        setUser(newUser)

        //this.setState({convertionSuccessOpen:true})
        this.shouldOpenSuccessWindow = true;
        //setWealth(newGold, wealth.silver, newBrass);
        //setDailyConvertion(false);
    }

    brassToGold() {
        const { wealth, setGold, setBrass, setSilver, setWealth,dailyConvertion,setDailyConvertion,user,setUser } = this.context;
        if(!dailyConvertion || wealth.brass < 20){
            let g:number =  (wealth.brass < 20) as unknown as number;
            let d:number = (!dailyConvertion as unknown as number)  ;
            this.failConvertion(g >> d); // 1 = gold, 0 = daily  rason
            return;
        }
        const brassFloor = Math.floor((wealth.brass / 20)) * 20;
        const newGold = wealth.gold + (brassFloor / 20)
        const newBrass = wealth.brass - brassFloor;
        
        const newUser:IUser = user;
        newUser.wealth.gold = newGold;
        newUser.wealth.brass = newBrass;
        newUser.dailyConvertion = false;
        setUser(newUser)
        this.shouldOpenSuccessWindow = true;
        // setWealth(newGold, wealth.silver, newBrass);
        // setDailyConvertion(false);
    }


    brassToSilver() {
        const { wealth, setGold, setBrass, setSilver, setWealth,dailyConvertion,setDailyConvertion,user,setUser } = this.context;
        if(!dailyConvertion || wealth.brass < 4){
            let g:number =  (wealth.brass < 4) as unknown as number;
            let d:number = (!dailyConvertion as unknown as number)  ;
            this.failConvertion(g >> d); // 1 = gold, 0 = daily  rason
            return;
        }
        const brassFloor = Math.floor((wealth.brass / 4)) * 4;
        const newSilver = wealth.silver + (brassFloor / 4)
        console.log("new silver = " + newSilver)
        const newBrass = wealth.brass - brassFloor;

        const newUser:IUser = user;
        newUser.wealth.silver = newSilver;
        newUser.wealth.brass = newBrass;
        newUser.dailyConvertion = false;
        setUser(newUser)
        this.shouldOpenSuccessWindow = true;
        // setWealth(wealth.gold, newSilver, newBrass);
        // setDailyConvertion(false);
    }

    silverToGold() {
        const { wealth, setGold, setBrass, setSilver, setWealth,dailyConvertion,setDailyConvertion,user,setUser } = this.context;
        if(!dailyConvertion || wealth.silver < 5){
            let g:number =  (wealth.silver < 5) as unknown as number;
            let d:number = (!dailyConvertion as unknown as number)  ;
            this.failConvertion(g >> d); // 1 = gold, 0 = daily  rason
            return;
        }
        const silverFloor = Math.floor((wealth.silver / 5)) * 5;
        const newGold = wealth.gold + (silverFloor / 5)
        const newSilver = wealth.silver - silverFloor;

        const newUser:IUser = user;
        newUser.wealth.silver = newSilver;
        newUser.wealth.gold = newGold;
        newUser.dailyConvertion = false;
        setUser(newUser)
        this.shouldOpenSuccessWindow = true;
        // setWealth(newGold, newSilver, wealth.brass);
        // setDailyConvertion(false);
    }


    render() {
        const { day, wealth, setGold, setBrass, setSilver, setWealth, setUser, setSouls, souls, boost, darkMode,user,dailyRechargeDeal } = this.context;

        return (
            <>
                <div className='HW3SoulStoreContainer'>
                    <div className='HW3SoulStoreHeader'>
                        {this.props.recharge &&
                            <>Recharge Your Cobucks</>}
                        {!this.props.recharge &&
                            <>The Soul Store</>}
                    </div>
                    <div className='HW3SoulStore'>
                        <br></br>
                        <CobSouloCobuckCountDark as="row"></CobSouloCobuckCountDark>
                        <Card.Group centered>

                            {this.props.recharge && <>

                                <CobSouloStoreItemDark name="5 Gold Cobucks" price={6} onBuyClick={this.readyPurchase} imgSrc="./gold1.png" currency="usd" dailyBonus={true} action={() => {
                                    let newUser = user;
                                    newUser.wealth.gold = user.wealth.gold + 5
                                    newUser.wealth.silver = user.wealth.silver + 3
                                    newUser.dailyRechargeDeal = false
                                    setUser(newUser);

                                }} sale={false} saleRed={0} bonusDesc="3 Silver"/>


                                <CobSouloStoreItemDark name="10 Gold Cobucks" price={11} onBuyClick={this.readyPurchase} imgSrc="./gold0.jpg"currency="usd" action={() => {
                                    setGold(wealth.gold + 10);
                                }} sale={false} saleRed={0} />
                                <CobSouloStoreItemDark name="100 Gold Cobucks" price={91} onBuyClick={this.readyPurchase} imgSrc="./gold3.jpg" currency="usd" action={() => {
                                    setGold(wealth.gold + 100);
                                }} sale={false} saleRed={0} bestValue={true}/>

                            </>}

                            {!this.props.recharge && <>
                                {day >= 7 &&
                                    <CobSouloStoreItemDark name="Dark Mode Skin" price={2} onBuyClick={this.readyPurchase} imgSrc="./demon.png" currency="brass" action={() => {
                                        console.log("daily recharge:" + dailyRechargeDeal);
                                        setUser({ day: day, wealth: { gold: wealth.gold, silver: wealth.silver, brass: wealth.brass - 2 }, darkMode: true, setBrass: setBrass, setGold: setGold, setSilver: setSilver, setWealth: setWealth, souls: souls, boost: boost, setSouls: souls,dailyRechargeDeal:dailyRechargeDeal });
                                    }} sale={true} saleRed={90} alreadyOwn={darkMode} />
                                }
                                <CobSouloStoreItemDark name="2x Boost" price={11} onBuyClick={this.readyPurchase} imgSrc="./boost1.png" currency="gold" action={() => {

                                    setUser({ day: day, wealth: { gold: wealth.gold - 11, silver: wealth.silver, brass: wealth.brass }, darkMode: darkMode, setBrass: setBrass, setGold: setGold, setSilver: setSilver, setWealth: setWealth, souls: souls, boost: boost * 2, setSouls: souls,dailyRechargeDeal:dailyRechargeDeal  });
                                }} sale={false} saleRed={0} />
                                <CobSouloStoreItemDark name="4x Boost" price={32} onBuyClick={this.readyPurchase} imgSrc="./boost2.jpg" currency="gold" action={() => {
                                    setUser({ day: day, wealth: { gold: wealth.gold - 32, silver: wealth.silver, brass: wealth.brass }, darkMode: darkMode, setBrass: setBrass, setGold: setGold, setSilver: setSilver, setWealth: setWealth, souls: souls, boost: boost * 4, setSouls: souls,dailyRechargeDeal:dailyRechargeDeal  });
                                }} sale={false} saleRed={0} />
                                <CobSouloStoreItemDark name="100,000 souls" price={63} onBuyClick={this.readyPurchase} imgSrc="./ghostTwo.gif" currency="gold" action={() => {
                                    // setGold(wealth.gold - 63);
                                    // setSouls(souls+100000);

                                    setUser({ day: day, wealth: { gold: wealth.gold - 63, silver: wealth.silver, brass: wealth.brass }, darkMode: darkMode, setBrass: setBrass, setGold: setGold, setSilver: setSilver, setWealth: setWealth, souls: souls + 100000, boost: boost, setSouls: souls,dailyRechargeDeal:dailyRechargeDeal  });

                                }} sale={false} saleRed={0} />

                                <CobSouloStoreItemDark name="1,000 souls" price={4} onBuyClick={this.readyPurchase} imgSrc="./ghost.gif" currency="silver" action={() => {
                                    // setGold(wealth.gold - 63);
                                    // setSouls(souls+100000);

                                    setUser({ day: day, wealth: { gold: wealth.gold, silver: wealth.silver - 4, brass: wealth.brass }, darkMode: darkMode, setBrass: setBrass, setGold: setGold, setSilver: setSilver, setWealth: setWealth, souls: souls + 1000, boost: boost, setSouls: souls,dailyRechargeDeal:dailyRechargeDeal  });

                                }} sale={false} saleRed={0} />
                            </>}




                        </Card.Group>

                    </div>
                    <div className='HW3ConversionRates'>
                        <h4>Convertion Rates</h4>
                        <div className='HW3ConversionRate'>
                            <p> <b>1 Gold = 5 silver = 20 brass</b></p>
                        </div>
                    </div>
                    <div className="HW3StoreOutsideButtons">
                        <div className="HW3StoreOutsideButton">
                            <Button inverted size="huge" onClick={() => this.goldToBrass()}>
                                Convert Gold to Brass
                            </Button></div>
                        <div className="HW3StoreOutsideButton">
                            <Button inverted size="huge" onClick={() => this.silverToGold()}>
                                Convert Silver to Gold
                            </Button></div>
                        <div className="HW3StoreOutsideButton">
                            <Button inverted size="huge" onClick={() => this.brassToSilver()}>
                                Convert Brass to Silver
                            </Button>
                        </div>
                        <div className="HW3StoreOutsideButton">
                            <Button inverted size="huge" onClick={this.props.onReturn}>
                                Exit Store

                            </Button></div>

                    </div>

                    <div className='HW3StoreOutsideImage'>
                        <Image size='large' srcSet="./spooky.gif"></Image></div>
                    </div>
                    <div></div>

                <Modal
                    open={this.state.open}

                    onOpen={() => this.setState({ open: true })}
                >
                    {this.state.currency == "usd" && <>
                        <Modal.Header>Purchase: {this.state.name} for ${this.state.price}</Modal.Header></>}
                    {this.state.currency != "usd" && <>
                        <Modal.Header>Purchase: {this.state.name} for {this.state.price} {this.state.currency}</Modal.Header></>}
                    <Modal.Content image scrolling>
                        <Image size='medium' src={this.state.imgSrc} wrapped />

                        <Modal.Description>
                            {this.state.currency == "usd" && <>
                                <h4>
                                    Please enter your credit card information to complete this purchase.
                                </h4>

                                <div>
                                    This item is being purchased with real money!
                                </div>
                            </>

                            }

                            <h4>Order:</h4>
                            <Container>
                                {this.state.currency == "usd" && <>
                                    {this.state.name} + ${this.state.price}

                                    <div>
                                        8% Tax: + ${ ((this.state.price * 1.08) - this.state.price).toFixed(2)} 
                                        <br></br>
                                        Total: ${(this.state.price * 1.08)}
                                    </div>
                                </>}
                                {this.state.currency != "usd" && <>
                                    {this.state.name}: {this.state.price} {this.state.currency}
                                </>}

                            </Container>
                            <Divider></Divider>
                            {this.state.currency == "usd" && <>


                                <Input placeholder="Email"></Input> <br></br>
                                <Input placeholder="First Name"></Input>
                                <Input placeholder="Middle Inital"></Input>
                                <Input placeholder="Last Name"></Input>
                                <Input placeholder="Credit Card #"></Input>
                                <Input placeholder="CVV"></Input>
                                <Input placeholder="Expiration Date"></Input>
                            </>}


                            {this.state.currency == "gold" && <>
                                Remaining Balance: {wealth.gold} - {this.state.price} = {wealth.gold - this.state.price} {this.state.currency}
                            </>}

                            
                            {this.state.currency == "silver" && <>
                                Remaining Balance: {wealth.silver} - {this.state.price} = {wealth.silver - this.state.price} {this.state.currency}
                            </>}

                            {this.state.currency == "brass" && <>
                                Remaining Balance: {wealth.brass} - {this.state.price} = {wealth.brass - this.state.price} {this.state.currency}
                            </>}

                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>

                        <Button onClick={() => this.setState({ open: false })} color="red">
                            <Icon name='x' /> Cancel
                        </Button>

                        <Button onClick={() => this.proceedPurhcase()} primary disabled={!this.canPurchase(wealth.gold, wealth.silver, wealth.brass)}>
                            Proceed <Icon name='chevron right' />
                        </Button>

                    </Modal.Actions>
                </Modal>


                <Modal
                    basic
                    onClose={() => this.setState({ successOpen: false })}
                    onOpen={() => this.setState({ successOpen: true })}
                    open={this.state.successOpen}
                    size='small'
                    onClick={() => this.setState({ successOpen: false })}

                >
                    <Header icon color="green">
                        <Icon name='checkmark' color="green" />
                        Purchase was successful!
                    </Header>
                    <Modal.Content >
                        <p>
                            Congrats! You successfully purchased - {this.state.name}! Now your soul is one step closer to being saved from eternal damnation.
                        </p>

                        <h4 style={{ textAlign: "center" }}>Click anywhere to continue!</h4>
                    </Modal.Content>
                    <Modal.Actions>
                    </Modal.Actions>
                </Modal>


                <Modal
                    basic
                    onClose={() => this.setState({ convertionFailOpen: false })}
                    onOpen={() => this.setState({ convertionFailOpen: true })}
                    open={this.state.convertionFailOpen}
                    size='small'
                    onClick={() => this.setState({ convertionFailOpen: false })}

                >
                    <Header icon color='red'>
                        <Icon name='x' color='red'/>
                        Convertion Failed
                    </Header>
                    <Modal.Content >

                        
                        <p className='HW3TextAlignCenter'>
                        {this.failConvertionReason == 0 && <>You can only convert currency once per day! Try again tomorrow.</>}
                        {this.failConvertionReason == 1 && <>Not enough currency to convert!</>}
                        </p>

                        <h4 style={{ textAlign: "center" }}>Click anywhere to continue!</h4>
                    </Modal.Content>
                    <Modal.Actions>
                    </Modal.Actions>
                </Modal>


                <Modal
                    basic
                    onClose={() => this.setState({ convertionSuccessOpen: false })}
                    onOpen={() => this.setState({ convertionSuccessOpen: true })}
                    open={this.state.convertionSuccessOpen}
                    size='small'
                    onClick={() => this.setState({ convertionSuccessOpen: false })}

                >
                    <Header icon color='green'>
                        <Icon name='briefcase' color='green'/>
                        Convertion Success!
                    </Header>
                    <Modal.Content >
                        <p className='HW3TextAlignCenter'>
                            You converted your Cobucks successfully!
                        </p>

                        <h4 style={{ textAlign: "center" }}>Click anywhere to continue!</h4>
                    </Modal.Content>
                    <Modal.Actions>
                    </Modal.Actions>
                </Modal>
            </>
        );
    }

}

export default CobSouloStoreDark;
