import { Router, Request, Response } from 'express'
import PayController from '../controllers/PayController'
import { paymentSchema } from '../schema/paymentSchema'
import { validateRequestPayment } from '../middlewares/PaymentValidator'
const PaymentController = new PayController()

const PayRouter = Router()

PayRouter.post('/', paymentSchema, validateRequestPayment, (req:Request, res:Response) => {
  PaymentController.getPaymentLink(req, res)
})

PayRouter.post('/notification', async (req:Request, res:Response) => {
  console.log(req.query)
  console.log(req.body)
  console.log('pago recibido')
  return res.send('COMPRA REALIZADA')
})
export default PayRouter
