import React, { Component } from 'react';

import './CobSeafoodLight.css';
import { Menu, Button, Icon, Label, MenuItemProps, Segment, MenuItem, Dropdown, Input, MenuHeader, Message, Container, Divider } from 'semantic-ui-react'
import FoodListItem from './FoodListItem';
import CobSeafoodListingLight from './CobSeafoodListingLight';
import { kMaxLength } from 'buffer';
import CobSeafoodHeader from './CobSeafoodHeader';
interface Props {
    onCartUpdate: (totalPrice: number, itemCount: number, priceMap: Map<string, number>, cart: Map<string, number>, imageMap: Map<string, string>) => void
}

interface States {
    totalPrice: number;
    itemCount: number;
    activeItem: string;
    showCart:boolean;
}

class CobSeafoodShoppingLight extends Component<Props, States> {

    private cart: Map<string, number> = new Map();
    private priceMap: Map<string, number> = new Map();
    private imageMap: Map<string, string> = new Map();

    constructor(props: Props) {
        super(props);
        this.state = {
            totalPrice: 0, itemCount: 0, activeItem: "",showCart:true
        }
    }
    calculateTotalRawPrice(): number {
        let p = 0;
        this.priceMap.forEach((v, k) => {
            p += (this.cart.get(k) as number) * v;
        });

        if (p != this.state.totalPrice) {
            this.setState({ totalPrice: p });
        }
        return p;
    }


    handleItemClick = (e: any, { name }: MenuItemProps) => {
        this.setState({ activeItem: name ? name : this.state.activeItem });
    }
    getItemCount(): number {
        let t = 0;
        this.cart.forEach((v, k) => {
            t += v;
        });
        return t;
    }
    listItems() {
        let items: JSX.Element[] = []
        this.cart.forEach((v, k) => {

            if (v <= 0) { return }

            items.push(
                <>
                    <li className='HW2-Red'>
                        {k} x {v}&nbsp;
                    </li>
                    <div style={{ width: "25px" }}></div>
                </>
            )
        });
        return items;
    }

    render() {
        this.props.onCartUpdate(this.state.totalPrice, this.state.itemCount, this.priceMap, this.cart, this.imageMap);
        return (
            <>
                <div className='HW2-Content-Container HW2-Dark-Background'>
                    <div className='HW2-Content-Main'>

                        <div className='HW2-Content'>
                            <div className='HW2-Cart-View-Message'>


                                {this.state.showCart &&
                                <>
                                <div className="HW2-Right-Text"><Button onClick={()=>{this.setState({showCart:false})}} attached="top" color='teal' icon="x" size='tiny'>Hide Cart</Button></div> 
                                <Message color='teal' attached="bottom">
                                    
                                    <Message.Header><div className="HW2-Center-Text">Your Cart Total - <span className='HW2-Red'>${this.calculateTotalRawPrice()}</span>  </div></Message.Header>
                                    <Message.Content>
                                        <Divider></Divider>

                                        <div className='HW2-FlexRow'>

                                            <Message.List>
                                                <Message.Item>*Free shipping</Message.Item>
                                                <Message.Item>*No hidden fees</Message.Item>
                                                <Message.Item>*Tax calculated during checkout</Message.Item>
                                                <Message.Item>*No Returns</Message.Item>
                                            </Message.List>

                                            <Container fluid>
                                                <div className='HW2-Center-Text'>Cart Contents<ul className='HW2-Left-Text'>{this.listItems()}</ul></div>
                                            </Container>
                                        </div>
                                    </Message.Content>
                                </Message></>}
                                {!this.state.showCart &&
                                <div className='HW2-View-Cart-Toggle'>
                                    <Button  onClick={()=>{this.setState({showCart:true})}} color='black'>View Cart <Icon name="shopping cart"></Icon></Button>
                                </div>
                                }
                            </div>

                            <CobSeafoodListingLight onItemAdd={(name: string, price: number, img: string) => {
                                var q = 0;
                                this.priceMap.set(name, price);
                                this.imageMap.set(name, img);
                                if (this.cart.has(name)) {
                                    q = (this.cart.get(name) as number) + 1;

                                    this.cart.set(name, q);
                                } else {
                                    this.cart.set(name, 1);
                                    q = 1;
                                }

                                this.setState({ itemCount: this.getItemCount() });
                                return this.cart;

                            }} onItemRemove={(name: string, price: number, img: string) => {
                                this.priceMap.set(name, price);
                                this.imageMap.set(name, img);
                                let q = 0;
                                if (this.cart.has(name)) {
                                    q = (this.cart.get(name) as number);
                                    if (q > 0) {
                                        q -= 1;
                                        this.cart.set(name, q);
                                    }

                                    if (this.state.itemCount == 0) {
                                        //alert("Unable to remove item from cart!");
                                    }
                                } else {
                                    // alert("Unable to remove item from cart!");
                                }
                                this.setState({ itemCount: this.getItemCount() });

                                return this.cart;
                            }} />
                        </div>

                    </div>

                </div>
            </>
        );
    }
}

export default CobSeafoodShoppingLight;
