const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
module.exports = async function(context, req) {
  context.log('JavaScript HTTP trigger function processed a request.')
  context.log(req.body)
  const msg = {
    to: 'simona.cotin@gmail.com',
    from: 'simona_cotin@yahoo.com',
    subject: `${req.body.values.name} sent you a message`,
    text: `Checkout this new message coming from your website! ${req.body.values.message}`,
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  sgMail.send(msg)

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: {
      message:
        'Thank you for your email, we are going to get back to you in just a bit!',
    },
  }
}
