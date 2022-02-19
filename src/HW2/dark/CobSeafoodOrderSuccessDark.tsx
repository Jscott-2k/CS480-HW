import React, { Component } from 'react';

import './CobSeafoodDark.css';
import { Menu, Button, Icon, Label, MenuItemProps, Segment, MenuItem, Dropdown, Input, MenuHeader, Message, Container, Divider } from 'semantic-ui-react'
import FoodListItem from './FoodListItemDark';
import CobSeafoodListingLight from './CobSeafoodListingDark';
import { kMaxLength } from 'buffer';
import CobSeafoodHeader from './CobSeafoodHeader';
interface OrderSuccessProps {

}

interface States {
    totalPrice: number;
    itemCount: number;
    activeItem: string;
    showCart: boolean;
}

class CobSeafoodOrderSuccessDark extends Component<OrderSuccessProps, States> {

    private cart: Map<string, number> = new Map();
    private priceMap: Map<string, number> = new Map();
    private imageMap: Map<string, string> = new Map();

    constructor(props: OrderSuccessProps) {
        super(props);
        this.state = {
            totalPrice: 0, itemCount: 0, activeItem: "", showCart: true
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

        return (
            <>
                <div className="HW2-Dark-Background">
                    <CobSeafoodHeader />
                    <div className='HW2-Content-Container'>
                        <div className='HW2-Content-Main'>

                            <div className='HW2-Content'><div className='HW2-FitVerticle'>
                                <Message>
                                    <Message.Header>
                                     Your Order <a>#0000000000</a> is Complete!
                                    </Message.Header>
                                    <Message.Content>
                                        <p>If you have any concerns about your order please FAX <a href="fax:1+(806)-905-6421">1+(806)-905-6421</a>
                                        </p> <p>
                                        When sending a fax, please make sure to include your order-number, full name, what you ordered, my date of birth, and your social security number. Response time is approximately once per winter solstice.
                                        </p>
                                    </Message.Content>
                                </Message>
                                <a href="/hw2dark"><Button color='brown'>
                                    Return to Shop
                                </Button></a>
                            </div>

                            </div>

                        </div>

                    </div>
                </div>
            </>
        );
    }
}
export type {OrderSuccessProps};
export default CobSeafoodOrderSuccessDark;
