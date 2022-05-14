import axios from 'axios'

interface IItemCart{
    title: string
         description: string
        quantity: number
        picture_url: string
        unit_price: number
}

interface IBodyPayService extends IItemCart {
    payer_email: string
    items: IItemCart[]
}
export default class PayService {
  async createPayment (body: IBodyPayService) {
    const url = 'https://api.mercadopago.com/checkout/preferences'
    // get date in 10 minutes
    const date = new Date()
    date.setMinutes(date.getMinutes() + 5)
    const dateString = date.toISOString()

    const body2 = {
      ...body,
      back_urls: {
        success: 'https://b66a-170-244-57-41.sa.ngrok.io/success',
        pending: '/pending',
        failure: 'https://b66a-170-244-57-41.sa.ngrok.io/error'

      },
      date_of_expiration: dateString,
      payment_methods: {
        installments: 6
      }
      // notification_url: 'https://a011-170-244-57-41.sa.ngrok.io/api/payment/notification'

    }

    try {
      const payment = await axios.post(url, body2, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + process.env.ACCESS_TOKEN
        }
      })

      return { id: payment.data.id, collector_id: payment.data.collector_id, init_point: payment.data.init_point }
    } catch (error) {
      console.error(error)
      return { error: true, message: 'error enviando los datos del pago' }
    }
  }
}
