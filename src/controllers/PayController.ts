import { Request, Response } from 'express'
import PayService from '../services/PayService'

export default class PayController {
  PayService: PayService
  constructor () {
    this.PayService = new PayService()
  }

  async getPaymentLink (req: Request, res: Response) {
    try {
      const payment = await this.PayService.createPayment(req.body)

      return res.json(payment)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: true, msg: 'Failed to create payment' })
    }
  }
}
