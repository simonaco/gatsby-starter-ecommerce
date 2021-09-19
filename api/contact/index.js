const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
module.exports = async function(context, req) {
  context.log('JavaScript HTTP trigger function processed a request.')
  context.log(req.body)
  const msg = {
    to: 'simona.cotin@gmail.com',
    from: 'simona.cotin@gmail.com',
    subject: `${req.body.values.name} sent you a message`,
    text: `Checkout this new message coming from your website! ${req.body.values.message}`,
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  context.log(msg)
  const response = await sgMail.send(msg)
  context.log(response)
  context.res.json(response.body)
}
