Issues that need to be addressed

## Rate Limter

The delete endpoint is not being used in the reducer.
Rather than filter through the array of stories to remove them, the delete endpoint should be hit to remove the story from the database.

## Admin Approved Non Members

Implement an approval feature. In order for an anon submission to go live it must be approved by an admin user.
