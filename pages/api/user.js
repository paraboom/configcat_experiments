const configcat =  require('configcat-node')
console.log(configcat)
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0'

const logger = configcat.createConsoleLogger(3);
const configCatClient = configcat.createClientWithAutoPoll('0ATZCIUy706IFNtnraKYxw/vJbMI6JXxEitXqhCwGiYPg', {
  logger,
  pollIntervalSeconds: 10
});

export default withApiAuthRequired(async (req, res) => {
  const { user } = getSession(req, res)
  const useCustomGreeting = await configCatClient.getValueAsync('customGreeting', false, {
    identifier: user.sub,
    email: user.email
  })
  console.log({user, useCustomGreeting})
  res.json({useCustomGreeting})
})