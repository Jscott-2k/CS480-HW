import React from 'react';
import { Button, ButtonGroup, Checkbox, Container, Divider, Dropdown, Form, Grid, Icon, Item, Label, List, Menu, Modal, Segment, Select, Step } from 'semantic-ui-react';
import CobSeafoodHeader from './CobSeafoodHeader';
import validator from 'validator'
import './CobSeafoodDark.css'


interface Props {
    cart: Map<string, number>;
    totalPrice: number;
    itemCount: number;
    priceMap: Map<string, number>;
    imageMap: Map<string, string>;
    onOrderComplete: () => void;
    onOrderCanceled: () => void;

}
interface States {
    activeStep: number;
    completed: number;
    enterBilling: boolean;
    shippingMethod: number;
    date: number;
    open: boolean;
    termsRead: boolean;
    acceptBail: boolean;
    acceptTerms: boolean;


    firstName: string;
    lastName: string;
    address: string;

}
class CobSeafoodShopCheckoutDark extends React.Component<Props, States> {
    private shippingOptions = [
        { key: 1, text: 'Standard USPS mail (2 weeks)', value: 1 },
        { key: 2, text: 'Carrier Pidgeon (2 Months)', value: 2 },
        { key: 3, text: 'Galleon (1 Year)', value: 3 },
    ]
    private totalPriceInclFees: number = 0;
    private fishingLiscense: number = 50;

    constructor(props: Props) {
        super(props);
        this.state = {
            activeStep: 1, completed: 0, enterBilling: false, shippingMethod: -1, date: 0, open: false, termsRead: false, acceptBail: true, acceptTerms: true, firstName: "", lastName: "", address: ""
        }
        this.totalPriceInclFees = this.roundMoney(this.props.totalPrice * 1.68) + this.fishingLiscense;
    }
    validateDate(value: string) {
        return validator.isDate(value);
    }
    roundMoney(n: number): number {
        return Math.ceil(n * 100) / 100;
    }
    createItem(index: number, imgSrc: string, name: string, q: number, price: number): Object {

        return {
            childKey: index,
            image: imgSrc,
            header: name,
            description: "Price: + $" + price,
            meta: '',
            extra: 'Quantity: ' + q,
        }

    }

    getCartList() {
        let items: Array<Object> = [];
        let i = 0;
        this.props.cart.forEach((v, k) => {
            let p = (this.props.priceMap.get(k) as number) * v;
            let img = this.props.imageMap.get(k) as string;
            let it = this.createItem(i, img, k, v, p);
            items.push(it);
            i += 1;
            // items.push(<><List.Item>
            //     <List.Content>
            //         <List.Header as='a'>{k} - ${(this.props.priceMap.get(k) as number) * v}</List.Header>
            //         <List.Description>
            //             Quantity: {v}
            //         </List.Description>
            //     </List.Content>
            // </List.Item></>);
        });
        return <Item.Group items={items} />;

    }

