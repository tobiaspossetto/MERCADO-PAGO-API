import { body } from 'express-validator'

export const paymentSchema = [
  body('items').isArray({ min: 1 }).withMessage('items must be an array with at least one item'),
  body('items.*.title').isString().withMessage('title of item must be a string'),
  body('items.*.description').isString().withMessage('title of item must be a string'),
  body('items.*.quantity').isNumeric().isLength({ min: 1 }).withMessage('quantity of item must be a number greater than 0'),
  body('items.*.picture_url').isString().withMessage('picture_url of item must be a string'),

  body('items.*.unit_price').isNumeric().isLength({ min: 1 }).withMessage('unit_price of item must be a number greater than 0'),
  body('payer_email').isEmail().withMessage('payer_email must be a email ')

]
