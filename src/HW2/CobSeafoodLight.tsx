import React, { Component } from 'react';

import './CobSeafoodLight.css';
import { Menu, Button, Icon, Label, MenuItemProps, Segment, MenuItem, Dropdown, Input, MenuHeader, Message, Container, Divider } from 'semantic-ui-react'
import FoodListItem from './FoodListItem';
import CobSeafoodListingLight from './CobSeafoodListingLight';
import { kMaxLength } from 'buffer';
import CobSeafoodHeader from './CobSeafoodHeader';
import CobSeafoodShoppingLight from './CobSeafoodShoppingLight';
import CobSeafoodShopCheckoutLight from './CobSeafoodCheckoutLight';

interface Props {

}

interface States {
    totalPrice: number;
    itemCount: number;
    activeItem: string;
    checkingOut: boolean;
    priceMap: Map<string, number>;
    cart: Map<string, number>;
    imageMap: Map<string, string>;
}




class CobSeafoodLight extends Component<Props, States> {

    constructor(props: Props) {
        super(props);
        this.state = {
            totalPrice: 0, itemCount: 0, activeItem: "", checkingOut: false, priceMap: new Map(), cart: new Map(), imageMap: new Map()
        }


    }

    handleItemClick = (e: any, { name }: MenuItemProps) => {
        this.setState({ activeItem: name ? name : this.state.activeItem });
    }
    render() {
        const activeItem = this.state.activeItem;

        return (
            <>
                <div className="HW2-Dark-Background">
                    <CobSeafoodHeader />
                    <Menu size='large' pointing>
                        <Menu.Item
                            name='Show All Seafood'
                            active={this.state.activeItem === 'showAllSeafood'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item>
                            <div><Input icon='search' placeholder='Search sea food...' /></div>
                        </Menu.Item>
                        <Menu.Menu position='right'>

                            <Dropdown item icon="language" text="Langauge">
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => { }}>English</Dropdown.Item>
                                    <Dropdown.Item onClick={() => { }}>Russian</Dropdown.Item>
                                    <Dropdown.Item onClick={() => { }}>Spanish</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Menu.Item>
                                <Button color='red' inverted>Order History</Button>
                            </Menu.Item>
                            <Menu.Item>
                                <Button color="brown" inverted onClick={() => { this.setState({ checkingOut: true }) }}> <Button.Content> <Icon name='shopping cart'></Icon> Checkout </Button.Content></Button>  <Label color='red' pointing="left">{this.state.itemCount} </Label>
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>

                    {!this.state.checkingOut && <CobSeafoodShoppingLight onCartUpdate={(totalPrice: number, itemCount: number, priceMap: Map<string, number>, cart: Map<string, number>, imageMap: Map<string, string>) => {

                        if (totalPrice != this.state.totalPrice || itemCount != this.state.itemCount) {
                            this.setState({
                                totalPrice: totalPrice,
                                itemCount: itemCount,
                                priceMap: priceMap,
                                imageMap: imageMap,
                                cart: cart
                            });
                        }
                    }} />}
                    {this.state.checkingOut && <CobSeafoodShopCheckoutLight
                        cart={this.state.cart}
                        itemCount={this.state.itemCount}
                        totalPrice={this.state.totalPrice}
                        priceMap={this.state.priceMap}
                        imageMap={this.state.imageMap}
                        onOrderComplete={() => { this.setState({ checkingOut: false }) }}
                        onOrderCanceled={() => { this.setState({ checkingOut: false }) }}
                    />}
                </div>
            </>
        );
    }

    addToCart(): void {

    }
}

export default CobSeafoodLight;