    render() {
        return (
            <>
                <div className='HW2-Cart-Checkout-Steps'>
                    <Step.Group>
                        <Step active={this.state.activeStep === 1} completed={this.state.completed > 0}  >
                            <Icon name='truck' />
                            <Step.Content>
                                <Step.Title>Shipping</Step.Title>
                                <Step.Description>Choose your shipping options</Step.Description>
                            </Step.Content>
                        </Step>

                        <Step active={this.state.activeStep === 2} completed={this.state.completed > 1}  >
                            <Icon name='payment' />
                            <Step.Content>
                                <Step.Title>Billing</Step.Title>
                                <Step.Description>Billing information</Step.Description>
                            </Step.Content>
                        </Step>

                        <Step active={this.state.activeStep === 3} completed={this.state.completed > 2}  >
                            <Icon name='info' />
                            <Step.Content>
                                <Step.Title>Confirm Order</Step.Title>
                            </Step.Content>
                        </Step>
                    </Step.Group></div>
                <div className='HW2-Cart-Checkout'>

                    <div>
                        <div className='HW2-Cart-List'>
                            {this.getCartList()}</div>
                    </div>
                    <div className='HW2-Price-Checkout-Dark'>

                        <Segment >
                            <Grid columns={1} relaxed="very">
                                <Grid.Column>
                                    Price: ${this.props.totalPrice} <br />
                                    Tax: + ${this.roundMoney(this.totalPriceInclFees - this.props.totalPrice)} <br />
                                    Fishing License: + ${50} (billed every full moon)
                                    <Divider></Divider>
                                    Total Price: ${this.totalPriceInclFees}
                                </Grid.Column>

                                <Grid.Column>
                                    <Label pointing="right">Shipping Method:</Label><Select placeholder='Select shipping method' options={this.shippingOptions} onChange={(e, d) => {
                                        this.setState({ completed: 1, shippingMethod: d.selection });
                                    }} disabled={(this.state.activeStep != 1)} />
                                </Grid.Column>
                                {(this.state.activeStep == 1) && <>
                                    <Divider vertical></Divider>

                                    <Grid.Column>
                                        <ButtonGroup>
                                            {/* <Button size='huge' color='red' animated onClick={() => {
                                                this.props.onOrderCanceled();
                                            }} >
                                                <Button.Content visible>Cancel Order</Button.Content>
                                                <Button.Content hidden> <Icon name="x"></Icon></Button.Content>

                                            </Button>
                                            <Button.Or /> */}
                                            <Button size='huge' color='blue' animated onClick={() => {
                                                this.setState({ enterBilling: true, activeStep: 2 })
                                            }} disabled={this.state.completed != 1}>
                                                <Button.Content visible>Enter Billing Info</Button.Content>
                                                <Button.Content hidden> <Icon name="arrow right"></Icon></Button.Content>
                                            </Button>
                                        </ButtonGroup>
                                    </Grid.Column>
                                </>
                                }

                                {this.state.enterBilling && <>
                                    <Grid.Column><h3>Enter Billing Info</h3></Grid.Column>
                                    <Grid.Column>
                                        <div className='HW2-Left-Text'>
                                            <Form size='large'>
                                                <Form.Group widths='equal'>
                                                    <Form.Input fluid label='First name' placeholder='First name' required onChange={(e, v) => { this.setState({ firstName: v.value }) }} />
                                                    <Form.Input fluid label='Last name' placeholder='Last name' required onChange={(e, v) => { this.setState({ lastName: v.value }) }} /> </Form.Group>
                                                <Form.Group widths='equal'>
                                                    <Form.Input fluid label='Credit Card Number' placeholder='####-####-###' required />
                                                    <Form.Input fluid label='Expiration Date' placeholder='MM/YY' onChange={(e) => {
                                                    }} required />
                                                    <Form.Input fluid label='Security Code' placeholder='###' required />
                                                </Form.Group>
                                                <Form.Group widths='equal'>
                                                    <Form.Input fluid label='Address 1' placeholder='Address 1' required onChange={(e, v) => { this.setState({ address: v.value }) }} />
                                                    <Form.Input fluid label='Address 2' placeholder='Address 2' /> </Form.Group>
                                                <Form.Input fluid label='City' placeholder='City' required />
                                                <Form.Input fluid label='Zip/Postal' placeholder='Zip/Postal' required />
        
                                            </Form>
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column>
                                    <ButtonGroup>
                                                    {/* <Button size='huge' color='red' animated onClick={() => {
                                                        this.props.onOrderCanceled();
                                                    }} >
                                                        <Button.Content visible>Cancel Order</Button.Content>
                                                        <Button.Content hidden> <Icon name="x"></Icon></Button.Content>

                                                    </Button>
                                                    <Button.Or /> */}
                                                    <Form.Button size='huge' color='blue' animated onClick={() => {
                                                        this.setState({ completed: 2, activeStep: 3, enterBilling: false });
                                                    }} disabled={this.state.activeStep != 2}>
                                                        <Button.Content visible>Continue</Button.Content>
                                                        <Button.Content hidden> <Icon name="arrow right"></Icon></Button.Content>
                                                    </Form.Button>
                                                </ButtonGroup>
                                    </Grid.Column>
                                </>}
                                <Grid.Column>
                                    {this.state.activeStep == 3 && <>
                                        <div className='HW2-Final-Confirmation-Form'>

                                            <Checkbox
                                                control={Checkbox} defaultChecked
                                                label={{ children: `I agree to be bailed $${this.totalPriceInclFees} and solemly swear to adhere to the law of no backsies` }}
                                                onChange={(e, c) => { this.setState({ acceptBail: c.checked as boolean }) }}
                                            />
                                            <div
                                                className="HW2-Link" onClick={() => this.setState({ open: true })}><a>terms</a></div>
                                            <Checkbox
                                                label={<label>I agree to the terms and conditions of purchase</label>}
                                                onChange={(e, c) => { this.setState({ acceptTerms: c.checked as boolean }) }}
                                                defaultChecked/>


                                        </div>
                                        <ButtonGroup>
                                        {(this.state.acceptBail && this.state.acceptTerms) && <>
                                                <a href="/HW2dark/success"><Button size='huge' color='blue' animated onClick={() => {
                                                    this.setState({ completed: 3, activeStep: 4, enterBilling: false });
                                                    //this.props.onOrderComplete();
                                                }} disabled={!(this.state.acceptBail && this.state.acceptTerms)}>
                                                    <Button.Content visible>Finalize Order</Button.Content>
                                                    <Button.Content hidden> <Icon name="arrow right"></Icon></Button.Content>
                                                </Button>
                                                </a>
                                            </>}

                                            {!(this.state.acceptBail && this.state.acceptTerms) && <>
                                                <Button size='huge' color='blue' animated onClick={() => {
                                                    this.setState({ completed: 3, activeStep: 4, enterBilling: false });
                                                    //this.props.onOrderComplete();

                                                }} disabled={!(this.state.acceptBail && this.state.acceptTerms)}>
                                                    <Button.Content visible>Finalize Order</Button.Content>
                                                    <Button.Content hidden> <Icon name="arrow right"></Icon></Button.Content>
                                                </Button>
                                            </>}
                                        </ButtonGroup>
                                    </>}

                                </Grid.Column>
                            </Grid>

                        </Segment>
                    </div>
                </div>
                <Modal
                    open={this.state.open}
                    onClose={() => this.setState({ open: false, termsRead: true })}
                    onOpen={() => this.setState({ open: true })}
                >
                    <Modal.Header>TERMS AND CONDITIONS OF PURCHASE</Modal.Header>
                    <Modal.Content scrolling>
                        <Modal.Description>
                            <div style={{fontSize:"4px",color:"yellow"}}>
                                <p >
                                    By accepting this agreement you enter into a binding and eternal contract with the ruinous powers to
                                    engage in full and total custodianship of (1) human soul, granted to you in exchange for the payment
                                    described in your purchase summary. You will also be mailed a frozen fish as described to you in the
                                    listing. This fish, henceforth called the “fish vessel”, represents the binding terms of your
                                    custodianship, and must be kept frozen at all times to avoid the risk of an all-consuming flame that can
                                    never be quenched. You hereby indemnify Cob’s of any harm caused by allowing the fish vessel to
                                    thaw, including but not limited to property damage, incineration, and the formation of gaping maws of
                                    despair on your property.
                                </p>
                                <p >
                                    By consuming the fish vessel, you forfeit any rights to the above contracted soul, and agree to render
                                    your soul onto Cob’s, or our chosen agent, upon your expiration. To cancel this contract at any time,
                                    simply resurrect the fish vessel using the necromantic arts, then cast the living fish vessel into a suitable
                                    void, no less than 24 miles deep. Attach a notarized copy of your name, social security number, order
                                    number, and exact second of birth to ensure processing of your cancellation.
                                </p>
                            </div>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={() => this.setState({ termsRead: true, open: false })} primary>
                            Close <Icon name='chevron right' />
                        </Button>
                    </Modal.Actions>
                </Modal>
            </>)
    }
}

export default CobSeafoodShopCheckoutDark;
