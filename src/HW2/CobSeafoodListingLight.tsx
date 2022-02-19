import React from 'react';
import { Card } from 'semantic-ui-react';
import { threadId } from 'worker_threads';
import FoodListItemLight from './FoodListItemLight';


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
                    <FoodListItemLight cart={this.state.cart} onItemAdd={this.itemAdded} onItemRemove={this.itemRemoved} name="Flounder" imgSrc="/southernflounder.png" price={30.00}></FoodListItemLight>
                    <FoodListItemLight cart={this.state.cart} onItemAdd={this.itemAdded} onItemRemove={this.itemRemoved} name="Dover Sole" imgSrc="/doversole.png" price={35.00}></FoodListItemLight>
                    <FoodListItemLight cart={this.state.cart} onItemAdd={this.itemAdded} onItemRemove={this.itemRemoved} name="Turbot" imgSrc="/turbot.png" price={35.00}></FoodListItemLight>
                    <FoodListItemLight cart={this.state.cart} onItemAdd={this.itemAdded} onItemRemove={this.itemRemoved} name="Giant Squid" imgSrc="/giantsquid.png" price={8000.00}></FoodListItemLight>
                    <FoodListItemLight cart={this.state.cart} onItemAdd={this.itemAdded} onItemRemove={this.itemRemoved} name="Great White Shark" imgSrc="/shark.png" price={5000.00}></FoodListItemLight>
                    <FoodListItemLight cart={this.state.cart} onItemAdd={this.itemAdded} onItemRemove={this.itemRemoved} name="Barracuda" imgSrc="/barracuda.png" price={75.00}></FoodListItemLight>
                    <FoodListItemLight cart={this.state.cart} onItemAdd={this.itemAdded} onItemRemove={this.itemRemoved} name="Crab" imgSrc="/crab.png" price={30.00}></FoodListItemLight>
                </Card.Group>
            </div>);
    }
}

export default CobSeafoodListingLight;
