import Stripe from "stripe"
import config from "../../config"

const stripe = new Stripe(config.stripe_secret as string)

export const makePayment = async(productName:string, price:number, customer_email:string, orderId:string)=>{
    const product = await stripe.products.create({
        name:productName,
    })
    if(product){
        const prices = await stripe.prices.create({
            product:product.id,
            unit_amount:Math.round(price),
            currency:"USD"
        })
    if(prices.id){
        const session = await stripe.checkout.sessions.create({
            line_items:[
                {
                    price:`${prices.id}`,
                    quantity:1,
                }
            ],
            mode:"payment",
            success_url:`https://localhost:3000/payment-success?session_id={CHECKOUT_SESSION_ID}&order=${orderId}`,
            cancel_url:"http://localhost:3000/payment-failed",
            customer_email
        })
        return session
    }

    }
    
}


export const verifyPaymentUtility = async(sessionId:string)=>{
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    return session
}