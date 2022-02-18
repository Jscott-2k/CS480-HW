import React from 'react';
import { Card } from 'semantic-ui-react';
import { threadId } from 'worker_threads';
import FoodListItem from './FoodListItem';


interface Props {
    onItemAdd: (name: string,price:number,img:string) => Map<string, number>;
    onItemRemove: (name: string,price:number,img:string) => Map<string, number>;

}

interface States {
    cart: Map<string, number>;
}

class CobSeafoodListingLight extends React.Component<Props, States>{

    constructor(props: Props) {
        super(props);
        this.itemAdded = this.itemAdded.bind(this);
        this.itemRemoved = this.itemRemoved.bind(this);
        this.state = {
            cart: new Map()
        }
    }

    itemAdded(cart: Map<string, number>, name: string,price:number,img:string): Map<string, number> {
        let updatedCart = this.props.onItemAdd(name,price,img);
        this.setState({ cart: updatedCart });
        return updatedCart;
    }

    itemRemoved(cart: Map<string, number>, name: string, price:number,img:string): Map<string, number> {
        let updatedCart = this.props.onItemRemove(name,price,img)
        this.setState({ cart: updatedCart });
        return updatedCart;
    }

    render() {
        return (
            <div className='Listing'>
                <Card.Group itemsPerRow={3}>
                    <FoodListItem cart={this.state.cart} onItemAdd={this.itemAdded} onItemRemove={this.itemRemoved} name="Flounder" imgSrc="/seafood/southernflounder.png" price={30.00}></FoodListItem>
                    <FoodListItem cart={this.state.cart} onItemAdd={this.itemAdded} onItemRemove={this.itemRemoved} name="Dover Sole" imgSrc="/seafood/doversole.png" price={35.00}></FoodListItem>
                    <FoodListItem cart={this.state.cart} onItemAdd={this.itemAdded} onItemRemove={this.itemRemoved} name="Turbot" imgSrc="/seafood/turbot.png" price={35.00}></FoodListItem>
                    <FoodListItem cart={this.state.cart} onItemAdd={this.itemAdded} onItemRemove={this.itemRemoved} name="Giant Squid" imgSrc="/seafood/giantsquid.png" price={8000.00}></FoodListItem>
                    <FoodListItem cart={this.state.cart} onItemAdd={this.itemAdded} onItemRemove={this.itemRemoved} name="Great White Shark" imgSrc="/seafood/shark.png" price={5000.00}></FoodListItem>
                    <FoodListItem cart={this.state.cart} onItemAdd={this.itemAdded} onItemRemove={this.itemRemoved} name="Barracuda" imgSrc="/seafood/barracuda.png" price={75.00}></FoodListItem>
                    <FoodListItem cart={this.state.cart} onItemAdd={this.itemAdded} onItemRemove={this.itemRemoved} name="Crab" imgSrc="/seafood/crab.png" price={30.00}></FoodListItem>
                </Card.Group>
            </div>);
    }
}

export default CobSeafoodListingLight;
